/* eslint-disable react/react-in-jsx-scope */
import Post from "./Post";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Test Sample/Post",
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const TestPrimary = Template.bind({});
TestPrimary.args = { title: "this is Primary" };
TestPrimary.storyName = 'Primaryのボタン'

export const TestSecondary = Template.bind({});
TestSecondary.args = { title: "this is Secondary" };
TestSecondary.storyName = 'Secondaryのボタン'

