// utils/themeToCss.ts
export function themeToCss(theme: Record<string, Record<string, string>>): string {
    return Object.entries(theme)
      .map(([selector, vars]) => {
        const cssVars = Object.entries(vars)
          .map(([key, val]) => `  ${key}: ${val};`)
          .join('\n');
        return `${selector} {\n${cssVars}\n}`;
      })
      .join('\n');
  }
  