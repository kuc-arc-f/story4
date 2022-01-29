/* eslint-disable react/react-in-jsx-scope */
import PostList from "./PostList";
import { ComponentStory, ComponentMeta } from "@storybook/react";


// DATA
const DATA  = [
  {id: 1, title: 'title_1'},
  {id: 2, title: 'title_2'},
  {id: 3, title: 'title_3'},
];
//
export default {
  title: "Test Sample/PostList",
  component: PostList,
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = (args) => <PostList {...args} />;

export const TestPrimary = Template.bind({});
//TestPrimary.args = { text: "this is Primary" };
TestPrimary.args = { items: DATA };
TestPrimary.storyName = 'Default-mode'
/*
export const TestSecondary = Template.bind({});
TestSecondary.args = { text: "this is Secondary" };
TestSecondary.storyName = 'Secondaryのボタン'
*/

