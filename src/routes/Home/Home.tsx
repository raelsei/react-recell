import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/services'
import { Error, Layout, Loader, ProductCard } from '@/components'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { capitalizeFirstLetter } from '@/utils'

export const HomePage: React.FC = () => {
  let [searchParams] = useSearchParams()
  const brand = searchParams.get('brand')

  const {
    data: products,
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(brand),
  })

  useEffect(() => {
    refetch()
  }, [brand])

  if (isLoading || !products?.length) {
    return <Loader />
  }

  if (isError) {
    return (
      <Error title="500" description="Ürünler yüklenirken bir hata oluştu." />
    )
  }

  const title = brand
    ? `Ürünler / ${capitalizeFirstLetter(brand)}`
    : 'Popüler Ürünler'

  return (
    <Layout title={title}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full min-h-screen">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}
