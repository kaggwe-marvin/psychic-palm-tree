import { FC } from 'hono/jsx'

type Step = {
  id: string
  label: string
  status: 'completed' | 'current' | 'upcoming' | 'rejected'
  departmentName: string
}

type StepIndicatorProps = {
  steps: Step[]
}

export const StepIndicator: FC<StepIndicatorProps> = ({ steps }) => {
  return (
    <div className="w-full">
      <ol className="flex items-center w-full">
        {steps.map((step, index) => {
          const statusClasses = {
            completed: "bg-success text-white border-success",
            current: "bg-warning text-white border-warning",
            upcoming: "bg-white text-gray-500 border-gray-300",
            rejected: "bg-danger text-white border-danger"
          }
          
          const lineClasses = {
            completed: "bg-success",
            current: "bg-gray-300",
            upcoming: "bg-gray-300",
            rejected: "bg-danger"
          }
          
          return (
            <li key={step.id} className={`flex items-center ${index < steps.length - 1 ? 'w-full' : ''}`}>
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${statusClasses[step.status]}`}>
                  {step.status === 'completed' && (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {step.status === 'rejected' && (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="mt-2">
                  <span className="text-sm font-medium">{step.departmentName}</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${lineClasses[step.status]}`}></div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}