export interface Product {
  id: number
  name: string
  image: string
  amount: number
  description: string
  salePrice: number | string
  active: boolean
  stock: number

  createdAt?: Date
  createdUpdate?: Date
}
