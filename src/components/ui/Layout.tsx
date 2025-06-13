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
        <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/static/css/htmx.css" />
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
      <body className="bg-gray-50 text-gray-900 min-h-screen" >
        {children}
        {/* Toast container for notifications */}
        <div id="toast-container" className="fixed bottom-4 right-4 z-50"></div>
        
        {html`
          <script src="/static/js/htmxUtils.js"></script>
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