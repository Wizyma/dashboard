import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Layout } from ".";

export default {
  title: "board/Layout",
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const WithHeaderContent = Template.bind({});
WithHeaderContent.args = {
  menu: [
    {
      label: "Menu 1",
      Icon: InboxIcon,
    },
  ],
};

export const Full = Template.bind({});
Full.args = {
  headerContent: <div>Hello World</div>,
  menu: [
    {
      label: "Menu 1",
      Icon: InboxIcon,
    },
  ],
  children: <div>Hello</div>,
};
