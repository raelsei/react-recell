import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { LayoutProps } from './Layout.types'
import { useCartStore } from '@/stores'

const brandRoutes = [
  { name: 'Apple', slug: 'apple' },
  { name: 'Samsung', slug: 'samsung' },
  { name: 'Xiaomi', slug: 'xiaomi' },
]

export const Layout = ({ children, title, titleAs }: LayoutProps) => {
  const TitleComponent = titleAs || 'h2'
  const params = useSearchParams()
  const { $cart } = useCartStore()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params])

  return (
    <div className="mx-auto max-w-7xl  min-h-screen">
      <header className="fixed container max-w-7xl mx-auto top-0 z-30 w-full border border-gray-100 bg-white/80 py-3 backdrop-blur-lg md:top-6 rounded-none sm:rounded-xl">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link to="/" className="flex items-center text-3xl" tabIndex={0}>
                📲
                <p className="hidden sm:block">RECELL</p>
              </Link>
            </div>
            <nav
              className="flex md:items-center md:justify-center md:gap-5"
              aria-label="Main Navigation"
            >
              {brandRoutes.map((route) => (
                <Link
                  key={route.slug}
                  className="inline-block rounded-lg px-4 py-2 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  to={`/?brand=${route.slug}`}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
            <Link
              to="/sepetim"
              className="bg-gray-50 space-x-2  p-3 rounded-lg"
            >
              <span className="hidden md:inline-block">
                Sepet ({$cart?.length})
              </span>
              <span>🧺</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="mt-40">
        {title && (
          <TitleComponent className="text-4xl font-bold text-gray-900 mt-5 mb-10">
            {title}
          </TitleComponent>
        )}
        <main className="min-h-screen">{children}</main>
        <footer className="max-w-7xl mt-40 mb-12 mx-auto w-full border border-gray-100 bg-white/80 py-3 backdrop-blur-lg md:top-6 rounded-xl">
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div className="flex shrink-0">
                All rights reserved. © 2024 Recell
              </div>
              <nav
                className="hidden md:flex md:items-center md:justify-center md:gap-5"
                aria-label="Footer Navigation"
              >
                {brandRoutes.map((route) => (
                  <Link
                    key={route.slug}
                    className="inline-block rounded-lg px-4 py-2 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    to={`/?brand=${route.slug}`}
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
