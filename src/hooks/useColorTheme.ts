import { ColorTheme, DEFAULT_COLOR_THEME } from "@/types/color.types";
import { applyThemeColors } from "@/utils/theme";
import { useLocalStorage } from "./useLocalStorage";

export const useColorTheme = () => {
  const [colors, setColors] = useLocalStorage<ColorTheme>(
    "colorTheme",
    DEFAULT_COLOR_THEME
  );

  const handleColorChange = (colorKey: keyof ColorTheme, value: string) => {
    setColors((prev) => ({
      ...prev,
      [colorKey]: value,
    }));
  };

  const applyColors = () => {
    applyThemeColors(colors);
  };

  const resetColors = () => {
    setColors(DEFAULT_COLOR_THEME);
    applyThemeColors(DEFAULT_COLOR_THEME);
  };

  return {
    colors,
    handleColorChange,
    applyColors,
    resetColors,
  };
};
