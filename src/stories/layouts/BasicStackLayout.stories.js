import { BasicStackLayout } from '../../layouts/BasicStackLayout'
import { navLinks } from '../story-utils';

export default {
  title: 'Layouts/Basic Stack Layout',
  component: BasicStackLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    navLinks: navLinks
  },
};
