import PresetsDemo from '../components/PresetsDemo';

export default {
  title: 'ThemeUiPresetsDemo',
  component: PresetsDemo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    // pitch: 0,
    // stringId: 0,
    // stringPos: 0,
    // isVisible: true,
    // highlightModes: [],
  },
};
