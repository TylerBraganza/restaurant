<template>
    <v-container>
        <v-sheet border rounded>
            <v-data-table
                :headers="headers"
                :hide-default-footer="foodStore.foods.length < 11"
                :items="foodStore.foods"
            >
                <template v-slot:top>
                <v-toolbar color="#222" flat>
                    <v-toolbar-title>
                    <v-icon color="white" icon="mdi-food-drumstick" size="x-small" start></v-icon>
        
                    Foods
                    </v-toolbar-title>
        
                    <v-btn
                    v-if="AuthService.hasAbility('admin')"
                    class="me-2"
                    prepend-icon="mdi-plus"
                    rounded="lg"
                    text="Add a Food"
                    border
                    @click="foodStore.add"
                    ></v-btn>
                </v-toolbar>
                </template>
        
                <template v-slot:item.title="{ value }">
                <v-chip :text="value" border="thin opacity-25" prepend-icon="mdi-food" label>
                    <template v-slot:prepend>
                    <v-icon color="medium-emphasis"></v-icon>
                    </template>
                </v-chip>
                </template>
        
                <template v-slot:item.actions="{ item }">
                <div class="d-flex ga-2 justify-end">
                    <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="foodStore.edit(item.id)"></v-icon>
        
                    <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="foodStore.remove(item.id)"></v-icon>
                </div>
                </template>
        
                <template v-slot:no-data>
                <v-btn
                    prepend-icon="mdi-backup-restore"
                    rounded="lg"
                    text="Reset data"
                    variant="text"
                    border
                    @click="foodStore.reset"
                ></v-btn>
                </template>
            </v-data-table>
            </v-sheet>
        
            <v-dialog v-model="foodStore.dialog" max-width="500">
            <v-card
                :subtitle="`${isEditing ? 'Update' : 'Create'} your favorite food`"
                :title="`${isEditing ? 'Edit' : 'Add'} a Food`"
            >
                <template v-slot:text>
                <v-row>
                    <v-col cols="12">
                    <v-text-field v-model="foodStore.formModel.name" label="Name"></v-text-field>
                    </v-col>
        
                    <v-col cols="12" >
                    <v-text-field v-model="foodStore.formModel.price" label="Price"></v-text-field>
                    </v-col>

                    <v-col cols="12" >
                    <v-text-field v-model="foodStore.formModel.description" label="Description"></v-text-field>
                    </v-col>

                    <v-col cols="12" >
                    <v-text-field v-model="foodStore.formModel.food_code" label="Food Code"></v-text-field>
                    </v-col>

                <v-col>    
                    <v-select
                    v-model="foodStore.formModel.restaurant_id"
                    :items="restaurantStore.restaurants"
                    item-title="name"
                    item-value="id"
                    label="Restaurant"/>
                </v-col>

                <v-col>    
                    <v-select
                    v-model="foodStore.formModel.category_id"
                    :items="categoryStore.categorys"
                    item-title="name"
                    item-value="id"
                    label="Category"/>
                </v-col>

                </v-row>
                </template>
        
                <v-divider></v-divider>
        
                <v-card-actions class="bg-surface-light">
                <v-btn text="Cancel" variant="plain" @click="foodStore.dialog = false"></v-btn>
        
                <v-spacer></v-spacer>
        
                <v-btn text="Save" @click="foodStore.save"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script setup>
    import { useFoodStore } from '@/stores/food'
    import { onMounted, ref } from 'vue'
    import AuthService from '@/services/authService'
    import { useRestaurantStore } from '@/stores/restaurant'
    import { useCategoryStore } from '@/stores/category'

    const foodStore = useFoodStore()
    const restaurantStore = useRestaurantStore()
    const categoryStore = useCategoryStore()
  
    onMounted(() => {
      foodStore.getFoods();
      categoryStore.getCategorys();
      restaurantStore.getRestaurants();
     
    })
      
    const headers = [
        { title: 'ID', key: 'id', align: 'start' },
        { title: 'Name', key: 'name' },
        { title: 'Price', key: 'price' },
        { title: 'Description', key: 'description' },
        { title: 'Food Code', key: 'food_code' },
        { title: 'Restaurant', key: 'restaurant_name' },
        { title: 'Category', key: 'category_name' },
        { title: 'Actions', key: 'actions', align: 'end', sortable: false },
      ]




    
  </script>