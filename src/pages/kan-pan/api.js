import {make} from '@/lib/mock'
const temp = {
  date: `2017/06/25`,
  time: '11:20:20',
  number: 51125,
  divide56: {
    num: 52,
    color: 'red'
  },
  divide110: {
    num: 12,
    color: 'yellow'
  }
}
export default {
  getList () {
    return make(temp, 25)
  }
}
