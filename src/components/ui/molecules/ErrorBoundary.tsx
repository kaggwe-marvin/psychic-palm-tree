import { FC, useState } from 'hono/jsx';
import { Alert } from './Alert';

type ErrorBoundaryProps = {
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ fallback, children }) => {
  // In a real implementation, you'd need server-side error handling
  // This is just a client-side example
  return (
    <div
      hx-on:htmx:error="this.querySelector('.error-content').classList.remove('hidden')"
    >
      <div className="error-content hidden">
        {fallback || (
          <Alert type="error">
            Something went wrong. Please try again or contact support.
          </Alert>
        )}
      </div>
      {children}
    </div>
  );
};