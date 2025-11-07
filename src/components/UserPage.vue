<template>
    <v-container>
        <v-sheet border rounded>
            <v-data-table
                :headers="headers"
                :hide-default-footer="userStore.users.length < 11"
                :items="userStore.users"
            >
                <template v-slot:top>
                <v-toolbar color="#222" flat>
                    <v-toolbar-title>
                    <v-icon color="white" icon="mdi-account-group" size="x-small" start></v-icon>
        
                    Users
                    </v-toolbar-title>
        
                    <v-btn
                    class="me-2"
                    prepend-icon="mdi-plus"
                    rounded="lg"
                    text="Add a User"
                    border
                    @click="userStore.add"
                    ></v-btn>
                </v-toolbar>
                </template>
        
                <template v-slot:item.title="{ value }">
                <v-chip :text="value" border="thin opacity-25" prepend-icon="mdi-user" label>
                    <template v-slot:prepend>
                    <v-icon color="medium-emphasis"></v-icon>
                    </template>
                </v-chip>
                </template>
        
                <template v-slot:item.actions="{ item }">
                <div class="d-flex ga-2 justify-end">
                    <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="userStore.edit(item.id)"></v-icon>
        
                    <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="userStore.remove(item.id)"></v-icon>
                </div>
                </template>
        
                <template v-slot:no-data>
                <v-btn
                    prepend-icon="mdi-backup-restore"
                    rounded="lg"
                    text="Reset data"
                    variant="text"
                    border
                    @click="userStore.reset"
                ></v-btn>
                </template>
            </v-data-table>
            </v-sheet>
        
            <v-dialog v-model="userStore.dialog" max-width="500">
            <v-card
                :subtitle="`${isEditing ? 'Update' : 'Create'} your favorite user`"
                :title="`${isEditing ? 'Edit' : 'Add'} a User`"
            >
                <template v-slot:text>
                <v-row>
                    <v-col cols="12">
                    <v-text-field v-model="userStore.formModel.name" label="Name"></v-text-field>
                    </v-col>
        
                    <v-col cols="12" >
                    <v-text-field v-model="userStore.formModel.email" label="Email"></v-text-field>
                    </v-col>

                    <v-select
                    cols="12"
                    v-model="userStore.formModel.role_id"
                    :items="roleStore.roles"
                    item-title="name"
                    item-value="id"
                    label="Role"/>

                    <v-col cols="12">
                        <v-file-input
                          v-model="user_image"
                          placeholder="Upload Profile Photo"
                          accept="image/png, image/jpg, image/jpeg."
                          prepend-icon="mdi-camera"
                          label="Profile Picture"
                        >
                            
                        </v-file-input>
                    </v-col>

                    <v-col cols="12" >
                    <v-text-field v-model="userStore.formModel.password" label="Password"></v-text-field>
                    </v-col>

                    <v-col cols="12" >
                    <v-text-field v-model="userStore.formModel.password_confirmation" label="Confirm Password"></v-text-field>
                    </v-col>
                </v-row>
                </template>
        
                <v-divider></v-divider>
        
                <v-card-actions class="bg-surface-light">
                <v-btn text="Cancel" variant="plain" @click="userStore.dialog = false"></v-btn>
        
                <v-spacer></v-spacer>
        
                <v-btn text="Save" @click="userStore.save"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script setup>
  import { useUserStore } from '@/stores/user'
  import { onMounted, ref } from 'vue'
  import { useRoleStore } from '@/stores/role'

  const userStore = useUserStore()
  const roleStore = useRoleStore()
  
    onMounted(() => {
      userStore.getUsers();
      roleStore.getRoles()
    })
      
    const headers = [
        { title: 'ID', key: 'id', align: 'start' },
        { title: 'Name', key: 'name' },
        { title: 'Email', key: 'email' },
        { title: 'Role', key: 'role_name'},
        { title: 'Actions', key: 'actions', align: 'end', sortable: false },
      ]
    
</script>