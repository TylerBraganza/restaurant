import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



//Veutify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import * as labsComponents from 'vuetify/labs/components'


const veutify = createVuetify({
    components:{
        ...components,
         ...labsComponents,
    },
    directives,
    icons:{
        defaultSet:'mdi'},
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(veutify)

app.mount('#app')
