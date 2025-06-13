import { FC } from 'hono/jsx'
import StudentTemplate from '../../components/ui/templates/StudentTemplate'
import { Card } from '../../components/ui/molecules/Card'
import Text from '../../components/ui/atoms/Text'
const Documents: FC = () => {
  return (
    <StudentTemplate
      title="My Documents"
      activeSection="documents">
      <div className="space-y-6">
        <div id="alerts-container"></div>
        
        <Card title="Required Documents">
          <div className="p-4">
            <Text className="mb-4">
              Upload all required documents below to complete your clearance process.
            </Text>
            
            <div 
              id="documents-container"
              className="space-y-6"
              hx-get="/student/api/documents/requirements"
              hx-trigger="load"
              hx-indicator="#documents-loading"
            >
              <div id="documents-loading" className="p-6 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <Text className="mt-2">Loading document requirements...</Text>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Document History">
          <div className="p-4">
            <Text className="mb-4">
              View and manage all your uploaded documents across all requirements.
            </Text>
            
            <div
              id="documents-history-container"
              className="mt-4"
              hx-get="/student/api/documents/all"
              hx-trigger="load"
              hx-indicator="#history-loading"
            >
              <div id="history-loading" className="p-6 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <Text className="mt-2">Loading document history...</Text>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </StudentTemplate>
  )
}

export default Documents