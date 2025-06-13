import { FC, useState, useEffect } from 'hono/jsx'
import { Text } from '../atoms/Text'
import { Badge } from '../atoms/Badge'

type Notification = {
  id: string
  title: string
  message: string
  read: boolean
  createdAt: string
}

type NotificationsPanelProps = {
  limit?: number
}

export const NotificationsPanel: FC<NotificationsPanelProps> = ({
  limit = 5
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`/student/api/notifications?limit=${limit}`);
        const result = await response.json();
        
        if (!result.success) {
          setError(result.error || 'Failed to load notifications');
          return;
        }
        
        setNotifications(result.notifications);
        setError(null);
      } catch (e) {
        console.error('Error fetching notifications:', e);
        setError('Unable to load notifications');
      } finally {
        setLoading(false);
      }
    };
    
    fetchNotifications();
  }, []);
  
  const markAsRead = async (notificationId: string) => {
    try {
      await fetch(`/student/api/notifications/${notificationId}/read`, {
        method: 'POST'
      });
      
      // Update local state
      setNotifications(prev => 
        prev.map(n => n.id === notificationId ? {...n, read: true} : n)
      );
    } catch (e) {
      console.error('Error marking notification as read:', e);
    }
  };
  
  if (loading) {
    return <div className="p-4 text-center">Loading notifications...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }
  
  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        <Text>No new notifications</Text>
      </div>
    );
  }
  
  return (
    <div className="divide-y divide-gray-200">
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className={`p-4 cursor-pointer hover:bg-gray-50 ${notification.read ? '' : 'bg-blue-50'}`}
          onClick={() => !notification.read && markAsRead(notification.id)}
        >
          <div className="flex justify-between items-start">
            <div className="flex-grow">
              <Text className="font-medium">{notification.title}</Text>
              <Text size="sm" className={notification.read ? 'text-gray-500' : 'text-gray-800'}>
                {notification.message}
              </Text>
              <Text size="xs" className="text-gray-500 mt-1">
                {new Date(notification.createdAt).toLocaleDateString()}
              </Text>
            </div>
            {!notification.read && (
              <Badge variant="info" className="ml-2">New</Badge>
            )}
          </div>
        </div>
      ))}
      
      {notifications.length >= limit && (
        <div className="p-4 text-center">
          <a href="/student/notifications" className="text-blue-600 hover:text-blue-800 text-sm">
            View all notifications
          </a>
        </div>
      )}
    </div>
  );
}