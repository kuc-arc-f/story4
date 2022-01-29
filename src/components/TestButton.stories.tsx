/* eslint-disable react/react-in-jsx-scope */
import TestButton from "./TestButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Test Sample/TestButton",
  component: TestButton,
} as ComponentMeta<typeof TestButton>;

const Template: ComponentStory<typeof TestButton> = (args) => <TestButton {...args} />;

export const TestPrimary = Template.bind({});
TestPrimary.args = { text: "this is Primary" };
TestPrimary.storyName = 'Primaryのボタン'

export const TestSecondary = Template.bind({});
TestSecondary.args = { text: "this is Secondary" };
TestSecondary.storyName = 'Secondaryのボタン'

