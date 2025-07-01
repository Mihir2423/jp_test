# 🎨 Theme Utilities Documentation

Welcome to the documentation for <code>src/utils/theme.ts</code>! This file provides a simple yet powerful utility for dynamically applying color themes to your application by setting CSS custom properties (variables) at runtime.


## 🔍 Overview

The <code>applyThemeColors</code> function is a utility that injects your color theme into the document’s root element by setting CSS variables. This approach allows you to:

- Swap out entire color palettes  at runtime
- Keep your CSS lean by referencing variables instead of hard-coded colors
- Support both  light/dark modes  or any custom theme seamlessly

This utility expects a <code>ColorTheme</code> object (defined elsewhere in your codebase) that describes all necessary color values for backgrounds, text, and accents.

---

## ⚙️ Key Function: applyThemeColors

```typescript
import { ColorTheme } from "@/types/color.types";

export const applyThemeColors = (colors: ColorTheme): void => {
  const root = document.documentElement;

  // Apply main colors
  root.style.setProperty('--color-background-primary', colors.primaryColor);
  root.style.setProperty('--color-background-secondary', colors.secondaryColor);
  root.style.setProperty('--color-background-dark', colors.tertiaryColor);
  root.style.setProperty('--color-text-red', colors.sellColor);
  root.style.setProperty('--color-text-green', colors.buyColor);
  root.style.setProperty('--color-background-green', colors.buyColor);

  // Apply typography colors
  root.style.setProperty('--color-text-white', colors.typoPrimaryColor);
  root.style.setProperty('--color-text-blue', colors.typoSecondaryColor);
  root.style.setProperty('--color-background-lightblue', colors.typoAccentColor);
  root.style.setProperty('--color-text-gray', colors.typoAccent2Color);
};
```

### What It Does

- Selects  the document’s root element ( <code> :root </code> )
- Sets  CSS custom properties via <code> style.setProperty(name, value) </code>
- Overwrites  any previously set theme values, enabling dynamic switching

---

## 🔍 Parameters &amp; Types

| Parameter Name | Type | Description |
| --- | --- | --- |
| <code>colors</code> | <code>ColorTheme</code> | An object containing all required color definitions. |

### ColorTheme Interface (Example)

```php
export interface ColorTheme {
  primaryColor: string;       // Main background
  secondaryColor: string;     // Secondary background
  tertiaryColor: string;      // Darker background shade
  sellColor: string;          // Red accent (e.g., sell indicator)
  buyColor: string;           // Green accent (e.g., buy indicator)
  typoPrimaryColor: string;   // Primary text color (white often)
  typoSecondaryColor: string; // Secondary text color (blue, etc.)
  typoAccentColor: string;    // Accent background for typography (light blue)
  typoAccent2Color: string;   // Secondary accent for text (gray)
}
```

be sure to define or import this interface in <code>@/types/color.types</code> to ensure type safety.

---

## 🗺 CSS Variable Mapping

Below is a breakdown of which CSS variables get set and how they correspond to your <code>ColorTheme</code>:

| CSS Variable | ColorTheme Property | Purpose |
| --- | --- | --- |
| <code>--color-background-primary</code> | <code>primaryColor</code> | Main page or component background |
| <code>--color-background-secondary</code> | <code>secondaryColor</code> | Secondary container backgrounds |
| <code>--color-background-dark</code> | <code>tertiaryColor</code> | Darker backgrounds or overlays |
| <code>--color-text-red</code> | <code>sellColor</code> | Text or icon color for “sell” actions |
| <code>--color-text-green</code> | <code>buyColor</code> | Text or icon color for “buy” actions |
| <code>--color-background-green</code> | <code>buyColor</code> | Background for “buy” badges/buttons |
| <code>--color-text-white</code> | <code>typoPrimaryColor</code> | Primary text color (often white) |
| <code>--color-text-blue</code> | <code>typoSecondaryColor</code> | Secondary text hue (blue, etc.) |
| <code>--color-background-lightblue</code> | <code>typoAccentColor</code> | Light-blue backgrounds for accents |
| <code>--color-text-gray</code> | <code>typoAccent2Color</code> | Gray text for muted or disabled states |

---

## 🚀 Usage Example

### Define your theme object:

```javascript
import { ColorTheme } from "@/types/color.types";

const darkTheme: ColorTheme = {
  primaryColor: "#121212",
  secondaryColor: "#1E1E1E",
  tertiaryColor: "#2A2A2A",
  sellColor: "#E53935",
  buyColor: "#43A047",
  typoPrimaryColor: "#FFFFFF",
  typoSecondaryColor: "#90CAF9",
  typoAccentColor: "#BBDEFB",
  typoAccent2Color: "#B0BEC5",
};
```

### Apply the theme at startup or on user action:

```javascript
import { applyThemeColors } from "@/utils/theme";

// e.g., in your app’s entry point or theme switcher:
applyThemeColors(darkTheme);
```

### Reference the CSS variables in your styles:

```css
body {
  background-color: var(--color-background-primary);
  color: var(--color-text-white);
}

.btn-sell {
  color: var(--color-text-red);
}

.badge-buy {
  background-color: var(--color-background-green);
}
```

---
