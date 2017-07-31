import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Details from '@/pages/details-page'
import ChangeHistory from '@/pages/change-history'
import KanPan from '@/pages/kan-pan'

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
    },
    {
      path: '/change-history',
      name: 'ChangeHistory',
      component: ChangeHistory
    },
    {
      path: '/kan-pan',
      name: 'KanPan',
      component: KanPan
    }
  ]
})
