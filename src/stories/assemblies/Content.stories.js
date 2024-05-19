import { ThemeUIProvider } from 'theme-ui'
import { Content } from '../../assemblies'
import { baseThemeUiPreset as preset } from '../../utils/presets';
import { textElements1 } from '../story-utils';

export default {
  title: 'Assemblies/Content',
  component: Content,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    children: textElements1
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
