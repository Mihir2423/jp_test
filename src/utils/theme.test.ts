import { applyThemeColors } from "./theme";
import { ColorTheme } from "@/types/color.types";

describe("theme utilities", () => {
  beforeEach(() => {
    document.documentElement.style.cssText = "";
  });

  describe("applyThemeColors", () => {
    const mockColors: ColorTheme = {
      primaryColor: "#123456",
      secondaryColor: "#789abc",
      tertiaryColor: "#def123",
      sellColor: "#ff0000",
      buyColor: "#00ff00",
      typoPrimaryColor: "#ffffff",
      typoSecondaryColor: "#0000ff",
      typoAccentColor: "#add8e6",
      typoAccent2Color: "#808080",
    };

    it("should apply all color variables to document root", () => {
      applyThemeColors(mockColors);

      const styles = getComputedStyle(document.documentElement);

      expect(styles.getPropertyValue("--color-background-primary")).toBe(
        mockColors.primaryColor
      );
      expect(styles.getPropertyValue("--color-background-secondary")).toBe(
        mockColors.secondaryColor
      );
      expect(styles.getPropertyValue("--color-background-dark")).toBe(
        mockColors.tertiaryColor
      );
      expect(styles.getPropertyValue("--color-text-red")).toBe(
        mockColors.sellColor
      );
      expect(styles.getPropertyValue("--color-text-green")).toBe(
        mockColors.buyColor
      );
      expect(styles.getPropertyValue("--color-background-green")).toBe(
        mockColors.buyColor
      );
      expect(styles.getPropertyValue("--color-text-white")).toBe(
        mockColors.typoPrimaryColor
      );
      expect(styles.getPropertyValue("--color-text-blue")).toBe(
        mockColors.typoSecondaryColor
      );
      expect(styles.getPropertyValue("--color-background-lightblue")).toBe(
        mockColors.typoAccentColor
      );
      expect(styles.getPropertyValue("--color-text-gray")).toBe(
        mockColors.typoAccent2Color
      );
    });

    it("should override previous values when called multiple times", () => {
      const initialColors: ColorTheme = {
        ...mockColors,
        primaryColor: "#111111",
      };

      applyThemeColors(initialColors);
      applyThemeColors(mockColors);

      const styles = getComputedStyle(document.documentElement);
      expect(styles.getPropertyValue("--color-background-primary")).toBe(
        mockColors.primaryColor
      );
    });

    it("should handle empty color values", () => {
      const emptyColors = {
        primaryColor: undefined,
        secondaryColor: undefined,
        tertiaryColor: undefined,
        sellColor: undefined,
        buyColor: undefined,
        typoPrimaryColor: undefined,
        typoSecondaryColor: undefined,
        typoAccentColor: undefined,
        typoAccent2Color: undefined,
      } as unknown as ColorTheme;
      applyThemeColors(emptyColors as ColorTheme);

      const styles = getComputedStyle(document.documentElement);
      expect(styles.getPropertyValue("--color-background-primary")).toBe("");
    });
  });
});
