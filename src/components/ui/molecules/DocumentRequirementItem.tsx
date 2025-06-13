import { FC } from 'hono/jsx'
import { Text } from '../atoms/Text'
import { DocumentUploader } from './DocumentUploader'
import { BulkDocumentUploader } from './BulkDocumentUploader'

type Document = {
  id: string
  fileName: string
  fileSize: number
  mimeType: string
  createdAt: string
}

type DocumentRequirementItemProps = {
  id: string
  name: string
  description?: string
  documentRequired: boolean
  status: 'pending' | 'approved' | 'rejected'
  documents?: Document[]
  disabled?: boolean
}

export const DocumentRequirementItem: FC<DocumentRequirementItemProps> = ({
  id,
  name,
  description,
  documentRequired,
  status,
  documents = [],
  disabled = false
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'approved':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Approved</span>
      case 'rejected':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Rejected</span>
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
    }
  }
  
  const showBulkUploader = !disabled && status === 'pending';
  
  return (
    <div id={`requirement-${id}`} className="bg-white shadow-sm rounded-md border border-gray-200">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <Text size="md" className="font-medium">{name}</Text>
            {description && (
              <Text size="sm" className="text-gray-600 mt-1">
                {description}
              </Text>
            )}
          </div>
          <div>{getStatusBadge()}</div>
        </div>
      </div>
      
      <div className="p-4">
        {documentRequired ? (
          <div className="space-y-6">
            <DocumentUploader 
              clearanceItemId={id} 
              existingDocuments={documents}
              disabled={disabled || status === 'approved'}
            />
            
            {showBulkUploader && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Text size="sm" className="font-medium mb-3">Bulk Upload</Text>
                <BulkDocumentUploader 
                  clearanceItemId={id}
                  disabled={disabled}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <Text size="sm" className="text-gray-600">No document required for this item</Text>
          </div>
        )}
      </div>
    </div>
  )
}
