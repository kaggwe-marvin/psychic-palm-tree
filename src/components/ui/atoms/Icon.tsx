/**
 * Franken UI Icon Atom (HTML, CDN, Lucide-based)
 * Usage example:
 *   Icon({ icon: "smile", clsCustom: "text-blue-600", width: "24", height: "24", strokeWidth: "2" })
 */

type IconProps = {
  icon: string; // Lucide icon name, e.g. "smile"
  clsCustom?: string; // Custom CSS classes for SVG
  width?: string | number; // SVG width
  height?: string | number; // SVG height
  strokeWidth?: string | number; // SVG stroke width
};

export function Icon({
  icon,
  clsCustom = "",
  width = "16",
  height = "16",
  strokeWidth = "2",
}: IconProps): string {
  return `
    <div class="size-4">
      <uk-icon
        icon="${icon}"
        cls-custom="${clsCustom}"
        width="${width}"
        height="${height}"
        stroke-width="${strokeWidth}"
      ></uk-icon>
    </div>
  `.trim();
}