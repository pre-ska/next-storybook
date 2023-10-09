import { Meta, StoryObj } from "@storybook/react";
import PrimaryLayout from "./PrimaryLayout";
import { mockPrimaryLayoutProps } from "./PrimaryLayout.mocks";

const meta = {
  title: "layouts/PrimaryLayout",
  component: PrimaryLayout,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PrimaryLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { ...mockPrimaryLayoutProps.base },
};
