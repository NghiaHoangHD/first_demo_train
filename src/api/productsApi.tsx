import { ListResponse } from '../models/common'
import { Product } from '../models/products'
import axiosClient from './axiosClient'

const productsApi = {
  getAll(): Promise<ListResponse<Product>> {
    const url = '/products'
    return axiosClient.get(url, {
      params: {
        _limit: 4,
        _page: 1,
      },
    })
  },

  remove(id: string): Promise<Product> {
    const url = `/products/${id}`
    return axiosClient.get(url)
  },

  getById(id: string): Promise<Product> {
    const url = `/products/${id}`
    return axiosClient.get(url)
  },

  add(data: Product): Promise<Product> {
    const url = '/products'
    return axiosClient.post(url, data)
  },

  update(data: Product): Promise<Product> {
    const url = '/products'
    return axiosClient.patch(url, data)
  },
}

export default productsApi
