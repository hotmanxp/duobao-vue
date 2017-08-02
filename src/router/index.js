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
    cn: '导航页',
    name: 'Routes',
    component: Routes
  },
  {
    path: '/index',
    cn: '首页',
    name: 'Index',
    component: Index
  },
  {
    path: '/details',
    cn: '详情页',
    name: 'Details',
    component: Details
  },
  {
    path: '/change-history',
    cn: '兑换记录',
    name: 'ChangeHistory',
    component: ChangeHistory
  },
  {
    path: '/kan-pan',
    cn: '夺宝看盘',
    name: 'KanPan',
    component: KanPan
  },
  {
    path: '/personal',
    cn: '个人中心',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/buy-list',
    cn: '购买清单',
    name: 'BuyList',
    component: BuyList
  },
  {
    path: '/bet-history',
    cn: '历史交战记录',
    name: 'BetHistory',
    component: BetHistory
  },
  {
    path: '/duobao-history',
    cn: '清单明细',
    name: 'DuoBaoHistory',
    component: DuoBaoHistory
  }
]
export default new Router({
  routes
})
export { routes }
