import { create } from 'zustand'
import { TCartStore } from './cart-store.types'
import { createJSONStorage, persist } from 'zustand/middleware'
import { TProduct } from '@/types'

export const useCartStore = create<TCartStore>()(
  persist(
    (set, get) => ({
      $cart: [] as TProduct[],
      addToCart: (item: TProduct) => {
        const existingItem = get().$cart.find((cartItem: TProduct) => {
          if (cartItem.id === item.id) {
            return true
          }
        })

        if (existingItem || !item) {
          return false
        }

        set((state: TCartStore) => ({
          $cart: [{ ...item }, ...state.$cart],
        }))
        return true
      },
      clearCart: () =>
        set({
          $cart: [],
        }),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
