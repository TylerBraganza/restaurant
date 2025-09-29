<script setup>

import {ref} from 'vue'

//models
const name = ref(null)
const email = ref(null)
const phone = ref(null)
const deliveryAddress = ref(null)
const password = ref(null)

// user interface models
const showPassword = ref(false)
const showConfirmPassword = ref(false)

//functions
function signUp(){
    const signUpData = {
        'name': name.value,
        'email': email.value,
        'phone': phone.value,
        'deliveryAddress': deliveryAddress.value,
        'password': password.value,
    }

    try {
        // save data on browser
        localStorage.setItem("signUpData", JSON.stringify(signUpData));

        // To do: Send Data to backend

    } catch(err) {
        console.error('Sign Up process failed', err)
    }
}
</script>

<template>
    <v-container align="center">
        <v-row>
            <v-col>
                <v-card class="pa-6" width="600" justify="center" color="#222222">
                    <v-card-title style="font-family: 'Courier New', Courier, monospace;">SIGN UP</v-card-title>
                    <v-text-field v-model="name" label="Name" :rules="[(v) => !!v || 'Name is required']"></v-text-field>
                    <v-text-field v-model="email" label="Email"
                        :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required> 
                    </v-text-field>
                    <v-text-field v-model="phone" label="Phone Number" type="number"></v-text-field>
                    <v-text-field v-model="deliveryAddress" label="Delivery Address" :rules="[(v) => !!v || 'Delivery Address is required']"></v-text-field>
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
                    <v-text-field label="Confirm Password"
                        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        @click:append="showConfirmPassword = !showConfirmPassword"
                        :rules="[
                            (v) => !!v || 'Please confirm your password',
                            (v) => v === password || 'Passwords must match',
                        ]"
                        required
                    ></v-text-field>
                    <v-card-actions>
                        <v-btn color="white" variant="elevated" @click="signUp()">SIGN UP</v-btn>
                    </v-card-actions>
                    <v-card-text style="font-family: 'Courier New', Courier, monospace;">Already registered?
                        <router-link to="/Login">Login</router-link>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>