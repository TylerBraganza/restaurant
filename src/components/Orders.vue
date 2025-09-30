<script setup>
const orders = JSON.parse(localStorage.getItem("order"))
</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="item in orders" :key="item" md="12">
                <v-row>
                    <v-col md="4">
                        <v-card class="pa-6 rounded-lg" justify="center" color="#222222">
                            <v-img :src="item.menuItem.image" height="170" width="500" cover></v-img>
                        </v-card>
                    </v-col>
                    <v-col md="6">
                        <v-card class="pa-6 rounded-lg">
                            <v-card-text>{{ item.menuItem.name }}</v-card-text>
                            <v-card-subtitle>Quantity: {{ item.quantity }}</v-card-subtitle>
                            <v-card-title>Total: {{ item.quantity * item.menuItem.price }}</v-card-title>
                            <v-card-actions>
                                <v-btn color="#222222" variant="elevated">Remove</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>       
        </v-row>
    </v-container>
</template>