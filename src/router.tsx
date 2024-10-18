import { createBrowserRouter } from 'react-router-dom'
import { ProductDetailPage, HomePage, CartPage } from '@/routes'
import { Error } from '@/components'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/satin-al/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/sepetim',
    element: <CartPage />,
  },
  {
    path: '*',
    element: <Error />,
  },
])
