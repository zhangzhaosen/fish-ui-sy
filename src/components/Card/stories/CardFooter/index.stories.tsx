/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { CardFooter } from "zhangzhaohong9-fish-ui-sy";

import Default from "./CardFooterDefault.stories";

// ! raw code imports

import DefaultSource from "./CardFooterDefault.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export default {
  title: "组件/Card/CardFooter",
  component: CardFooter,
} as Meta;

export { Default };
