<script setup>

  import { ref } from 'vue'
  
  import api from '../services/api'
  import { RouterLink } from 'vue-router'
  
  const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }
  
  const state = ref({
    ...initialState,
  })
  
  async function signup() {
    try {
      const response = await api.post('/register', state.value)
      alert('Registration Successful!:', response.data)
    } catch (error) {
      console.error('Login Failed', error.response?.data || error.message)
    }
    clear()
  }
  
  function clear() {
    state.value = { ...initialState }
  }
</script>

<template>
    <v-container align="center">
        <v-row>
            <v-col>
                <v-card class="pa-6" width="600" justify="center" color="#222222">
                    <v-card-title style="font-family: 'Courier New', Courier, monospace;">SIGN UP</v-card-title>
                    <v-text-field v-model="state.name" label="Name" :rules="[(v) => !!v || 'Name is required']"></v-text-field>
                    <v-text-field v-model="state.email" label="Email"
                        :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required> 
                    </v-text-field>
                    <v-text-field v-model="state.password" label="Password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required
                    ></v-text-field>
                    <v-text-field label="Confirm Password"
                        v-model="state.password_confirmation"
                        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        @click:append="showConfirmPassword = !showConfirmPassword"
                        :rules="[
                            (v) => !!v || 'Please confirm your password',
                            (v) => v === state.password || 'Passwords must match',
                        ]"
                        required
                    ></v-text-field>
                    <v-card-actions>
                        <v-btn color="white" variant="elevated" @click="signup()">SIGN UP</v-btn>
                    </v-card-actions>
                    <v-card-text style="font-family: 'Courier New', Courier, monospace;">Already registered?
                        <router-link to="/Login">Login</router-link>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>