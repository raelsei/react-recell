import { Layout, Loader, Button, Error } from '@/components'
import { fetchProductById } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {
  calculateDiscountedPrice,
  capitalizeFirstLetter,
  conditionToStatus,
  formatPrice,
} from '@/utils'
import { useCartStore } from '@/stores'
import { TProduct } from '@/types'
import { MouseEvent as ReactMouseEvent } from 'react'

export const ProductDetailPage: React.FC = () => {
  let { id } = useParams()

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProductById(id as string),
  })

  const { addToCart } = useCartStore()
  if (isLoading || !product || !product.id) {
    return <Loader />
  }

  if (isError) {
    return <Error title="404" description="Aradığınız ürün bulunamadı" />
  }

  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discountRate
  )

  const condition = conditionToStatus(product.quality)

  const handleAddToCart = (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const isAddedToCart = addToCart(product as TProduct)

    if (isAddedToCart) {
      return alert('Ürün sepete eklendi.')
    }

    alert('Ürün zaten sepetinizde.')
  }

  return (
    <Layout
      titleAs="h1"
      title={`Cep Telefonu / ${capitalizeFirstLetter(product.brand)}`}
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 bg-gray-50 rounded-3xl">
          <img
            src={`/${product.image}`}
            alt={`${product.name} görseli`}
            width={640}
            height={640}
            className="w-full h-auto aspect-square"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 px-8">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">ID: {product.id}</p>
          <div className="mb-4">
            <span className="text-2xl font-bold mr-2">
              {formatPrice(discountedPrice)}
            </span>
            <span className="text-gray-500 line-through">
              {formatPrice(product.price)}
            </span>
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6 flex gap-2">
            <h3 className="text-lg font-semibold mb-2">Renk:</h3>
            <div className="flex space-x-2">
              <span
                style={{
                  backgroundColor: product.color,
                }}
                className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label={`Renk: ${product.color}`}
                role="img"
              ></span>
            </div>
          </div>

          <div className="mb-6 flex gap-2">
            <h3 className="text-lg font-semibold mb-2">Ürün Kondisyonu:</h3>
            <div
              className={`flex text-white font-semibold px-4 rounded-xl items-center justify-center ${condition.color}`}
            >
              <span className="">{condition.status}</span>
            </div>
          </div>

          <div className="flex space-x-4 mb-6">
            <Button onClick={(e) => handleAddToCart?.(e)}>Sepete Ekle</Button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Özellikler:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {product.features.map((feature) => (
                <li key={feature.id}>
                  {feature.name} : <strong>{feature.description}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 py-8">
        <h2 className="text-2xl font-bold mb-4">Müşteri Yorumları</h2>

        <div className="space-y-4">
          {product?.comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <div>
                  <h3 className="font-semibold">{comment.name}</h3>
                  <p className="text-sm text-gray-500">
                    Yayınlanma tarihi: {comment.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{comment.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
