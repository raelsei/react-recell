export * from './test-utils'

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  }).format(price)

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const conditionToStatus = (
  condition: number
): { status: string; color: string } => {
  const statuses = [
    { threshold: 0.9, status: 'Mükemmel', color: 'bg-green-700' },
    { threshold: 0.8, status: 'Çok İyi', color: 'bg-blue-700' },
    { threshold: 0.7, status: 'İyi', color: 'bg-yellow-700' },
    { threshold: 0.6, status: 'Orta', color: 'bg-orange-700' },
  ]

  const foundStatus = statuses.find(({ threshold }) => condition >= threshold)

  return foundStatus ? foundStatus : { status: 'Kötü', color: 'bg-red-500' }
}

export const preloadImage = (url: string) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = url
  document.head.appendChild(link)
}

export const calculateDiscountedPrice = (price: number, discount: number) =>
  price * (1 - discount)
