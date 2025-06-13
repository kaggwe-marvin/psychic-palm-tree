import { FC } from 'hono/jsx'
import { Text } from '../atoms/Text'
import { Badge } from '../atoms/Badge'

const RecentNotifications: FC = () => {
  return (
    <div 
      id="recent-notifications"
      hx-get="/student/api/notifications/recent"
      hx-trigger="load, every 60s"
      hx-indicator="#recent-notifications-loading"
    >
      <div id="recent-notifications-loading" className="htmx-indicator p-4 text-center">
        <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        <Text className="mt-2">Loading notifications...</Text>
      </div>
    </div>
  )
}

export default RecentNotifications