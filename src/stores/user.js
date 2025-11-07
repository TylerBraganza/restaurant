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
          role_id: '',
          password: '',
          password_confirmation: ''
        }
      }

    async function save () {
        if (isEditing.value) {
          // Update function
          try {
            const $response = await axios.post(
              `http://127.0.0.1:8000/api/updateUser/${formModel.value.id}`,
              formModel.value,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                }
              }
            )
            // Optional: handle response
            console.log('User updated:', $response.data)
          } catch (error) {
            console.error('Failed to update user:', error?.response?.data || error.message)
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
          role_id: found.role_id,
          user_image: '',
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