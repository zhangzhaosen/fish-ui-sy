/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Flex } from "zhangzhaohong9-fish-ui-sy";

import Default from "./FlexDefault.stories";
import Align from "./FlexAlign.stories";
import Gap from "./FlexGap.stories";
import Wrap from "./FlexWrap.stories";
import FlexGroup from "./FlexGroup.stories";

// ! raw code imports

import DefaultSource from "./FlexDefault.stories.tsx?raw";

import AlignSource from "./FlexAlign.stories.tsx?raw";

import GapSource from "./FlexGap.stories.tsx?raw";

import WrapSource from "./FlexWrap.stories.tsx?raw";

import FlexGroupSource from "./FlexGroup.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Flex",
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: "A flex layout container for alignment.",
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

(Align as any).parameters = {
  docs: {
    source: {
      code: AlignSource,
    },
  },
};

(Gap as any).parameters = {
  docs: {
    source: {
      code: GapSource,
    },
  },
};

(Wrap as any).parameters = {
  docs: {
    source: {
      code: WrapSource,
    },
  },
};

(FlexGroup as any).parameters = {
  docs: {
    source: {
      code: FlexGroupSource,
    },
  },
};

export { Default, Align, Gap, Wrap, FlexGroup };
