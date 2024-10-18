import React from 'react'

export const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen z-20">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
    </div>
  )
}
