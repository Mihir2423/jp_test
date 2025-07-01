// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from "@storybook/react";
import SectionHeading from "./SectionHeading";

const meta: Meta<typeof SectionHeading> = {
  title: "Atoms/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeading>;

export const Default: Story = {
  args: {
    children: "Section Heading",
  },
};

export const CustomClass: Story = {
  args: {
    children: "Custom Styled Section Heading",
    className: "text-white font-bold bg-black px-4 pt-2",
  },
};
