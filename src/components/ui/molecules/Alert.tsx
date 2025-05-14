import { FC } from 'hono/jsx'
import { Text } from '../atoms/Text'

type AlertProps = {
  children: any
  type?: 'info' | 'success' | 'warning' | 'error'
  className?: string
}

export const Alert: FC<AlertProps> = ({ 
  children, 
  type = 'info', 
  className = '' 
}) => {
  const alertStyles = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200'
  }

  const iconMap = {
    info: '📌',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  }

  return (
    <div className={`border rounded-md p-4 ${alertStyles[type]} ${className}`}>
      <div className="flex items-start">
        <span className="mr-2">{iconMap[type]}</span>
        <Text>{children}</Text>
      </div>
    </div>
  )
}

export default Alert