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
    </AuthLayout>
  );
}