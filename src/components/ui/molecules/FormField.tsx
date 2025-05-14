import { FC } from 'hono/jsx'

type FormFieldProps = {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  value?: string
  onChange?: (e: any) => void
}

export const FormField: FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  error,
  value,
  onChange
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
          error ? 'border-danger' : 'border-gray-300'
        }`}
      />
      {error && <p className="mt-1 text-sm text-danger">{error}</p>}
    </div>
  )
}