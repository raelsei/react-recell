import { Link } from 'react-router-dom'
import { ErrorProps } from './Error.types'

export const Error = ({
  title = '404',
  description = 'Aradığınız sayfa bulunamadı',
}: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-4 bg-red-50 p-10 rounded-xl items-center justify-center flex-col max-w-xs text-center">
        <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
        <p className="text-2xl font-bold text-gray-800">{description}</p>
      </div>
      <Link to="/" className="mt-4 hover:underline">
        Anasayfaya dön
      </Link>
    </div>
  )
}
