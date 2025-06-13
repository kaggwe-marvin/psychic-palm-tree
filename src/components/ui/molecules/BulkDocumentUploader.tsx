import { FC } from 'hono/jsx'
import { Text } from '../atoms/Text'

type BulkDocumentUploaderProps = {
  clearanceItemId: string
  acceptedFileTypes?: string
  maxFileSize?: number
  disabled?: boolean
}

export const BulkDocumentUploader: FC<BulkDocumentUploaderProps> = ({
  clearanceItemId,
  acceptedFileTypes = '.pdf,.jpg,.jpeg,.png,.doc,.docx',
  maxFileSize = 10 * 1024 * 1024, // 10MB default
  disabled = false
}) => {
  return (
    <div id={`bulk-uploader-${clearanceItemId}`} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">      <form
        id={`bulk-upload-form-${clearanceItemId}`}
        hx-encoding="multipart/form-data"
        hx-post="/student/api/documents/file/upload-bulk"
        hx-target={`#requirement-${clearanceItemId}`}
        hx-swap="outerHTML"
        hx-indicator={`#bulk-upload-indicator-${clearanceItemId}`}
      >
        <input type="hidden" name="clearanceItemId" value={clearanceItemId} />
        
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        
        <Text size="md" className="mt-2">
          Drag and drop documents here
        </Text>
        <Text size="sm" className="mt-1 text-gray-500">
          or 
        </Text>
        
        <div className="mt-2">
          <input
            type="file"
            id={`bulk-files-${clearanceItemId}`}
            name="files"
            className="hidden"
            multiple
            accept={acceptedFileTypes}
            disabled={disabled}
          />
          <label
            htmlFor={`bulk-files-${clearanceItemId}`}
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Select Files
          </label>
        </div>
        
        <Text size="xs" className="mt-2 text-gray-500">
          {acceptedFileTypes.replace(/\./g, '').toUpperCase()} files up to {maxFileSize / (1024 * 1024)}MB
        </Text>
        
        <div id={`bulk-upload-indicator-${clearanceItemId}`} className="htmx-indicator flex justify-center items-center mt-4">
          <div className="animate-spin h-5 w-5 mr-2 border-b-2 border-blue-600 rounded-full"></div>
          <span>Uploading files...</span>
        </div>
        
        <div id={`bulk-upload-error-${clearanceItemId}`}></div>
        
        {/* This script will auto-submit the form when files are selected */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('bulk-files-${clearanceItemId}').addEventListener('change', function() {
                if (this.files.length > 0) {
                  document.getElementById('bulk-upload-form-${clearanceItemId}').dispatchEvent(new Event('submit'));
                }
              });

              document.getElementById('bulk-uploader-${clearanceItemId}').addEventListener('dragover', function(e) {
                e.preventDefault();
                this.classList.add('bg-gray-50');
              });
              
              document.getElementById('bulk-uploader-${clearanceItemId}').addEventListener('dragleave', function() {
                this.classList.remove('bg-gray-50');
              });
              
              document.getElementById('bulk-uploader-${clearanceItemId}').addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('bg-gray-50');
                let input = document.getElementById('bulk-files-${clearanceItemId}');
                input.files = e.dataTransfer.files;
                input.dispatchEvent(new Event('change'));
              });
            `
          }}
        />
      </form>
    </div>
  )
}
