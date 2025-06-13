import { FC } from 'hono/jsx';
import { Text } from '../atoms/Text';
import { HtmxForm } from './HtmxForm';

type Document = {
  id: string
  fileName: string
  fileSize: number
  mimeType: string
  createdAt: string
}

type DocumentUploaderProps = {
  clearanceItemId: string
  existingDocuments?: Document[]
  disabled?: boolean
  acceptedFileTypes?: string
  maxFileSize?: number
}

export const DocumentUploader: FC<DocumentUploaderProps> = ({
  clearanceItemId,
  existingDocuments = [],
  disabled = false,
  acceptedFileTypes = '.pdf,.jpg,.jpeg,.png,.doc,.docx',
  maxFileSize = 5 * 1024 * 1024 // 5MB default
}) => {
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };
  
  return (
    <div id={`doc-uploader-${clearanceItemId}`} className="space-y-4">
      {/* Existing Documents */}
      {existingDocuments && existingDocuments.length > 0 && (
        <div className="mt-2">
          <Text size="sm" className="font-medium mb-2">Uploaded Documents:</Text>
          <ul id={`documents-list-${clearanceItemId}`} className="divide-y divide-gray-200 bg-gray-50 border border-gray-200 rounded-md">
            {existingDocuments.map(doc => (
              <li key={doc.id} id={`doc-item-${doc.id}`} className="flex items-center justify-between py-2 px-3">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <Text size="sm" className="font-medium">{doc.fileName}</Text>
                    <Text size="xs" className="text-gray-500">{formatFileSize(doc.fileSize)}</Text>
                  </div>
                </div>
                
                <div className="flex space-x-2">                  <a 
                    href={`/student/api/documents/file/${doc.id}`}
                    target="_blank" 
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View
                  </a>
                  {!disabled && (
                    <button 
                      hx-delete={`/student/api/documents/file/${doc.id}`}
                      hx-confirm="Are you sure you want to delete this document?"
                      hx-target={`#doc-uploader-${clearanceItemId}`}
                      hx-swap="outerHTML"
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Upload Control */}
      {!disabled && (
        <div className="mt-3">          <HtmxForm
            id={`upload-form-${clearanceItemId}`}
            action="/student/api/documents/file/upload"
            method="post"
            target={`#doc-uploader-${clearanceItemId}`}
            swap="outerHTML"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="clearanceItemId" value={clearanceItemId} />
            
            <div className="flex items-center space-x-2">
              <input
                type="file"
                id={`file-${clearanceItemId}`}
                name="file"
                className="hidden"
                accept={acceptedFileTypes}
                disabled={disabled}
                onchange={`if(this.files.length>0) document.getElementById('upload-btn-${clearanceItemId}').click()`}
              />
              <label
                htmlFor={`file-${clearanceItemId}`}
                className={`cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700`}
              >
                Select Document
              </label>
              
              <button 
                id={`upload-btn-${clearanceItemId}`} 
                type="submit"
                className="hidden"
              >
                Upload
              </button>
              
              <div id={`upload-indicator-${clearanceItemId}`} className="htmx-indicator flex items-center">
                <div className="animate-spin h-4 w-4 mr-2 border-b-2 border-blue-600 rounded-full"></div>
                <span>Uploading...</span>
              </div>
              
              <Text size="xs" className="text-gray-500">
                {acceptedFileTypes.replace(/\./g, '').toUpperCase()} files up to {maxFileSize / (1024 * 1024)}MB
              </Text>
            </div>
            
            <div id={`upload-error-${clearanceItemId}`}></div>
          </HtmxForm>
        </div>
      )}
    </div>
  )
}