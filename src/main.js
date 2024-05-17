import './assets/main.css'
import io from 'vue-socket.io'
import router from './router/index'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { registerSockets , destroySockets } from './socket'
import store from "./vuex/store.js"
const socket= new io({
    debug:false,
    connection:"http://localhost:3000"
});

const app=createApp(App)
app.config.globalProperties.$socket = socket;
app.config.globalProperties.$addSockets = registerSockets;
app.config.globalProperties.$removeSockets = destroySockets;
app.use( createStore(store))
app.use(router)
app.use(ElementPlus)
app.mount('#app')
