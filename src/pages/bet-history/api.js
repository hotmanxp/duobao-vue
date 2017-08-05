import {make} from '@/lib/mock'
let betTemp = {
  winner: '溜溜梅',
  betType: '时时彩',
  avator: '../../static/img/p1.png',
  No: 'SZHK1254136941566',
  range: {from: 2, to: 68},
  numbers: [2, 15, 24, 21, 13],
  openTime: '2017-07-25 14:00:00'
}
export default {
  getList () {
    return make(betTemp, 20)
  }
}
