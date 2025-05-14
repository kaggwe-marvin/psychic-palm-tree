import { FC } from 'hono/jsx'
import { PropsWithChildren } from 'hono/jsx'

type CardProps = PropsWithChildren<{
  title?: string
  subtitle?: string
  footer?: JSX.Element
  noPadding?: boolean
  className?: string
}>

export const Card: FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  footer,
  noPadding = false,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow border border-gray-100 ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  )
}