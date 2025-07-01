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
