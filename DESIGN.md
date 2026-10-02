# Design System Specification: Neo-Brutalism

> **Theme**: Neo-Brutalism (tweakcn preset)  
> **Target**: Personal Portfolio - Hamzan Wahyudi  
> **Lead Designer**: Sally (UX Designer)  

---

## 1. Visual Philosophy & Design Principles

Neo-Brutalism combines the raw, high-contrast, structural aesthetic of traditional brutalism with modern digital ergonomics, clean typography, and tactile micro-interactions.

### Core Principles
1. **Bold & Unapologetic Contrast**: Strong structural borders (2px - 3px solid black/white) and high-contrast surfaces.
2. **Tactile Hard Shadows (Offset Elevation)**: No blurry drop-shadows. Shadows are solid, crisp, and offset (e.g. `3px 3px 0px 0px #000000` or `4px 4px 0px 0px #000000`), giving interactive elements a physical "stamped" feel.
3. **Geometry & Crisp Radius**: Minimalist border-radii (`0.25rem` / `0.375rem` or sharp `0px`) to preserve structural clarity and geometric weight.
4. **Expressive Hover & Active States**: When hovered or pressed, interactive components shift along the X/Y axes (e.g., `-2px -2px` translation) while expanding the shadow footprint to simulate tactile physical buttons.
5. **Human & Accessible**: High readability, distinct focus indicators (`outline-2 outline-offset-2`), and AA/AAA compliant text contrasts.

---

## 2. Color Palette & Semantic Tokens

Using modern OKLCH color space for vivid, consistent contrast across Light and Dark themes.

### Light Mode (`:root`)
| Token | Value | Role |
| :--- | :--- | :--- |
| `--background` | `oklch(0.985 0.005 90)` | Clean off-white paper canvas |
| `--foreground` | `oklch(0.12 0 0)` | Deep solid black text |
| `--card` | `oklch(1 0 0)` | Pure white card background |
| `--card-foreground` | `oklch(0.12 0 0)` | Card text |
| `--popover` | `oklch(1 0 0)` | Flyouts / dropdowns |
| `--popover-foreground` | `oklch(0.12 0 0)` | Flyout text |
| `--primary` | `oklch(0.18 0 0)` | Primary high-impact actions |
| `--primary-foreground` | `oklch(0.985 0 0)` | Text on primary |
| `--secondary` | `oklch(0.94 0.02 90)` | Subtle surface / chip background |
| `--secondary-foreground` | `oklch(0.18 0 0)` | Secondary text |
| `--muted` | `oklch(0.94 0 0)` | Inactive background |
| `--muted-foreground` | `oklch(0.42 0 0)` | Subdued / meta text |
| `--accent` | `oklch(0.92 0.08 95)` | Neo-brutalist pop accent (Warm Yellow/Gold) |
| `--accent-foreground` | `oklch(0.12 0 0)` | Accent text |
| `--destructive` | `oklch(0.58 0.24 27)` | Warning / Danger red |
| `--destructive-foreground` | `oklch(1 0 0)` | Text on danger |
| `--border` | `oklch(0.12 0 0)` | Solid black structure border (2px) |
| `--input` | `oklch(0.12 0 0)` | Form input borders |
| `--ring` | `oklch(0.12 0 0)` | Focus ring |
| `--shadow-color` | `oklch(0.12 0 0)` | Hard shadow color |

### Dark Mode (`.dark`)
| Token | Value | Role |
| :--- | :--- | :--- |
| `--background` | `oklch(0.14 0 0)` | Deep slate / dark background |
| `--foreground` | `oklch(0.985 0 0)` | Crisp white text |
| `--card` | `oklch(0.19 0 0)` | Elevated dark container |
| `--card-foreground` | `oklch(0.985 0 0)` | Dark card text |
| `--popover` | `oklch(0.19 0 0)` | Dark popover background |
| `--popover-foreground` | `oklch(0.985 0 0)` | Dark popover text |
| `--primary` | `oklch(0.985 0 0)` | High-contrast white action |
| `--primary-foreground` | `oklch(0.14 0 0)` | Dark text on primary |
| `--secondary` | `oklch(0.24 0 0)` | Secondary surface |
| `--secondary-foreground` | `oklch(0.985 0 0)` | Secondary text |
| `--muted` | `oklch(0.24 0 0)` | Muted background |
| `--muted-foreground` | `oklch(0.70 0 0)` | Muted text |
| `--accent` | `oklch(0.35 0.08 95)` | Dark accent pop |
| `--accent-foreground` | `oklch(0.985 0 0)` | Dark accent text |
| `--destructive` | `oklch(0.70 0.19 22)` | Dark mode danger |
| `--destructive-foreground` | `oklch(0.14 0 0)` | Text on danger |
| `--border` | `oklch(0.985 0 0)` | Solid white structure border (2px) |
| `--input` | `oklch(0.985 0 0)` | Form input borders |
| `--ring` | `oklch(0.985 0 0)` | Focus ring |
| `--shadow-color` | `oklch(0.985 0 0)` | Hard shadow color |

---

## 3. Elevation & Shadows

Neo-Brutalism replaces traditional Gaussian blur shadows with defined offset vectors:

```css
/* Hard Offset Shadow Tokens */
--shadow-sm: 2px 2px 0px 0px var(--shadow-color);
--shadow-md: 4px 4px 0px 0px var(--shadow-color);
--shadow-lg: 6px 6px 0px 0px var(--shadow-color);
--shadow-hover: 5px 5px 0px 0px var(--shadow-color);
```

### Utility Class Mapping:
- `shadow-neo-sm`: `shadow-[2px_2px_0px_0px_var(--shadow-color)]`
- `shadow-neo`: `shadow-[4px_4px_0px_0px_var(--shadow-color)]`
- `shadow-neo-lg`: `shadow-[6px_6px_0px_0px_var(--shadow-color)]`

---

## 4. Typography System

- **Primary Font**: `Atkinson`, sans-serif (clean, highly legible grotesque characteristics).
- **Headings**: Heavy weights (`font-bold` / `font-black`), tracking slightly tighter (`tracking-tight`), distinct high contrast.
- **Code & Tech Tags**: Monospace accents (`font-mono`) with uppercase tag pills and crisp borders.

---

## 5. Component Patterns & Interaction Guidelines

### A. Buttons (`<Button />`)
- **Default State**: `border-2 border-border bg-card text-foreground font-semibold px-4 py-2 rounded-md shadow-neo transition-all duration-150`
- **Hover State**: `-translate-x-0.5 -translate-y-0.5 shadow-neo-lg bg-accent text-accent-foreground`
- **Active / Pressed**: `translate-x-0.5 translate-y-0.5 shadow-neo-sm`

### B. Cards (`<ArrowCard />`, `<StackCard />`)
- **Structure**: `border-2 border-border bg-card p-4 rounded-md shadow-neo hover:shadow-neo-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200`
- **Badges / Tags**: `border border-border bg-secondary font-mono text-xs uppercase px-2 py-0.5 rounded-sm`

### C. Inputs & Forms (`<SearchBar />`, Form fields)
- **Structure**: `border-2 border-border bg-background px-3 py-2 rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:shadow-neo transition-all`

---

## 6. Accessibility Checklist
- [x] High contrast text ratio (> 7:1 for normal text in light and dark mode).
- [x] Clear keyboard focus state (`focus-visible:ring-2 focus-visible:ring-ring`).
- [x] Explicit interactive boundaries (2px borders prevent low-contrast bleeding).
- [x] Motion respects `prefers-reduced-motion` settings.
