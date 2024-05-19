import { ThemeUIProvider } from 'theme-ui'
import { BasicStackLayout } from '../../layouts'
import { Heading, Text } from '../../components'
import { baseThemeUiPreset as preset } from '../../utils/presets';
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
    navLinks: navLinks,
    mainContent: [
      <Heading>Alcatra sint kielbasa aliqua</Heading>,
      <Text>Minim cillum veniam, kielbasa in short loin picanha culpa ex dolore occaecat strip steak laboris. Tempor bacon non, flank short ribs sirloin veniam dolore pastrami velit fatback ad tenderloin burgdoggen. Corned beef beef ribs ad eiusmod ut commodo.</Text>
    ]
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
