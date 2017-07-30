import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Details from '@/pages/details-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
