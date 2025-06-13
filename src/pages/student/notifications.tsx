import { FC } from 'hono/jsx'
import Text from '../../components/ui/atoms/Text'
import Badge from '../../components/ui/atoms/Badge'
import StudentTemplate from '../../components/ui/templates/StudentTemplate'
import Alert from '../../components/ui/molecules/Alert'
import { Card } from '../../components/ui/molecules/Card'

type Notification = {
  id: string
  title: string
  message: string
  relatedToId?: string
  read: boolean
  createdAt: string
}

const NotificationItem: FC<{ notification: Notification }> = ({ notification }) => {
  return (
    <div 
      id={`notification-${notification.id}`}
      className={`p-4 ${notification.read ? '' : 'bg-blue-50'}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <Text className="font-medium">{notification.title}</Text>
            {!notification.read && (
              <Badge variant="info" className="ml-2">New</Badge>
            )}
          </div>
          <Text size="sm" className="mt-1">{notification.message}</Text>
          <Text size="xs" className="text-gray-500 mt-1">
            {new Date(notification.createdAt).toLocaleString()}
          </Text>
        </div>
        {!notification.read && (
          <button 
            hx-post={`/student/api/notifications/${notification.id}/read`}
            hx-target={`#notification-${notification.id}`}
            hx-swap="outerHTML"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Mark as read
          </button>
        )}
      </div>
      
      {notification.relatedToId && (
        <div className="mt-2">
          <a 
            href={`/student/clearance_status?item=${notification.relatedToId}`}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            View related item
          </a>
        </div>
      )}
    </div>
  );
};

const Notifications: FC<{ initialError?: string }> = ({ initialError }) => {
  return (
    <StudentTemplate
      title="Notifications"
      activeSection="notifications">
      <div className="space-y-6">
        {initialError && (
          <Alert type="error">
            {initialError}
          </Alert>
        )}
        
        <Card title="All Notifications">
          <div 
            id="notifications-container"
            hx-get="/student/api/notifications/list"
            hx-trigger="load"
            hx-indicator="#loading-indicator"
          >
            <div id="loading-indicator" className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <Text className="mt-2">Loading notifications...</Text>
            </div>
          </div>
        </Card>
      </div>
    </StudentTemplate>
  )
}

export default Notifications