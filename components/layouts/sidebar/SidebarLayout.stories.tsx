import { Meta, StoryObj } from "@storybook/react";
import SidebarLayout from "./SidebarLayout";
import { mockSidebarLayoutProps } from "./SidebarLayout.mocks";

const meta = {
  title: "layouts/SidebarLayout",
  component: SidebarLayout,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SidebarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { ...mockSidebarLayoutProps.base },
};
