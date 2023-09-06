import { createApp } from 'vue'

import App from './App.vue'
import ContactFriends from './components/ContactFriends.vue'
const app=createApp(App);



app.component('ContactFriends',ContactFriends);
app.mount('#app')
