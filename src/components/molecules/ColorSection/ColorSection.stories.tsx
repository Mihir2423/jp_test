// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta } from "@storybook/react";
import { useState } from "react";
import ColorSection, { ColorSectionProps } from "./ColorSection";

const meta: Meta<typeof ColorSection> = {
  title: "Molecules/ColorSection",
  component: ColorSection,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;

export const Default = {
  render: (args: ColorSectionProps) => {
    const [colors, setColors] = useState([
      { key: "primary", label: "Primary Color", value: "#3b82f6" },
      { key: "secondary", label: "Secondary Color", value: "#10b981" },
      { key: "accent", label: "Accent Color", value: "#f59e0b" },
    ]);

    const handleColorChange = (key: string, value: string) => {
      setColors(
        colors.map((color) => (color.key === key ? { ...color, value } : color))
      );
    };

    return (
      <ColorSection
        {...args}
        colors={colors}
        onColorChange={handleColorChange}
      />
    );
  },
  args: {
    title: "Theme Colors",
  },
};

export const CustomInitialColors = {
  render: (args: ColorSectionProps) => {
    const [colors, setColors] = useState([
      { key: "background", label: "Background", value: "#1e293b" },
      { key: "text", label: "Text Color", value: "#f8fafc" },
    ]);

    const handleColorChange = (key: string, value: string) => {
      setColors(
        colors.map((color) => (color.key === key ? { ...color, value } : color))
      );
    };

    return (
      <ColorSection
        {...args}
        colors={colors}
        onColorChange={handleColorChange}
      />
    );
  },
  args: {
    title: "Dark Theme Colors",
  },
};
