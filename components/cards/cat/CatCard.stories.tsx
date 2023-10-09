import type { Meta, StoryObj } from "@storybook/react";

import CatCard from "./CatCard";
import { mockCatCardProps } from "./CatCard.mocks";

const meta = {
  title: "cards/CatCard",
  component: CatCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCard: Story = {
  args: { ...mockCatCardProps.base },
};
