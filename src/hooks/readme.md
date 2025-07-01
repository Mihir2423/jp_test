# 🎨 useColorTheme Hook Documentation

## 🏷️ 1. Overview

The <code>useColorTheme</code> hook:

- Persists  user-selected color themes in <code> localStorage </code> .
- Applies  CSS custom properties (variables) to the document.
- Resets  to a default theme with a single call.

Use it to build themeable UIs where users can tweak colors and have their preferences remembered.

---

## ✨ 2. Key Features

| Feature | Description |
| --- | --- |
| 🎯 Persistent Storage | Stores theme in <code>localStorage</code> under the key <code>"colorTheme"</code>. |
| 🖌️ Dynamic Updates | Allows changing any color token at runtime via <code>handleColorChange</code>. |
| ⚙️ Apply to DOM | Applies all current colors as CSS variables (via <code>applyThemeColors</code>). |
| 🔄 Reset to Default | Reverts to <code>DEFAULT_COLOR_THEME</code> and reapplies it. |

---

## ⚙️ 3. How It Works

1. Initialization
    1. Reads any previously saved theme from <code> localStorage </code>
    1. Falls back to <code> DEFAULT_COLOR_THEME </code> if none is found
1. Color Updates
    1. <code> handleColorChange(key, value) </code> merges the new color into the existing theme object
    1. Updates both React state and <code> localStorage </code>
1. Apply Theme
    1. <code> applyColors() </code> invokes <code> applyThemeColors(colors) </code> to update CSS variables on <code> </code>
1. Reset
    1. <code> resetColors() </code> sets the theme back to default, updates storage, and reapplies defaults

---

## 📚 4. API Reference

### useColorTheme()

Returns an object with:

| Property / Method | Type | Description |
| --- | --- | --- |
| colors | <code>ColorTheme</code> | Current theme object (e.g. <code>{ primary: "#ff0000", ... }</code>). |
| handleColorChange | <code>(key, value) =&gt; void</code> | Change a single color token and persist in storage. |
| applyColors | <code>() =&gt; void</code> | Apply the current theme object as CSS variables in the document. |
| resetColors | <code>() =&gt; void</code> | Reset to the default theme and reapply it. |

---
