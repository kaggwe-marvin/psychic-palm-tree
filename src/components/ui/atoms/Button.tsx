import { FC } from 'hono/jsx'
import { PropsWithChildren } from 'hono/jsx'

type ButtonProps = PropsWithChildren<{
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  className?: string
}>

export const Button: FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  className = ''
}) => {
  const baseClasses = "font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50",
    success: "bg-success text-white hover:bg-success/90 focus:ring-success/50",
    danger: "bg-danger text-white hover:bg-danger/90 focus:ring-danger/50",
    warning: "bg-warning text-white hover:bg-warning/90 focus:ring-warning/50",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-200"
  }

  const sizeClasses = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  }

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}