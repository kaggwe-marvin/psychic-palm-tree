type NavItemProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

export default function NavItem({ href, label, isActive = false }: NavItemProps) {
  return (
    <li className={isActive ? 'active' : ''}>
      <a href={href}>{label}</a>
    </li>
  );
}