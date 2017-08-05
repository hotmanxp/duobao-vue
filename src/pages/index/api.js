import {make} from '@/lib/mock'
const productTemp = {
  prodSrc: idx => `../../static/img/p${idx + 1}.png`,
  price: idx => idx + 50
}
let products = make(productTemp, 6)
let recordTemp = {
  num: idx => idx,
  recordContent: '100元联通充值卡',
  userInfo: {
    nickName: '老亚平',
    from: '山东青岛'
  },
  date: '2017/06/30',
  time: '11:49:59',
  src: idx => `../../static/img/p${idx % 6 + 1}.png`
}
let records = make(recordTemp, 10)

export default {
  getProduct: () => {
    return products
  },
  getRecord: () => {
    return records
  }
}
