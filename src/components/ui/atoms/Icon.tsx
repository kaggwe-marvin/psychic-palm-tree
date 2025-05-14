import { JSX } from 'hono/jsx';

type IconProps = {
  name: string;
  className?: string;
  size?: string | number;
  strokeWidth?: number;
  color?: string;
};

export default function Icon({ name, className = "", size = 24, strokeWidth = 1.5, color = "currentColor" }: IconProps) {
  // Build the class string, combining any passed classes with default styling
  const classes = `${className}`.trim();
  
  // Convert size to string with 'px' if it's a number
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  
  // Return an element with data-lucide attribute that will be processed by lucide.createIcons()
  return (
    <i 
      data-lucide={name} 
      class={classes}
      style={`width: ${sizeValue}; height: ${sizeValue}; stroke-width: ${strokeWidth};${color !== 'currentColor' ? ` color: ${color};` : ''}`}
    ></i>
  );
}