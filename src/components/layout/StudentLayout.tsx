import { JSX } from 'hono/jsx';
import StudentTemplate from '../ui/templates/StudentTemplate';

type StudentLayoutProps = {
  children: JSX.Element;
  title: string;
  user?: {
    email: string;
    role: string;
  };
};

export default function StudentLayout({
  children,
  title,
  user,
}: StudentLayoutProps) {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} - Student Clearance Portal</title>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
      </head>
      <html data-theme="cupcake">
        <body className="bg-base-100 text-base-content">
          <StudentTemplate title={title} userEmail={user?.email}>
            {children}
          </StudentTemplate>
        </body>
      </html>
    </>
  );
}
