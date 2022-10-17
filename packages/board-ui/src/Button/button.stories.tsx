import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { BoardButton } from ".";

export default {
  title: "board/Button",
  component: BoardButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BoardButton>;

const Template: ComponentStory<typeof BoardButton> = (args) => (
  <BoardButton {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  label: "Contained",
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined",
  variant: "outlined",
};
