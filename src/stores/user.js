import { defineStore } from "pinia";
import {ref, shallowRef, toRef } from 'vue'
import api from '@/services/api'

export const useUserStore = defineStore('user', () => {
    
    const users = ref([])
    const formModel = ref(createNewRecord())
    const dialog = shallowRef(false)
    const isEditing = toRef(() => !!formModel.value.id)
    
    function createNewRecord () {
        return {
          name: '',
          email: '',
          user_role: '',
          password: '',
          password_confirmation: ''
        }
      }

    async function save () {
        if (isEditing.value) {
          // Update function
          try{
              await api.post(`/updateUser/${formModel.value.id}`, formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save user', error?.response?.message)
          }
        } else {
          // Save function
          try{
              await api.post('/register', formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save user', error?.response?.message)
          }
        }
    
        dialog.value = false
      }

    async function getUsers() {
        try{
            const response = await api.get('/getUsers')
            users.value = response.data.User;
        }
        catch(error){
            console.error('Failed to fetch users', error?.response?.message);
        }
    }


    function add () {
        formModel.value = createNewRecord()
        dialog.value = true
      }
    
      function edit (id) {
        const found = users.value.find(user => user.id === id) 
        formModel.value = {
          id: found.id,
          name: found.name,
          email: found.email,
          user_role: found.user_role,
          password: '',
          password_confirmation: '',
        }
    
        dialog.value = true
      }
    
      async function remove (id) {
          try{
              await api.delete(`/deleteUser/${id}`)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save user', error?.response?.message)
          }
      }
    
      
    
      function reset () {
        dialog.value = false
        formModel.value = createNewRecord()
        users.value = [
  
        ]
      }

    return {
        users, 
        formModel, 
        dialog, 
        isEditing,
        add,
        edit,
        remove,
        save,
        reset,
        getUsers,
        createNewRecord
    }
    
})