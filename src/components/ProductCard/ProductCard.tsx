import React, { useEffect } from 'react'
import { ProductCardProps } from './ProductCard.types'
import {
  calculateDiscountedPrice,
  conditionToStatus,
  formatPrice,
  preloadImage,
} from '@/utils'
import { Link } from 'react-router-dom'
import { Button } from '@/components'

export const ProductCardComponent: React.FC<ProductCardProps> = ({
  product,
}) => {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discountRate
  )
  const condition = conditionToStatus(product.quality)
  useEffect(() => {
    preloadImage(product.image)
  }, [product.image])

  return (
    <Link
      to={`/satin-al/${product.id}`}
      className="relative h-fit flex w-full flex-col rounded-xl border border-gray-100 bg-white shadow-md"
    >
      <span
        className={`absolute -top-3 right-5 z-10 rounded-md text-nowrap ml-2 w-fit px-3 py-1 text-center text-sm font-medium text-white ${condition.color}`}
        aria-label={`Ürün durumu: ${condition.status}`}
      >
        {condition.status}
      </span>
      <div className="relative mx-3 mt-3 flex rounded-xl">
        <img
          className="w-full aspect-square bg-gray-100"
          width={640}
          height={640}
          src={product.image}
          alt={`${product.name} görseli`}
          loading="lazy"
        />
      </div>

      <div className="mt-4 px-5 pb-5 flex flex-col justify-between">
        <h3 className="text-xl max-w-[200px] tracking-tight text-slate-900">
          {product.name}
        </h3>

        <div className="mt-2 mb-5 space-x-2 flex items-center justify-between">
          <p>
            <span className="text-lg text-slate-900 line-through">
              {formatPrice(product.price)}
            </span>
            <span className="text-2xl block font-bold text-slate-900">
              {formatPrice(discountedPrice)}
            </span>
          </p>
        </div>

        <Button>Ürüne Git</Button>
      </div>
    </Link>
  )
}

export const ProductCard = React.memo(
  ProductCardComponent,
  (prevProps, nextProps) => {
    return prevProps.product.id === nextProps.product.id
  }
)
