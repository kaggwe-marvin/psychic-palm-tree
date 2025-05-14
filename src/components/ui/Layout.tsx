import { html } from 'hono/html'
import { FC } from 'hono/jsx'

export const Layout: FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Clearance System</title>
        <script src="https://cdn.tailwindcss.com"></script> 
        <script src="https://unpkg.com/lucide@latest"></script> 
      {html`
          <script>
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: '#3b82f6',    // Primary actions and highlights
                    success: '#10b981',    // Approvals, completion
                    danger: '#ef4444',     // Rejections, errors
                    warning: '#f59e0b',    // Pending status
                    info: '#6366f1',       // Info messages
                    neutral: '#6b7280'     // Secondary text
                  }
                }
              }
            }
          </script>
        `}
        
      </head>
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {children}
        {html`
          <script>
            // Initialize Lucide icons after the DOM has loaded
            document.addEventListener('DOMContentLoaded', function() {
              lucide.createIcons();
            });
          </script>
        `}
      </body>
    </html>
  )
}