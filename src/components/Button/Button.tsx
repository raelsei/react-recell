import React from 'react'
import { ButtonProps } from './Button.types'

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 ${className}`}
      role="button"
    >
      {children}
    </button>
  )
}
