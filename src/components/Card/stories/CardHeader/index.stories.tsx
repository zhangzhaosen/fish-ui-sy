/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { CardHeader } from "zhangzhaohong9-fish-ui-sy";
import Default from "./CardHeaderDefault.stories";

// ! raw code imports

import DefaultSource from "./CardHeaderDefault.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export default {
  title: "组件/Card/CardHeader",
  component: CardHeader,
} as Meta;

export { Default };
