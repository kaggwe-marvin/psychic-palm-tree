import { FC } from "hono/jsx";
import { useState } from "hono/jsx";

type ValidationState = "none" | "valid" | "invalid";

type TextInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  pattern?: string;
  className?: string;
  validateFn?: (value: string) => boolean;
  validationMessage?: string;
};

export const TextInput: FC<TextInputProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  value = "",
  error,
  onChange,
  pattern,
  className = "",
  validateFn,
  validationMessage,
}) => {
  const [validationState, setValidationState] = useState<ValidationState>("none");
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    
    if (onChange) {
      onChange(newValue);
    }
    
    // Validate if function provided and field was touched
    if (validateFn && isTouched) {
      setValidationState(validateFn(newValue) ? "valid" : "invalid");
    }
  };
  
  const handleBlur = () => {
    setIsTouched(true);
    
    if (validateFn && value) {
      setValidationState(validateFn(value) ? "valid" : "invalid");
    }
  };
  // Generate input class based on validation state
  const getInputClass = () => {
    let baseClass = "bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 transition-colors duration-200 ";
    
    if (error) {
      return baseClass + "border-red-500 pr-10";
    }
    
    if (isTouched && value) {
      if (validationState === "valid") {
        return baseClass + "border-green-500 pr-10";
      } else if (validationState === "invalid" && validateFn) {
        return baseClass + "border-red-500 pr-10";
      }
    }
    
    return baseClass + "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white";
  };

  return (
    <div class={className}>
      <label
        for={name}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label} {required && <span class="text-red-500">*</span>}
      </label>      <div class="relative">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          class={getInputClass()}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          onBlur={handleBlur}
          pattern={pattern}
          autocomplete={name === "email" ? "email" : ""}
        />
        
        {/* Validation icons */}
        {isTouched && value && validationState === "valid" && (
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        )}
        
        {isTouched && value && validationState === "invalid" && (
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
          </div>
        )}
      </div>
      {error && <p class="mt-1 text-sm text-red-600">{error}</p>}
      {!error && validationState === "invalid" && validationMessage && (
        <p class="mt-1 text-sm text-red-600">{validationMessage}</p>
      )}
    </div>
  );
};

export default TextInput;
