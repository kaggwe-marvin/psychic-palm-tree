import AuthLayout from "../../components/layout/AuthLayout";

export default function Login() {
  return (
    <AuthLayout title="Login">
      <div>
        <h1 className="text-xl font-bold text-gray-800 mb-4">Login</h1>
        <form
          hx-post="/auth/login"
          hx-target="#login-response"
          hx-swap="innerHTML"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div id="login-response" className="mt-4 text-sm text-gray-600"></div>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/auth/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}