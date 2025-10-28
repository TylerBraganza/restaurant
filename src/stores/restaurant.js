import { defineStore } from "pinia";
import {ref, shallowRef, toRef } from 'vue'
import api from '@/services/api'

export const useRestaurantStore = defineStore('restaurant', () => {
    
    const restaurants = ref([])
    const formModel = ref(createNewRecord())
    const dialog = shallowRef(false)
    const isEditing = toRef(() => !!formModel.value.id)
    
    function createNewRecord () {
        return {
          name: '',
          address: '',
          description: '',
        }
      }

    async function save () {
        if (isEditing.value) {
          // Update function
          try{
              await api.post(`/updateRestaurant/${formModel.value.id}`, formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save restaurant', error?.response?.message)
          }
        } else {
          // Save function
          try{
              await api.post('/saveRestaurant', formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save restaurant', error?.response?.message)
          }
        }
    
        dialog.value = false
      }

    async function getRestaurants() {
        try{
            const response = await api.get('/getRestaurant')
            restaurants.value = response.data.Restaurant;
        }
        catch(error){
            console.error('Failed to fetch restaurants', error?.response?.message);
        }
    }


    function add () {
        formModel.value = createNewRecord()
        dialog.value = true
      }
    
      function edit (id) {
        const found = restaurants.value.find(restaurant => restaurant.id === id) 
        formModel.value = {
          id: found.id,
          name: found.name,
          address: found.address,
          description: found.description,
        }
    
        dialog.value = true
      }
    
      async function remove (id) {
          try{
              await api.delete(`/deleteRestaurant/${id}`)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save restaurant', error?.response?.message)
          }
      }
    
      
    
      function reset () {
        dialog.value = false
        formModel.value = createNewRecord()
        restaurants.value = [
  
        ]
      }

    return {
        restaurants, 
        formModel, 
        dialog, 
        isEditing,
        add,
        edit,
        remove,
        save,
        reset,
        getRestaurants,
        createNewRecord
    }
    
})