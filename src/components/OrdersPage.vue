<template>
    <v-container>
        <v-sheet border rounded>
            <v-data-table
                :headers="headers"
                :hide-default-footer="orderStore.orders.length < 11"
                :items="orderStore.orders"
            >
                <template v-slot:top>
                <v-toolbar color="#222" flat>
                    <v-toolbar-title>
                    <v-icon color="white" icon="mdi-cart" size="x-small" start></v-icon>
        
                    Orders
                    </v-toolbar-title>
        
                    <v-btn
                    v-if="AuthService.hasAbility('admin')"
                    class="me-2"
                    prepend-icon="mdi-plus"
                    rounded="lg"
                    text="Add a Order"
                    border
                    @click="orderStore.add"
                    ></v-btn>
                </v-toolbar>
                </template>
        
                <template v-slot:item.title="{ value }">
                <v-chip :text="value" border="thin opacity-25" prepend-icon="mdi-order" label>
                    <template v-slot:prepend>
                    <v-icon color="medium-emphasis"></v-icon>
                    </template>
                </v-chip>
                </template>
        
                <template v-slot:item.actions="{ item }">
                <div class="d-flex ga-2 justify-end">
                    <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="orderStore.edit(item.id)"></v-icon>
        
                    <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="orderStore.remove(item.id)"></v-icon>
                </div>
                </template>
        
                <template v-slot:no-data>
                <v-btn
                    prepend-icon="mdi-backup-restore"
                    rounded="lg"
                    text="Reset data"
                    variant="text"
                    border
                    @click="orderStore.reset"
                ></v-btn>
                </template>
            </v-data-table>
            </v-sheet>
        
            <v-dialog v-model="orderStore.dialog" max-width="500">
            <v-card
                :subtitle="`${isEditing ? 'Update' : 'Create'} your favorite order`"
                :title="`${isEditing ? 'Edit' : 'Add'} a Order`"
            >
                <template v-slot:text>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-select
                    v-model="orderStore.formModel.food_id"
                    :items="foodStore.foods"
                    item-title="name"
                    item-value="id"
                    label="Food"/>
                    </v-col>
        
                    <v-col cols="12" md="12">
                    <v-select
                    cols="12"
                    v-model="orderStore.formModel.user_id"
                    :items="userStore.users"
                    item-title="name"
                    item-value="id"
                    label="User"/>
                    </v-col>

                    <v-col cols="12" md="12">
                    <v-text-field v-model="orderStore.formModel.quantity" label="Quantity"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12">
                        <v-select
                    cols="12"
                    v-model="orderStore.formModel.status"
                    :items="['Served', 'Delivered', 'Being prepared', 'Declined']"
                    label="Status"/>
                    </v-col>

                </v-row>
                </template>
        
                <v-divider></v-divider>
        
                <v-card-actions class="bg-surface-light">
                <v-btn text="Cancel" variant="plain" @click="orderStore.dialog = false"></v-btn>
        
                <v-spacer></v-spacer>
        
                <v-btn text="Save" @click="orderStore.save"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
  </template>
<script setup>
    import { useOrderStore } from '@/stores/order'
    import { onMounted, ref } from 'vue'
    import AuthService from '@/services/authService'
    import { useFoodStore } from '@/stores/food'
    import { useUserStore } from '@/stores/user'

    const orderStore = useOrderStore()
    const foodStore = useFoodStore()
    const userStore = useUserStore()

    const users = ref([])
    const food = ref([])

    onMounted(() => {
      orderStore.getOrders();
      foodStore.getFoods();
      userStore.getUsers();
    })
      
    const headers = [
        { title: 'ID', key: 'id', align: 'start' },
        { title: 'User', key: 'user_name' },
        { title: 'Food', key: 'food_name' },
        { title: 'Quantity', key: 'quantity' },
        { title: 'Status', key: 'status' },
        { title: 'Actions', key: 'actions', align: 'end', sortable: false },
      ]
</script>