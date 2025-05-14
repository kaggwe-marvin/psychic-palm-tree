import { FC } from 'hono/jsx'

type TextProps = {
  children: any
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

export const Text: FC<TextProps> = ({ 
  children, 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl'
  }

  return (
    <p className={`${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  )
}

export default Text