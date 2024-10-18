import { TProduct } from '@/types'
import { env } from '@/config'

export const fetchProducts = async (
  brand: string | null
): Promise<TProduct[]> => {
  const searchParams = new URLSearchParams()
  if (brand) {
    searchParams.append('brand', brand)
  }
  const response = await fetch(`${env.API_URL}/products?${searchParams}`)

  return await response.json()
}

export const fetchProductById = async (id: string): Promise<TProduct> => {
  const response = await fetch(`${env.API_URL}/products/${id}`)
  return await response.json()
}
