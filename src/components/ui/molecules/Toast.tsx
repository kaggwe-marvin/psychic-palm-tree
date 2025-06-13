import { FC } from 'hono/jsx'

type ToastProps = {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
}

export const Toast: FC<ToastProps> = ({ 
  message,
  type = 'info',
  duration = 3000
}) => {
  const getBgColor = () => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };
  
  const getIcon = () => {
    switch (type) {
      case 'success': 
        return (
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      default:
        return (
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div 
      className={`fixed bottom-4 right-4 flex items-center p-4 mb-4 rounded-lg shadow ${getBgColor()} text-white`}
      hx-swap-oob="true"
      _="on load wait ${duration}ms then remove me"
    >
      <div className="mr-2">{getIcon()}</div>
      <div>{message}</div>
    </div>
  );
};
