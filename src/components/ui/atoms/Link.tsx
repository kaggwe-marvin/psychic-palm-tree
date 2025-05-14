import { FC } from "hono/jsx";

type LinkProps = {
  href: string;
  children: any;
  className?: string;
  external?: boolean;
  activeClass?: string;
  isActive?: boolean;
  onClick?: () => void;
};

/**
 * A general-purpose link component that supports both internal and external links
 * with customizable styling, including active state handling.
 */
export const Link: FC<LinkProps> = ({
  href,
  children,
  className = "",
  external = false,
  activeClass = "text-indigo-600",
  isActive = false,
  onClick
}) => {
  // Default link styling
  const defaultClass = "transition-colors hover:text-indigo-500";
  
  // Combine default, custom, and active classes
  const combinedClasses = [
    defaultClass,
    className,
    isActive ? activeClass : ""
  ].filter(Boolean).join(" ");
  
  // External link attributes
  const externalAttrs = external ? { 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {};
  
  return (
    <a 
      href={href}
      class={combinedClasses}
      onClick={onClick}
      {...externalAttrs}
    >
      {children}
    </a>
  );
};

export default Link;