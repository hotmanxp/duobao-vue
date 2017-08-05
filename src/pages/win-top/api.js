import {make} from '@/lib/mock'

let tmp = {
  rand: (idx) => idx + 1,
  name: '王银辉',
  src: idx => `../../static/img/p${idx % 6 + 1}.png`,
  num: (idx) => idx + 5
}
export default {
  getTops () {
    return make(tmp, 25)
  }
}

