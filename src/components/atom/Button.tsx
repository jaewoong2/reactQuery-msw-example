import React from 'react'

type Props = {}

const Button: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
