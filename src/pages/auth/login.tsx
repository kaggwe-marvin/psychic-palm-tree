import { AuthForm } from "../../components/AuthForm";
import AuthLayout from "../../components/layout/AuthLayout";

export default function Login() {
  return (
    <AuthLayout title="Login">
      <div class="flex justify-center">
      <AuthForm
          action="Log in"
          description="Enter your email below to login to your account."
        />
      </div>
      <div class="mt-4 text-center text-sm">
        New here?{" "}
        <a href="/auth/register"
           class="text-blue-600 hover:underline">
          Create an account
        </a>
      </div>
    </AuthLayout>
  );
}