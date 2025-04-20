import { AuthForm } from "../../components/AuthForm";
import AuthLayout from "../../components/layout/AuthLayout";

export default function Signup() {
  return (
    <AuthLayout title="Signup">
      <div class="flex justify-center">
        <AuthForm
          action="Sign up"
          description="Enter your email below to create your account."
        />
      </div>
      <div class="mt-4 text-center text-sm">
        Already have an account?{" "}
        <a href="/auth"
           class="text-blue-600 hover:underline">
          Log in
        </a>
      </div>
    </AuthLayout>
  );
}