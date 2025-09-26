<script setup>

import { useMenuStore } from '../stores/menu'
const menuStore = useMenuStore()
const menuItem = menuStore.selectedMenuItem

</script>

<template>
    <v-container fluid class="d-flex fill-height">
        <v-card-actions>
            <v-btn to = "/menu"> ⬅ Back To Menu</v-btn>
        </v-card-actions>
        <v-row>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-img :src="menuItem.image" cover height="500"></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-card-title>{{ menuItem.name }}</v-card-title>
                    <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                    <v-card-text>{{ menuItem.longDescription }}</v-card-text>
                    <v-row>
                        <v-col md="2"><v-card-text> Quantity: </v-card-text></v-col>
                        <v-col md="10">
                            <v-number-input
                                density="compact"
                                :min="1"
                                :max="10">
                            </v-number-input>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-btn color="#222222" variant="elevated">Order</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="pa-6 mt-3 rounded-lg" justify="center">
                    <v-row>
                        <v-card-title>Reviews</v-card-title>
                        <v-rating
                        hover 
                        :length="5" 
                        :size="40"
                        :model-value="5"
                        active-color="#222222">

                        </v-rating>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>