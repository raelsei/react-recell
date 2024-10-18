import { Layout } from '@/components'
import { useCartStore } from '@/stores'
import {
  calculateDiscountedPrice,
  conditionToStatus,
  formatPrice,
} from '@/utils'

export const CartPage: React.FC = () => {
  const { $cart, clearCart } = useCartStore()

  return (
    <Layout>
      <div className="flex justify-between items-center py-4 bg-white mb-8">
        <h2 className="text-2xl font-bold">Sepetiniz</h2>
        <button
          onClick={() => clearCart()}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Temizle
        </button>
      </div>

      {$cart?.length > 0 ? (
        <div className="w-full space-y-4">
          {$cart?.map((item) => (
            <div
              key={item.id}
              className="p-6 flex w-full bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover aspect-square rounded-md mb-4"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p>
                  {formatPrice(
                    calculateDiscountedPrice(item.price, item.discountRate)
                  )}
                </p>
                <p className="text-gray-600 mb-2">
                  Kondisyon: {conditionToStatus(item.quality).status}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-lg text-center bg-red-50 rounded-lg">
          Sepetiniz Boş
        </div>
      )}
    </Layout>
  )
}
