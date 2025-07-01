// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import ColorInput from "./ColorInput";

const meta: Meta<typeof ColorInput> = {
  title: "Atoms/ColorInput",
  component: ColorInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "color" },
    onChange: { action: "colorChanged" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof ColorInput>;

export const Default: Story = {
  args: {
    label: "Background Color",
    value: "#3b82f6",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    value: "#cccccc",
    disabled: true,
  },
};
