import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import CV from '../views/CV.vue'
import Opitee from '../views/Opitee.vue'
import Projektid from '../views/Projektid.vue'
import Mindmap from '../views/Mindmap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/CV',
      name: 'CV',
      component: CV
    },
    {
      path: '/Opitee',
      name: 'Opitee',
      component: Opitee
    },
    {
      path: '/Projektid',
      name: 'Projektid',
      component: Projektid
    },
    {
      path: '/Mindmap',
      name: 'Mindmap',
      component: Mindmap
    },
  ]
})

export default router
