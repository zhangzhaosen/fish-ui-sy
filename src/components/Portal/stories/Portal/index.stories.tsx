/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Portal } from "zhangzhaohong9-fish-ui-sy";

import Default from "./PortalDefault.stories";

// ! raw code imports
import DefaultSource from "./PortalDefault.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Portal/Portal",
  component: Portal,
  parameters: {
    docs: {
      description: {
        component:
          "A portal renders content outside of a DOM tree, at the end of the document.",
      },
    },
  },
};

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };
