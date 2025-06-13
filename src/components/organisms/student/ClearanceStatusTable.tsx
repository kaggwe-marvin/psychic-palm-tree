import { FC } from 'hono/jsx'
import Badge from '../../ui/atoms/Badge'
import { Button } from '../../ui/atoms/Button'

type ClearanceItem = {
  id: string
  department: string
  status: 'pending' | 'approved' | 'rejected'
  submittedAt: string
  updatedAt: string
  feedback?: string
  documents: Array<{id: string, name: string, path: string}>
}

type ClearanceStatusTableProps = {
  items: ClearanceItem[]
  onViewDocuments: (documents: ClearanceItem['documents']) => void
  onReuploads: (departmentId: string) => void
}

export const ClearanceStatusTable: FC<ClearanceStatusTableProps> = ({ 
  items,
  onViewDocuments,
  onReuploads
}) => {
  const statusBadgeVariant = (status: string) => {
    switch(status) {
      case 'approved': return 'success'
      case 'rejected': return 'danger'
      case 'pending': return 'warning'
      default: return 'neutral'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.department}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge variant={statusBadgeVariant(item.status)}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </Badge>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(item.submittedAt)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(item.updatedAt)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onViewDocuments(item.documents)}
                  >
                    View Documents
                  </Button>
                  
                  {item.status === 'rejected' && (
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => onReuploads(item.id)}
                    >
                      Re-upload
                    </Button>
                  )}
                </div>
                
                {item.status === 'rejected' && item.feedback && (
                  <div className="mt-2 p-2 border border-danger/30 rounded-md bg-danger/5 text-danger text-xs">
                    {item.feedback}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}