import type { Meta, StoryObj } from "@storybook/react";

import Search from "./Search";
import { mockSearchProps } from "./Search.mocks";

const meta = {
  title: "utility/Search",
  component: Search,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { ...mockSearchProps.base },
};
