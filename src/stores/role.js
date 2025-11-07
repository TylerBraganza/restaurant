import { defineStore } from "pinia";
import {ref, shallowRef, toRef } from 'vue'
import api from '@/services/api'

export const useRoleStore = defineStore('role', () => {
    
    const roles = ref([])
    const formModel = ref(createNewRecord())
    const dialog = shallowRef(false)
    const isEditing = toRef(() => !!formModel.value.id)
    
    function createNewRecord () {
        return {
          name: '',
          slug: '',
        }
      }

    async function save () {
        if (isEditing.value) {
          // Update function
          try{
              await api.post(`/updateRole/${formModel.value.id}`, formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save role', error?.response?.message)
          }
        } else {
          // Save function
          try{
              await api.post('/saveRole', formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save role', error?.response?.message)
          }
        }
    
        dialog.value = false
      }

    async function getRoles() {
        try{
            const response = await api.get('/getRoles')
            roles.value = response.data.Roles
        }
        catch(error){
            console.error('Failed to fetch roles', error?.response?.message);
        }
    }


    function add () {
        formModel.value = createNewRecord()
        dialog.value = true
      }
    
      function edit (id) {
        const found = roles.value.find(role => role.id === id) 
        formModel.value = {
          id: found.id,
          name: found.name,
          slug: found.slug,
        }
    
        dialog.value = true
      }
    
      async function remove (id) {
          try{
              await api.delete(`/deleteRole/${id}`)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save role', error?.response?.message)
          }
      }
    
      
    
      function reset () {
        dialog.value = false
        formModel.value = createNewRecord()
        roles.value = [
  
        ]
      }

    return {
        roles, 
        formModel, 
        dialog, 
        isEditing,
        add,
        edit,
        remove,
        save,
        reset,
        getRoles,
        createNewRecord
    }
    
})