import { FC } from 'hono/jsx'

type ProgressIndicatorProps = {
  progress: number
  message?: string
}

export const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  progress,
  message = 'Uploading...'
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-medium text-blue-700">{message}</span>
        <span className="text-xs font-medium text-blue-700">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
