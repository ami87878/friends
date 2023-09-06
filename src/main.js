import { createApp } from 'vue'

import App from './App.vue'
import NewFriend from './components/NewFriend.vue'
import ContactFriends from './components/ContactFriends.vue'
const app=createApp(App);



app.component('ContactFriends',ContactFriends);
app.component('NewFriend',NewFriend);
app.mount('#app')
