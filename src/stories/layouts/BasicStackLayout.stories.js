import { ThemeUIProvider } from 'theme-ui'
import { BasicStackLayout } from '../../layouts'
import { baseThemeUiPreset as preset } from '../../utils/presets';
import { navLinks, textElements1 } from '../story-utils';

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
    navLinks: navLinks,
    mainContent: textElements1
  },
  decorators: [
    (Story) => (
      <ThemeUIProvider theme={preset}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeUIProvider>
    ),
  ],
};
