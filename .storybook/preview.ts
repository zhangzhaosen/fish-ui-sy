import type { Preview } from "@storybook/react";
import {useExportToSandboxButton} from '../docs/sandbox/decorators/with-export-to-sandbox-button'
export const decorators = [withFishProvider,  useExportToSandboxButton]
import '../docs/sandbox/styles.css'
import { withFishProvider } from "../docs/src/withFishProvider";

import { FishDocsPage } from "../docs/src/FishDocsPage.stories";
import { THEME_ID } from "../docs/theme-addon/constants";

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    exportToSandbox: {
      requiredDependencies:{
        react: '^18', 
        'react-dom': '^18'
      }
    }, 
    docs:{
      toc:{
        title: 'Contents', 
      }, 
      page: FishDocsPage, 
      canvas: {
        withToolbar: false
      }
    }
  },
};

export const initialGlobals = {[THEME_ID]: undefined}

export default preview;
