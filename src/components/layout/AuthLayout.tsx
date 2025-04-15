type AuthLayoutProps = {
  children: JSX.Element;
  title: string;
  user?: {
    name: string;
    role: string;
  };
};

export default function AuthLayout({ 
   children,
  title,
  user = { name: "Auth User", role: "Auth" },
}: AuthLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://unpkg.com/htmx.org@2.0.4"
          integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+"
          crossOrigin="anonymous"
        ></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>{title}-MUBS Clearance: Authentication</title>
      </head>
      <body class="bg-gray-100 text-gray-900 font-sans antialiased flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div class="text-center mb-6">
            <h1 class="text-2xl font-bold text-gray-800">Clearance System</h1>
            <p class="text-sm text-gray-600">Secure Authentication Portal</p>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}