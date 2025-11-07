import { defineStore } from "pinia";
import {ref, shallowRef, toRef } from 'vue'
import api from '@/services/api'

export const useOrderStore = defineStore('order', () => {
    
    const orders = ref([])
    const formModel = ref(createNewRecord())
    const dialog = shallowRef(false)
    const isEditing = toRef(() => !!formModel.value.id)
    
    function createNewRecord () {
        return {
          user_id: '',
          food_id: '',
          quantity: '',
          status: ''
        }
      }

    async function save () {
        if (isEditing.value) {
          // Update function
          try{
              await api.post(`/updateOrder/${formModel.value.id}`, formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save order', error?.response?.message)
          }
        } else {
          // Save function
          try{
              await api.post('/saveOrder', formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save order', error?.response?.message)
          }
        }
    
        dialog.value = false
      }

    async function getOrders() {
        try{
            const response = await api.get('/getOrder')
            orders.value = response.data.Order;
        }
        catch(error){
            console.error('Failed to fetch orders', error?.response?.message);
        }
    }


    function add () {
        formModel.value = createNewRecord()
        dialog.value = true
      }
    
      function edit (id) {
        const found = orders.value.find(order => order.id === id) 
        formModel.value = {
          id: found.id,
          user_id: found.user_id,
          food_id: found.food_id,
          quantity: found.quantity,
          status: found.status
        }
    
        dialog.value = true
      }
    
      async function remove (id) {
          try{
              await api.delete(`/deleteOrder/${id}`)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save order', error?.response?.message)
          }
      }
    
      
    
      function reset () {
        dialog.value = false
        formModel.value = createNewRecord()
        orders.value = [
  
        ]
      }

    return {
        orders, 
        formModel, 
        dialog, 
        isEditing,
        add,
        edit,
        remove,
        save,
        reset,
        getOrders,
        createNewRecord
    }
    
})