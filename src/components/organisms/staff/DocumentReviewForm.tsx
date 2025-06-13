import { FC, useState } from 'hono/jsx'
import Alert from '../../ui/molecules/Alert'
import { Button } from '../../ui/atoms/Button'
import Text from '../../ui/atoms/Text'

type DocumentReviewFormProps = {
  onApprove: (feedback: string) => void
  onReject: (feedback: string) => void
  onRequestMoreInfo: (feedback: string) => void
}

export const DocumentReviewForm: FC<DocumentReviewFormProps> = ({
  onApprove,
  onReject,
  onRequestMoreInfo
}) => {
  const [feedback, setFeedback] = useState('')
  const [action, setAction] = useState<'approve' | 'reject' | 'request_info' | null>(null)
  const [error, setError] = useState('')
  
  const handleFeedbackChange = (e: any) => {
    setFeedback(e.target.value)
    if (error) setError('')
  }
  
  const handleReview = (actionType: 'approve' | 'reject' | 'request_info') => {
    // Validation checks
    if ((actionType === 'reject' || actionType === 'request_info') && !feedback.trim()) {
      setError(`Please provide feedback when ${actionType === 'reject' ? 'rejecting' : 'requesting more information'}`)
      return
    }

    // Record the action being taken
    setAction(actionType)
    
    // Call appropriate handler
    switch (actionType) {
      case 'approve':
        onApprove(feedback)
        break
      case 'reject':
        onReject(feedback)
        break
      case 'request_info':
        onRequestMoreInfo(feedback)
        break
    }
    
    // Reset form after submission
    setFeedback('')
  }
  
  return (
    <div className="space-y-4">
      {error && (
        <Alert type="error">
          {error}
        </Alert>
      )}
      
      <div>
        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
          Feedback / Comments
        </label>
        <textarea
          id="feedback"
          rows={3}
          className={`block w-full rounded-md border ${error ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
          placeholder={`Enter any feedback or comments for the student...${
            action === 'reject' ? ' (Required)' :
            action === 'request_info' ? ' (Required)' : ''
          }`}
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>
        <Text size="xs" className="text-gray-500 mt-1">
          For approvals, feedback is optional. For rejections or requests for more information, feedback is required.
        </Text>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-end">
        <Button
          variant="success"
          onClick={() => handleReview('approve')}
        >
          Approve
        </Button>
        <Button
          variant="danger"
          onClick={() => handleReview('reject')}
        >
          Reject
        </Button>
        <Button
          variant="warning"
          onClick={() => handleReview('request_info')}
        >
          Request More Info
        </Button>
      </div>
    </div>
  )
}