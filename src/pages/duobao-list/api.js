import {make} from '@/lib/mock'
let temp = {
  src: idx => `../../static/img/p${idx % 6 + 1}.png`,
  title: '50元加油卡',
  No: 'NKF95454545i',
  betType: '时时彩',
  result: [2, 4, 6, 8],
  range: {from: 12, to: 56},
  winNum: 44,
  winner: 'Tonomi',
  ip: {location: '北京市', ip: '10.192.168.1'},
  openTime: '2017-07-28 10:00:00'
}
export default {
  getList () {
    return make(temp, 20)
  }
}
