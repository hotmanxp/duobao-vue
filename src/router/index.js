import Vue from 'vue'
import Router from 'vue-router'
import Routes from '@/pages/routes'
import Index from '@/pages/index'
import Details from '@/pages/details-page'
import ChangeHistory from '@/pages/change-history'
import KanPan from '@/pages/kan-pan'
import Personal from '@/pages/personal-page'
import BuyList from '@/pages/buy-list'
import BetHistory from '@/pages/bet-history'
import DuoBaoHistory from '@/pages/duobao-list'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Routes',
    component: Routes
  },
  {
    path: '/index',
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
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/buy-list',
    name: 'BuyList',
    component: BuyList
  },
  {
    path: '/bet-history',
    name: 'BetHistory',
    component: BetHistory
  },
  {
    path: '/duobao-history',
    name: 'DuoBaoHistory',
    component: DuoBaoHistory
  }
]
export default new Router({
  routes
})
export { routes }
