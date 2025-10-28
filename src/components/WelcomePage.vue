<script setup>
import TokenService from '@/services/tokenService';
import { computed } from 'vue';

const user = computed(()=>{
    return user.value = TokenService.getUser()
})
</script>

<template>
    <div style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" class="pa-6">
        <h1>Welcome {{ user.name }}</h1>
        <h2>Role: {{ user.role.name }}</h2>
        <v-divider></v-divider>
    </div>
</template>