import { createRouter, createWebHistory } from 'vue-router'
import register from '../view/register/index.vue'
import index from "../layout/index.vue"
const routes = [
    { path: '/register', component: register },
    { 
      path: '/',
      component: index,
      children:[
        {
          path:"chatRoom",
          component:() => import("../view/chatRoom/index.vue")
        },
        {
          path:"privateChat",
          component:() => import("../view/privateChat/index.vue")
        }
      ]
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes, 
  })
  
  export default router