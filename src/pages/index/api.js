import apiTools from '@/lib/api'
import Urls from '@/lib/urls'
const route = Urls.HOME

export default {
  getProduct: () => {
    return apiTools.apiFetch(route.GET_PRODUCTS, {})
  },
  getRecord: () => {
    return apiTools.apiFetch(route.GET_RECORDS, {})
  }
}
