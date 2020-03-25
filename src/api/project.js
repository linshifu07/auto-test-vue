import { axios } from '@/utils/request'
import { jsonHeader } from './header'

const api = {
  list: '/api/project/list',
  add: '/api/project/add'
}

export default api

export function getProjectList (data) {
  return axios.post(api.list, data, { header: jsonHeader })
}

export function createProject (data) {
  return axios.post(api.add, data, { header: jsonHeader })
}
