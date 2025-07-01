import { renderHook, act } from "@testing-library/react";
import { useColorTheme } from "./useColorTheme";
import { ColorTheme, DEFAULT_COLOR_THEME } from "@/types/color.types";
import { applyThemeColors } from "@/utils/theme";

jest.mock("@/utils/theme", () => ({
  applyThemeColors: jest.fn(),
}));

jest.mock("./useLocalStorage", () => ({
  useLocalStorage: jest.fn(),
}));

const mockApplyThemeColors = applyThemeColors as jest.MockedFunction<
  typeof applyThemeColors
>;
import { useLocalStorage } from "./useLocalStorage";
const mockUseLocalStorage = useLocalStorage as jest.Mock;

describe("useColorTheme", () => {
  const mockSetLocalStorage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseLocalStorage.mockReturnValue([
      DEFAULT_COLOR_THEME,
      mockSetLocalStorage,
    ]);
  });

  it("should initialize with default colors", () => {
    const { result } = renderHook(() => useColorTheme());

    expect(result.current.colors).toEqual(DEFAULT_COLOR_THEME);
    expect(mockUseLocalStorage).toHaveBeenCalledWith(
      "colorTheme",
      DEFAULT_COLOR_THEME
    );
  });

  describe("handleColorChange", () => {
    it("should update a single color value", () => {
      const { result } = renderHook(() => useColorTheme());
      const newColor = "#ff0000";

      act(() => {
        result.current.handleColorChange("primaryColor", newColor);
      });

      expect(mockSetLocalStorage).toHaveBeenCalledWith(expect.any(Function));

      const updater = mockSetLocalStorage.mock.calls[0][0];
      expect(updater(DEFAULT_COLOR_THEME)).toEqual({
        ...DEFAULT_COLOR_THEME,
        primaryColor: newColor,
      });
    });

    it("should handle multiple color changes", () => {
      let storedValue = DEFAULT_COLOR_THEME;
      const mockSetLocalStorage = jest.fn((updater) => {
        storedValue =
          typeof updater === "function" ? updater(storedValue) : updater;
      });

      mockUseLocalStorage.mockReturnValue([storedValue, mockSetLocalStorage]);

      const { result } = renderHook(() => useColorTheme());
      const changes = [
        { key: "primaryColor", value: "#ff0000" },
        { key: "secondaryColor", value: "#00ff00" },
      ];

      act(() => {
        changes.forEach(({ key, value }) => {
          result.current.handleColorChange(key as keyof ColorTheme, value);
        });
      });

      expect(mockSetLocalStorage).toHaveBeenCalledTimes(changes.length);
      expect(storedValue).toEqual({
        ...DEFAULT_COLOR_THEME,
        primaryColor: "#ff0000",
        secondaryColor: "#00ff00",
      });
    });
  });

  describe("applyColors", () => {
    it("should call applyThemeColors with current colors", () => {
      const customColors = {
        ...DEFAULT_COLOR_THEME,
        primaryColor: "#123456",
      };

      mockUseLocalStorage.mockReturnValueOnce([
        customColors,
        mockSetLocalStorage,
      ]);

      const { result } = renderHook(() => useColorTheme());

      act(() => {
        result.current.applyColors();
      });

      expect(mockApplyThemeColors).toHaveBeenCalledWith(customColors);
    });
  });

  describe("resetColors", () => {
    it("should reset colors to defaults and apply them", () => {
      const customColors = {
        ...DEFAULT_COLOR_THEME,
        primaryColor: "#654321",
      };

      mockUseLocalStorage.mockReturnValueOnce([
        customColors,
        mockSetLocalStorage,
      ]);

      const { result } = renderHook(() => useColorTheme());

      act(() => {
        result.current.resetColors();
      });

      expect(mockSetLocalStorage).toHaveBeenCalledWith(DEFAULT_COLOR_THEME);
      expect(mockApplyThemeColors).toHaveBeenCalledWith(DEFAULT_COLOR_THEME);
    });
  });
});
