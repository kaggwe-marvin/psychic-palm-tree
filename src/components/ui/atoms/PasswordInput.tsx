import { FC } from "hono/jsx";
import { useState, useEffect } from "hono/jsx";

type PasswordInputProps = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  className?: string;
  showStrengthMeter?: boolean;
};

type StrengthLevel = "weak" | "medium" | "strong" | "none";

export const PasswordInput: FC<PasswordInputProps> = ({
  label,
  name,
  placeholder,
  required = false,
  value = "",
  error,
  onChange,
  className = "",
  showStrengthMeter = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<StrengthLevel>("none");
  const [strengthText, setStrengthText] = useState("");
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    
    // Calculate password strength when needed
    if (showStrengthMeter) {
      calculatePasswordStrength(e.target.value);
    }
  };
  
  // Calculate password strength
  const calculatePasswordStrength = (password: string) => {
    if (!password) {
      setPasswordStrength("none");
      setStrengthText("");
      return;
    }
    
    // Basic password strength calculation
    let strength = 0;
    
    // Length check
    if (password.length > 8) strength += 1;
    if (password.length > 12) strength += 1;
    
    // Character variety check
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Determine strength level
    if (strength <= 2) {
      setPasswordStrength("weak");
      setStrengthText("Weak password");
    } else if (strength <= 4) {
      setPasswordStrength("medium");
      setStrengthText("Medium strength");
    } else {
      setPasswordStrength("strong");
      setStrengthText("Strong password");
    }
  };
  
  // Update strength when value changes from outside
  useEffect(() => {
    if (showStrengthMeter && value) {
      calculatePasswordStrength(value);
    }
  }, [value, showStrengthMeter]);
  
  // Strength indicator colors
  const strengthColors = {
    none: "",
    weak: "bg-red-500",
    medium: "bg-yellow-500",
    strong: "bg-green-500"
  };
  return (
    <div class={`relative ${className}`}>
      <label
        for={name}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label} {required && <span class="text-red-500">*</span>}
      </label>
      <div class="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          value={value}
          class={`bg-gray-50 border ${error ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors duration-200`}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          autocomplete={name === "confirmPassword" ? "new-password" : name === "password" ? "current-password" : ""}
        />
        <button
          type="button"
          class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
              <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Password strength meter */}
      {showStrengthMeter && passwordStrength !== "none" && (
        <div class="mt-2">
          <div class="flex items-center justify-between">
            <div class={`h-1 rounded-full transition-all duration-300 ease-in-out ${
              passwordStrength === 'weak' ? 'w-1/3 bg-red-500' : 
              passwordStrength === 'medium' ? 'w-2/3 bg-yellow-500' : 
              'w-full bg-green-500'
            }`}></div>
            <span class={`text-xs ml-2 ${
              passwordStrength === 'weak' ? 'text-red-600' : 
              passwordStrength === 'medium' ? 'text-yellow-600' : 
              'text-green-600'
            }`}>
              {strengthText}
            </span>
          </div>
        </div>
      )}
      
      {error && <p class="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default PasswordInput;
