import { JSX } from "hono/jsx";

export default function AdminLayout({children}: {children:JSX.Element}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossOrigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <title>Clearance: Admin</title>
            </head>
            <body class="bg-gray-300 text-gray-900 font-sans antialiased flex flex-col min-h-screen">
                {children}
            </body>
        </html>
    )
}