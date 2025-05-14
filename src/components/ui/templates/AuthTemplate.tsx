import { FC } from "hono/jsx";
import { Layout } from "../Layout";
import { AuthFormComponent } from "../organisms/AuthFormComponent";
import { Text } from "../atoms/Text";

type AuthTemplateProps = {
  mode?: "login" | "signup" | "forgot" | "reset";
  title?: string;
};

export const AuthTemplate: FC<AuthTemplateProps> = ({ 
  mode = "login",
  title = "Authentication",
}) => {
  const titles = {
    login: "Sign In",
    signup: "Create Account",
    forgot: "Forgot Password",
    reset: "Reset Password"
  };

  const targetUrl = `/auth/${mode}`;

  const renderHeading = () => {
    return (
      <div class="mb-8 text-center">
        <img 
          src="https://www.pngfind.com/pngs/m/331-3310167_mubs-logo-makerere-university-business-school-logo-hd.png" 
          alt="MUBS Clearance System" 
          class="mx-auto h-16 w-auto mb-4" 
        />
        <h1 class="text-2xl font-bold text-gray-900">{titles[mode]}</h1>
        <Text color="muted" className="mt-2">
          {mode === "login" && "Welcome back! Sign in to your account"}
          {mode === "signup" && "Create your account to get started"}
          {mode === "forgot" && "Enter your email to reset your password"}
          {mode === "reset" && "Create a new secure password"}
        </Text>
      </div>
    );
  };

  return (
    <Layout>
      <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
          {renderHeading()}
          
          <div class="mt-6">
            <AuthFormComponent 
              mode={mode}
              targetUrl={targetUrl}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthTemplate;
