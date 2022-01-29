/* eslint-disable react/react-in-jsx-scope */
import Test1 from "./Test1";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Test Sample/Test1",
  component: Test1,
} as ComponentMeta<typeof Test1>;

const Template: ComponentStory<typeof Test1> = (args) => <Test1 {...args} />;

export const TestPrimary = Template.bind({});
TestPrimary.args = { text: "this is Primary" };
TestPrimary.storyName = 'Primaryのボタン'

export const TestSecondary = Template.bind({});
TestSecondary.args = { text: "this is Secondary" };
TestSecondary.storyName = 'Secondaryのボタン'

