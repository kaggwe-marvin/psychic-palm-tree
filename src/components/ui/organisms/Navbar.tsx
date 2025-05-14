import { FC } from 'hono/jsx'
import { Button } from '../atoms/Button'

type NavbarProps = {
  title: string
  userName: string
  notifications?: number
  onLogout?: () => void
}

export const Navbar: FC<NavbarProps> = ({ 
  title, 
  userName,
  notifications = 0,
  onLogout 
}) => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center">
        <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
          <span className="text-white font-bold">CS</span>
        </div>
        <h1 className="ml-3 text-xl font-semibold text-gray-900">{title}</h1>
      </div>
      
      {/* Right Side - User Info and Actions */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <div className="relative">
          <button className="text-gray-600 hover:text-gray-900">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
              />
            </svg>
            
            {notifications > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-danger text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {notifications > 9 ? '9+' : notifications}
              </span>
            )}
          </button>
        </div>
        
        {/* User Menu */}
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-700">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">{userName}</p>
          </div>
          <div className="ml-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}