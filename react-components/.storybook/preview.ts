import type { Preview } from "@storybook/react";

import 'minireset.css';
import '../styles/global.css';
import "../styles/token.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
