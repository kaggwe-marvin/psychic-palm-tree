# Folder Structure Restructuring

## New Structure

We've reorganized the component structure to better separate concerns and make the codebase more maintainable:

```
src/
├── components/          # All reusable UI components
│   ├── atoms/          # Smallest UI components (buttons, inputs)
│   ├── molecules/      # Combinations of atoms (form fields, cards)
│   ├── organisms/      # Complex UI sections
│   │   ├── common/     # Shared across roles (Header, Sidebar)
│   │   ├── admin/      # Admin-specific components
│   │   ├── staff/      # Staff-specific components
│   │   └── student/    # Student-specific components
│   ├── templates/      # Page layouts
│   └── contexts/       # Context providers
├── pages/              # Full page components
│   ├── admin/          # Admin pages
│   ├── staff/          # Staff pages
│   ├── student/        # Student pages
│   └── auth/           # Authentication pages
└── utils/              # Helper functions
```

## Import Updates Required

After running the restructure script, you'll need to update your imports. Here's a guide to the most common import replacements:

### For Organisms

```typescript
// Old imports
import { Header } from '../organisms/Header';
import { Sidebar } from '../organisms/Sidebar';

// New imports
import { Header } from '../components/organisms/common/Header';
import { Sidebar } from '../components/organisms/common/Sidebar';
```

### For Pages

```typescript
// Old imports
import AdminDashboard from '../components/ui/pages/admin/AdminDashboard';

// New imports
import AdminDashboard from '../pages/admin/AdminDashboard';
```

### For Templates

```typescript
// Old imports
import { AdminTemplate } from '../components/ui/templates/AdminTemplate';

// New imports
import { AdminTemplate } from '../components/templates/AdminTemplate';
```

## Benefits of the New Structure

1. **Role-Based Organization**: Components are now organized by their role (admin, staff, student) making it easier to find related components
2. **Clear Component Hierarchy**: Atoms → Molecules → Organisms → Templates → Pages
3. **Reduced Directory Nesting**: Flatter structure means shorter import paths
4. **Improved Discoverability**: Components are easier to find based on their purpose
5. **Better Separation of Concerns**: Clearer boundaries between different parts of the application

## Recommended VS Code Extensions

To help with automatic import updates:
- Path Intellisense
- Auto Import

## Need Help?

If you encounter any issues with imports after restructuring, you can use VS Code's search functionality (Ctrl+Shift+F) to find and replace old import paths across the codebase.
