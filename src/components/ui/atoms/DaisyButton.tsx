import { JSX } from 'hono/jsx';

type DaisyButtonProps = {
  children: JSX.Element | string;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'error' | 'info' | 'success' | 'warning';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export default function DaisyButton({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button', 
  onClick 
}: DaisyButtonProps) {
  return (
    <button 
      type={type} 
      className={`btn ${variant ? `btn-${variant}` : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}