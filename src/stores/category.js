import { defineStore } from "pinia";
import {ref, shallowRef, toRef } from 'vue'
import api from '@/services/api'

export const useCategoryStore = defineStore('category', () => {
    
    const categorys = ref([])
    const formModel = ref(createNewRecord())
    const dialog = shallowRef(false)
    const isEditing = toRef(() => !!formModel.value.id)
    
    function createNewRecord () {
        return {
          name: '',
          description: '',
        }
      }

    async function save () {
        if (isEditing.value) {
          // Update function
          try{
              await api.post(`/updateCategory/${formModel.value.id}`, formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save category', error?.response?.message)
          }
        } else {
          // Save function
          try{
              await api.post('/saveCategory', formModel.value)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save category', error?.response?.message)
          }
        }
    
        dialog.value = false
      }

    async function getCategorys() {
        try{
            const response = await api.get('/getCategory')
            categorys.value = response.data.Category;
        }
        catch(error){
            console.error('Failed to fetch categorys', error?.response?.message);
        }
    }


    function add () {
        formModel.value = createNewRecord()
        dialog.value = true
      }
    
      function edit (id) {
        const found = categorys.value.find(category => category.id === id) 
        formModel.value = {
          id: found.id,
          name: found.name,
          description: found.description,
        }
    
        dialog.value = true
      }
    
      async function remove (id) {
          try{
              await api.delete(`/deleteCategory/${id}`)
              window.location.reload()
          }
          catch(error){
              console.error('Failed to save category', error?.response?.message)
          }
      }
    
      
    
      function reset () {
        dialog.value = false
        formModel.value = createNewRecord()
        categorys.value = [
  
        ]
      }

    return {
        categorys, 
        formModel, 
        dialog, 
        isEditing,
        add,
        edit,
        remove,
        save,
        reset,
        getCategorys,
        createNewRecord
    }
    
})