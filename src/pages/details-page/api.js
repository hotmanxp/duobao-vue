import {make} from '@/lib/mock'

let topTemp = {
  num: idx => idx,
  recordContent: idx => `刚刚获胜夺得商品${idx + 1}单`,
  userInfo: {
    nickName: '老亚平',
    from: '山东青岛'
  },
  date: '2017/06/30',
  time: '11:49:59',
  src: idx => `../../static/img/p${idx % 6 + 1}.png`
}

let latestTemp = {
  num: idx => idx,
  text: '刚刚参与了',
  userInfo: {
    nickName: '老亚平',
    from: '山东青岛'
  },
  date: '2017/06/30',
  time: '11:49:59',
  src: idx => `../../static/img/p${idx % 6 + 1}.png`
}

export default {
  getTops () {
    return make(topTemp, 20)
  },
  getLastes () {
    return make(latestTemp, 15)
  }
}
