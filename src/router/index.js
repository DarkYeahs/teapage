import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'
import EditTea from '../views/editTea.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/edit',
    component: EditTea
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: () => ({ y: 0 })
})
