<script setup>
    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))
</script>

<template>
    <h1></h1>
    <v-app-bar color = "#222222">
        <v-app-bar-title>THE GRILL</v-app-bar-title>

        <v-btn to = "/">Home</v-btn>
        <v-btn to = "/Menu">Menu</v-btn>
        <v-btn to = "/Reservation">Reservation</v-btn>
        <v-btn to = "/ContactUs">Contact Us</v-btn>
        <v-btn to = "/Orders" v-if = "isLoggedIn"> My Orders</v-btn>
        
        <!-- <v-btn to = "/UserProfile" v-if = "isloggedin">User Profile</v-btn>
        <v-btn to = "/Signup">Signup</v-btn>-->
        <v-btn to = "/Login" v-if = "!isLoggedIn">Login</v-btn>

        <v-avatar to="/UserProfile" v-if = "isLoggedIn">
            <span class="text-h5 text-white">T</span>
        </v-avatar>


    </v-app-bar>
</template>