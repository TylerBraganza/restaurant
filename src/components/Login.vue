<script setup>

import {ref} from 'vue'
import {useRouter} from "vue-router"
import api from '@/services/api'
import TokenService from '@/services/tokenService'

const email = ref('')
const password = ref('')

const showPassword = ref(false)

async function login(){
    try{
        const response = await api.post('/login',
            {'email':email.value,
             'password':password.value
            });
        TokenService.setToken(response.data)
        alert('Login Successful!', response.data)
        return response.data;
    }
    catch(error){
        console.error('Login Failed', error.response?.data)
    }
    
    
}

</script>

<template>
    <v-container align="center">
        <v-row>
            <v-col>
                <v-card class="pa-6" width="600" justify="center" color="#222222">
                    <v-card-title style="font-family: 'Courier New', Courier, monospace;">LOGIN</v-card-title>
                    <v-text-field v-model="email" label="Email"
                        :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required> 
                    </v-text-field>
                    <v-text-field v-model="password" label="Password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required
                    ></v-text-field>
                    <v-card-actions>
                        <v-btn color="white" variant="elevated" @click="login()">LOGIN</v-btn>
                    </v-card-actions>
                    <v-card-text style="font-family: 'Courier New', Courier, monospace;">Don't have an account?
                        <router-link to="/signup">SignUp</router-link>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>