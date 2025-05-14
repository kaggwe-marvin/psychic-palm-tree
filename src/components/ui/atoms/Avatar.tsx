import { JSX } from 'hono/jsx';

type AvatarProps = {
  userEmail?: string;
  name?: string;
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

export function Avatar({ userEmail, name, src, alt, size = 'md', className = '' }: AvatarProps): JSX.Element {
  // Calculate size in pixels based on the size prop
  const sizeMap = {
    'xs': 'w-6 h-6 text-xs',
    'sm': 'w-8 h-8 text-sm',
    'md': 'w-10 h-10 text-md',
    'lg': 'w-12 h-12 text-lg',
    'xl': 'w-16 h-16 text-xl'
  };
  
  // Get initials from name or email
  const getInitials = (): string => {
    if (name) {
      const nameParts = name.split(' ');
      if (nameParts.length >= 2) {
        return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    }
    
    if (userEmail) {
      const parts = userEmail.split('@')[0].split(/[._-]/);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return userEmail.substring(0, 2).toUpperCase();
    }
    
    return '??';
  };
    // Generate a consistent color based on the identifier (email or name)
  const getColorClass = (): string => {
    const identifier = name || userEmail || 'user';
    const colorOptions = [
      'bg-primary text-primary-content',
      'bg-secondary text-secondary-content', 
      'bg-accent text-accent-content', 
      'bg-neutral text-neutral-content',
      'bg-info text-info-content',
      'bg-success text-success-content',
      'bg-warning text-warning-content'
    ];
    
    // Simple hash function to get a consistent index
    const hash = identifier.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colorOptions[hash % colorOptions.length];
  };

  if (src) {
    return (
      <img 
        src={src} 
        alt={alt || (name || userEmail || 'User avatar')}
        className={`${sizeMap[size]} rounded-full object-cover ${className}`}
      />
    );
  }
  return (
    <div 
      className={`${sizeMap[size]} ${getColorClass()} rounded-full flex items-center justify-center font-medium ${className}`}
      aria-label={`Avatar for ${name || userEmail || 'user'}`}
    >
      {getInitials()}
    </div>
  );
}