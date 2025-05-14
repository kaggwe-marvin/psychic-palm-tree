import { FC } from "hono/jsx";
import { Link } from "../atoms/Link";
import { Text } from "../atoms/Text";

type FormFooterProps = {
  mode: "login" | "signup" | "forgot" | "reset";
};

export const FormFooter: FC<FormFooterProps> = ({ mode }) => {
  // Common link styling
  const linkClass = "text-indigo-600 hover:text-indigo-500 hover:underline font-medium";
  
  return (
    <div className="mt-6 text-center">
      {mode === "login" && (
        <>
          <div className="mb-4">
            <Link 
              href="/auth/forgot"
              className={linkClass}
            >
              <Text size="sm">Forgot your password?</Text>
            </Link>
          </div>
          <Text size="sm">
            Don't have an account?{" "}
            <Link 
              href="/auth/signup"
              className={linkClass}
            >
              Sign up
            </Link>
          </Text>
        </>
      )}

      {mode === "signup" && (
        <Text size="sm">
          Already have an account?{" "}
          <Link 
            href="/auth/login"
            className={linkClass}
          >
            Log in
          </Link>
        </Text>
      )}

      {mode === "forgot" && (
        <Text size="sm">
          Remember your password?{" "}
          <Link 
            href="/auth/login"
            className={linkClass}
          >
            Back to login
          </Link>
        </Text>
      )}

      {mode === "reset" && (
        <Text size="sm">
          Return to{" "}
          <Link 
            href="/auth/login"
            className={linkClass}
          >
            Login
          </Link>
        </Text>
      )}
    </div>
  );
};

export default FormFooter;
