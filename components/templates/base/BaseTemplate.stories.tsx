import type { Meta, StoryObj } from "@storybook/react";

import BaseTemplate from "./BaseTemplate";
import { mockBaseTemplateProps } from "./BaseTemplate.mocks";

const meta = {
  title: "templates/BaseTemplate",
  component: BaseTemplate,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { ...mockBaseTemplateProps.base },
};
