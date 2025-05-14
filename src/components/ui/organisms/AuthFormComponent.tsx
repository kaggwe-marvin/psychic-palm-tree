import { FC } from "hono/jsx";
import Input from "../atoms/Input";
import { FormFooter } from "../molecules/FormFooter";
import { Button } from "../atoms/Button";

type AuthFormProps = {
  mode: "login" | "signup" | "forgot" | "reset";
  targetUrl: string;
};

export const AuthFormComponent: FC<AuthFormProps> = ({ mode, targetUrl }) => {
  // Get button text based on mode
  const getButtonText = () => {
    const buttonText = {
      login: "Sign In",
      signup: "Create Account",
      forgot: "Send Reset Link",
      reset: "Reset Password"
    };
    return buttonText[mode];
  };
  
  // Determine which form fields to show based on mode
  const renderFormFields = () => {
    return (
      <div className="space-y-4">
        
        {/* Email field for login, signup, and forgot password */}
        {(mode === "login" || mode === "signup" || mode === "forgot") && (
          <div className="grid gap-2">
            <Input
              name="email"
              placeholder="Email"
              label="Email"
              type="email"
              hasBottomMargin
              required
            />
          </div>
        )}

       
       

        {/* Password field for login, signup, and reset */}
        {(mode === "login" || mode === "signup" || mode === "reset") && (
          <div className="grid gap-2">
            <Input
              name="password"
              placeholder="Password"
              label="Password"
              type="password"
              hasBottomMargin
              required
            />
          </div>
        )}

        {/* Confirm Password field for signup and reset */}
        {(mode === "signup" || mode === "reset") && (
          <div className="grid gap-2">
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              label="Confirm Password"
              type="password"
              hasBottomMargin
              required
            />
          </div>
        )}

        {/* Reset token field for reset password */}
        {mode === "reset" && (
          <div className="grid gap-2">
            <Input
              name="resetToken"
              placeholder="Reset Token"
              label="Reset Token"
              type="text"
              hasBottomMargin
              required
            />
          </div>
        )}
      </div>
    );
  };

  // Simple form that posts directly to the target URL
  return (
    <form method="post" action={targetUrl} className="space-y-6">
      {/* Error message display area */}
      <div className="bg-red-50 text-red-500 p-3 rounded-md hidden">
        <p>Error message appears here</p>
      </div>
      
      {/* Success message display area */}
      <div className="bg-green-50 text-green-500 p-3 rounded-md hidden">
        <p>Success message appears here</p>
      </div>
      
      {renderFormFields()}
      
      <div>
        <Button 
          type="submit" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md"
        >
          {getButtonText()}
        </Button>
      </div>
      
      <FormFooter mode={mode} />
    </form>
  );
};

export default AuthFormComponent;
