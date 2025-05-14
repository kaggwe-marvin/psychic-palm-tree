import { JSX } from 'hono/jsx';

type BadgeProps = {
  text?: string;
  children?: JSX.Element | string;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'neutral' | 'primary' | 'secondary' | 'danger';
  className?: string;
};

export default function Badge({ children, variant = 'neutral', className = '' }: BadgeProps): JSX.Element {
  const variantClasses = {
    success: "bg-success/10 text-success border-success/30",
    error: "bg-error/10 text-error border-error/30",
    warning: "bg-warning/10 text-warning border-warning/30",
    info: "bg-info/10 text-info border-info/30",
    neutral: "bg-base-200 text-base-content border-base-300",
    primary: "bg-primary/10 text-primary border-primary/30",
    secondary: "bg-secondary/10 text-secondary border-secondary/30"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}