<script setup>
import api from '@/services/api';
import TokenService from '@/services/tokenService';

    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))

    async function logout() {
        const response = await api.post("/logout")
        alert(JSON.stringify(response.data))
        TokenService.logout()
        
    }
</script>

<template>
    <h1></h1>
    <v-app-bar color = "#222222">
        <v-app-bar-title>THE GRILL</v-app-bar-title>

        <v-btn to = "/">Home</v-btn>
        <v-btn to="/welcomepage">Welcome</v-btn>
        <v-btn to = "/menu">Menu</v-btn>
        <!-- <v-btn to = "/reservation">Reservation</v-btn>
        <v-btn to = "/contactus">Contact Us</v-btn>
        <v-btn to = "/orders" v-if = "isLoggedIn"> My Orders</v-btn> -->
        <v-btn to = "/userpage"> Users</v-btn>
        <v-btn to = "/restaurantpage">Restaurants</v-btn>
        <v-btn to = "/categorypage">Categories</v-btn>
        
        <!-- <v-btn to = "/UserProfile" v-if = "isloggedin">User Profile</v-btn>
        <v-btn to = "/Signup">Signup</v-btn>-->
        <v-btn to = "/Login" v-if = "!isLoggedIn">Login</v-btn>

        <v-avatar to="/UserProfile" v-if = "isLoggedIn">
            <span class="text-h5 text-white">T</span>
        </v-avatar>



    </v-app-bar>
</template>