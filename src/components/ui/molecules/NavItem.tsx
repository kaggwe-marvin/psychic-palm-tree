import Icon from '../atoms/Icon';

type NavItemProps = {
  href: string;
  label: string;
  isActive?: boolean;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
  strokeWidth?: number;
};

export default function NavItem({ 
  href, 
  label, 
  isActive = false, 
  icon, 
  iconSize = 20,
  iconColor = "currentColor",
  strokeWidth = 1.5
}: NavItemProps) {
  return (
    <li className={`${isActive ? 'active' : ''} list-none`}>
      <a href={href} className="flex items-center p-2 rounded-lg hover:bg-primary-focus transition-colors">
        {icon && (
          <Icon 
            name={icon} 
            className="mr-2" 
            size={iconSize} 
            color={isActive ? 'var(--primary-color, #4338ca)' : iconColor}
            strokeWidth={strokeWidth}
          />
        )}
        <span>{label}</span>
      </a>
    </li>
  );
}