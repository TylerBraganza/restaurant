<script setup>

import {ref} from 'vue'
import {useRouter} from "vue-router"

//models
const email = ref(null)
const password = ref(null)


// user interface models
const router = useRouter();
const showPassword = ref(false)

//function
function login(){
    try {
        //get user data
        let user = JSON.parse(localStorage.getItem("signUpData"));
        //check user details
        if(email.value = user.email && password.value == user.password){
            localStorage.setItem( "isLoggedIn", true );
            router.push('/')

        }else{
            console.log("Invalid credentials")
        }

        // To Do: send data to backend
    } catch (err) {
        console.error('Login process failed', err)
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
                        <router-link to="/Signup">SignUp</router-link>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>