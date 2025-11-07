import { defineStore } from "pinia";
import {ref, shallowRef, toRef } from 'vue'
import api from '@/services/api'
import CategoryPage from "@/components/CategoryPage.vue";

export const useFoodStore = defineStore('food', () => {
    
    const foods = ref([])
    const formModel = ref(createNewRecord())
    const dialog = shallowRef(false)
    const isEditing = toRef(() => !!formModel.value.id)
    
    function createNewRecord () {
        return {
          name: '',
          price: '',
          description: '',
          food_code:'',
          category_id:'',
          restaurant_id:''

        }
      }

    async function save () {
        if (isEditing.value) {
          // Update function
          try{
              await api.post(`/updateFood/${formModel.value.id}`, formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save food', error?.response?.message)
          }
        } else {
          // Save function
          try{
              await api.post('/saveFood', formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save food', error?.response?.message)
          }
        }
    
        dialog.value = false
      }

    async function getFoods() {
        try{
            const response = await api.get('/getFood')
            foods.value = response.data.Food
        }
        catch(error){
            console.error('Failed to fetch foods', error?.response?.message);
        }
    }


    function add () {
        formModel.value = createNewRecord()
        dialog.value = true
      }
    
      function edit (id) {
        const found = foods.value.find(food => food.id === id) 
        formModel.value = {
          id: found.id,
          name: found.name,
          price: found.price,
          description: found.description,
          food_code: found.food_code,
          category_id: found.category_id,
          restaurant_id: found.restaurant_id
        }
    
        dialog.value = true
      }
    
      async function remove (id) {
          try{
              await api.delete(`/deleteFood/${id}`)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save food', error?.response?.message)
          }
      }
    
      
    
      function reset () {
        dialog.value = false
        formModel.value = createNewRecord()
        foods.value = [
  
        ]
      }

    return {
        foods, 
        formModel, 
        dialog, 
        isEditing,
        add,
        edit,
        remove,
        save,
        reset,
        getFoods,
        createNewRecord
    }
    
})