import { FC, useState } from 'hono/jsx'
import { Button } from '../atoms/Button'
import { Text } from '../atoms/Text'
import { FileList } from '../../../types/file'

interface DocumentUploaderProps {
  onUpload: (files: FileList) => void
  acceptedFileTypes?: string
  multiple?: boolean
  helperText?: string
  maxSize?: number // in MB
}

export const DocumentUploader: FC<DocumentUploaderProps> = ({
  onUpload,
  acceptedFileTypes = '.pdf,.doc,.docx',
  multiple = false,
  helperText,
  maxSize = 5 // Default 5MB
}) => {
  const [dragActive, setDragActive] = useState(false)
  const [fileError, setFileError] = useState<string | null>(null)
  
  const handleDrag = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }
  
  const validateFiles = (files: FileList): boolean => {
    // Check if any files were selected
    if (files.length === 0) return false
    
    // Check file types
    const acceptedTypesArray = acceptedFileTypes.split(',')
    const hasInvalidType = Array.from(files).some(file => {
      const fileExtension = '.' + file.name.split('.').pop()
      return !acceptedTypesArray.some(type => 
        type.endsWith(fileExtension) || type === '.*' || type === '*'
      )
    })
    
    if (hasInvalidType) {
      setFileError(`Only ${acceptedFileTypes} files are accepted`)
      return false
    }
    
    // Check file sizes
    const maxSizeBytes = maxSize * 1024 * 1024 // Convert MB to bytes
    const hasInvalidSize = Array.from(files).some(file => file.size > maxSizeBytes)
    
    if (hasInvalidSize) {
      setFileError(`Files must be smaller than ${maxSize}MB`)
      return false
    }
    
    setFileError(null)
    return true
  }
  
  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (validateFiles(e.dataTransfer.files)) {
        onUpload(e.dataTransfer.files)
        e.dataTransfer.clearData()
      }
    }
  }
  
  const handleChange = (e: any) => {
    e.preventDefault()
    if (e.target.files && e.target.files.length > 0) {
      if (validateFiles(e.target.files)) {
        onUpload(e.target.files)
        // Reset the file input
        e.target.value = ""
      }
    }
  }
  
  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        } ${fileError ? 'border-red-500' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <svg
            className={`h-12 w-12 ${dragActive ? 'text-blue-500' : 'text-gray-400'}`}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-center">
            <Text size="sm" className="font-medium mb-1">
              {dragActive ? 'Drop files here' : 'Drag and drop files here or click to upload'}
            </Text>
            <Text size="xs" className="text-gray-500">
              {acceptedFileTypes} files up to {maxSize}MB
            </Text>
          </div>
          <div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <Button type="button" variant="primary" size="sm">
                Browse Files
              </Button>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                multiple={multiple}
                accept={acceptedFileTypes}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </div>
      
      {fileError && (
        <Text size="xs" className="text-red-500 mt-2">
          {fileError}
        </Text>
      )}
      
      {helperText && !fileError && (
        <Text size="xs" className="text-gray-500 mt-2">
          {helperText}
        </Text>
      )}
    </div>
  )
}