import type { Meta, StoryObj } from "@storybook/react";

import SearchResult from "./SearchResult";
import { mockSearchResultProps } from "./SearchResult.mocks";

const meta = {
  title: "utility/SearchResult",
  component: SearchResult,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SearchResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { ...mockSearchResultProps.base },
};
