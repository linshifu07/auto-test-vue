import { axios } from '@/utils/request'
import { jsonHeader } from './header'

const api = {
  list: '/api/project/list'
}

export default api

export function getProjectList (data) {
  return axios.post(api.list, data, { header: jsonHeader })
  // return axios({
  //   url: api.list,
  //   method: 'post',
  //   data,
  //   header: jsonHeader
  // })
}
