import { ThemeUIProvider } from 'theme-ui'
import { Alert, Close } from '../components'
import { baseThemeUiPreset as preset } from '../utils/presets';

export default {
  title: 'Components/Alert',
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    children: ['Alert Text', <Close ml="auto" mr={-2} />]
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
