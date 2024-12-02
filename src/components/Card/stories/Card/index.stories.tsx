/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Card } from "zhangzhaohong9-fish-ui-sy";

import Default from "./CardDefault.stories";
import CardAppearance from "./CardAppearance.stories";
import CardOrientation from "./CardOrientation.stories";
import CardSize from "./CardSize.stories";

// ! raw code imports

import DefaultSource from "./CardDefault.stories.tsx?raw";

import CardAppearanceSource from "./CardAppearance.stories.tsx?raw";

import CardOrientationSource from "./CardOrientation.stories.tsx?raw";

import CardSizeSource from "./CardSize.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(CardAppearance as any).parameters = {
  docs: {
    source: {
      code: CardAppearanceSource,
    },
  },
};

(CardOrientation as any).parameters = {
  docs: {
    source: {
      code: CardOrientationSource,
    },
  },
};

(CardSize as any).parameters = {
  docs: {
    source: {
      code: CardSizeSource,
    },
  },
};

export default {
  title: "组件/Card/Card",
  component: Card,
} as Meta;

export { Default, CardOrientation, CardSize, CardAppearance };
