import { TProduct } from '@/types'

export type TCartState = {
  $cart: TProduct[]
}

export type TCartActions = {
  addToCart: (item: TProduct) => boolean
  clearCart: () => void
}

export type TCartStore = TCartState & TCartActions
