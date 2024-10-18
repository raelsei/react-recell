export type TProduct = {
  id: number
  name: string
  image: string
  quality: number
  price: number
  discountRate: number
  stock: number
  brand: string
  description: string
  color: string
  features: {
    id: number
    name: string
    description: string
  }[]
  comments: {
    id: number
    name: string
    comment: string
    date: string
  }[]
}
