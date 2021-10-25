import { ListParams, ListResponse } from '../models/common'
import { User } from '../models/users'

import axiosClient from './axiosClient'

const UserApi = {
  getAll(params: ListParams): Promise<ListResponse<User>> {
    const url = '/users'
    return axiosClient.get(url, {
      params: {},
    })
  },

  getById(id: string): Promise<ListResponse<User>> {
    const url = `/users/${id}`
    return axiosClient.get(url)
  },

  add(data: User): Promise<User> {
    const url = '/users'
    return axiosClient.post(url, data)
  },

  update(data: User): Promise<User> {
    const url = '/users'
    return axiosClient.patch(url, data)
  },

  remove(id: string): Promise<User> {
    const url = `/users/${id}`
    return axiosClient.delete(url)
  },
}

export default UserApi
