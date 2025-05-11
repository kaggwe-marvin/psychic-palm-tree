/**
 * Franken UI Avatar Atom
 * Usage:
 *   Avatar({ initial: "F", className: "ring-2 ring-white" })
 */

type AvatarProps = {
    initial: string;
    className?: string;
    size?: number | string; // e.g. 32, "2rem"
    bgColor?: string; // Tailwind bg color, e.g. "bg-blue-500"
    textColor?: string; // Tailwind text color, e.g. "text-white"
  };
  
  export function Avatar({
    initial,
    className = "",
    size = 32,
    bgColor = "bg-blue-500",
    textColor = "text-white",
  }: AvatarProps): string {
    const dimension = typeof size === "number" ? `${size}px` : size;
    return `
      <div
        class="rounded-full flex items-center justify-center ${bgColor} ${textColor} ${className}"
        style="width:${dimension};height:${dimension};font-size:calc(${dimension}*0.5);"
        aria-label="Avatar"
      >
        ${initial}
      </div>
    `.trim();
  }