import { ThemeUIProvider } from 'theme-ui'
import { Text } from '../../components'
import { baseThemeUiPreset as preset } from '../../utils/presets';

export default {
  title: 'Components/Text',
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    children: 'Bacon ipsum dolor amet shank flank tri-tip dolore consectetur. Exercitation biltong chicken, hamburger nulla bresaola anim pork loin bacon pig magna pancetta.'
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

export const Caps = {
  args: {
    children: 'Bacon ipsum dolor amet shank flank tri-tip dolore consectetur. Exercitation biltong chicken, hamburger nulla bresaola anim pork loin bacon pig magna pancetta.',
    variant: 'caps'
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
