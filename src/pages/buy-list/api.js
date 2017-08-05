import {make} from '@/lib/mock'
const template = {
  type: ['win', 'unwin', 'waiting', true],
  picSrc: '../../static/img/p1.png',
  title: '联通100元充值卡',
  canyu: 'tyy',
  takePartDate: '2017-06-30',
  takePartTime: '15:00:06',
  duanHao: {
    start: 22,
    end: 55
  },
  num: 34,
  openTime: '14:10:01',
  openDate: '2017-07-26',
  winNumber: 105
}

const details = {
  title: {
    price: 100,
    content: '联通卡'
  },
  rulseText: '除以52的余数',
  result: '12551',
  dateTime: '2017-04-30 14:00:52',
  winNum: '101',
  randge: {
    start: 20,
    end: 52
  },
  winnerName: '王二',
  winnerSrc: '../../static/img/p1.png',
  home: {
    randge: {
      start: 10,
      end: 20
    },
    date: '2017-06-22',
    time: '10:21:11',
    picSrc: '../../static/img/p1.png',
    nickName: 'tyy',
    from: '山东青岛',
    ip: '192.168.0.1'
  },
  away: {
    randge: {
      start: 20,
      end: 40
    },
    date: '2017-06-02',
    time: '10:21:33',
    picSrc: '../../static/img/p2.png',
    nickName: 'Hero',
    from: '山东青岛',
    ip: '192.168.0.1'
  }
}

export default {
  getList () {
    return make(template, 10)
  },
  getDetails (id) {
    return details
  }
}
