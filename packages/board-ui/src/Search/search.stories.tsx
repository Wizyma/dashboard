import Visibility from "@mui/icons-material/Visibility";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { BoardSearchInput, BoardSearchInputProps } from ".";

export default {
  title: "board/Search",
  component: BoardSearchInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BoardSearchInput>;

const Template: ComponentStory<typeof BoardSearchInput> = (args) => (
  <BoardSearchInput {...args} />
);

export const Outlined: ComponentStory<
  (props: BoardSearchInputProps) => JSX.Element
> = Template.bind({});
Outlined.args = {
  label: "Icon",
  variant: "outlined",
  iconEnd: <Visibility />,
};
