export interface User {
  id: string | number
  username: string
  email: string
  password: string
  city?: string

  createdAt?: number
  updatedAt?: number
}
