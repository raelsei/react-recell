import { mockProduct, mockProducts } from '@/mocks'
import { fetchProducts, fetchProductById } from './product.service'
import { env } from '@/config'

describe('Product service tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch products by brand', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockProducts),
    })

    const brand = 'Apple'
    const result = await fetchProducts(brand)

    expect(global.fetch).toHaveBeenCalledWith(
      `${env.API_URL}/products?brand=Apple`
    )
    expect(result).toEqual(mockProducts)
  })

  it('should fetch all products when no brand is provided', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockProducts),
    })

    const result = await fetchProducts(null)

    expect(global.fetch).toHaveBeenCalledWith(`${env.API_URL}/products?`)
    expect(result).toEqual(mockProducts)
  })

  it('should fetch product by ID', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockProduct),
    })

    const id = '1'
    const result = await fetchProductById(id)

    expect(global.fetch).toHaveBeenCalledWith(`${env.API_URL}/products/1`)
    expect(result).toEqual(mockProduct)
  })

  it('should handle fetch errors gracefully', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API is down'))

    await expect(fetchProducts(null)).rejects.toThrow('API is down')
  })
})
