import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ children, className, size = 'md', ...props }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      className={`bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}