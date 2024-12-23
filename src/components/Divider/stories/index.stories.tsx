// @@ts-expect-error - required for ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Divider, FishProvider, tokens } from "zhangzhaohong9-fish-ui-sy";
import Default from "./DividerDefault.stories";
import Vertical from "./DividerVertical.stories";
import Appearance from "./DividerAppearance.stories";
import Inset from "./DividerInset.stories";
import AlignContent from "./DividerAlignContent.stories";
import CustomStyles from "./DividerCustomStyles.stories";

// ! raw code imports

import DefaultSource from "./DividerDefault.stories.tsx?raw";

import VerticalSource from "./DividerVertical.stories?raw";

import AppearanceSource from "./DividerAppearance.stories?raw";

import InsetSource from "./DividerInset.stories?raw";

import AlignContentSource from "./DividerAlignContent.stories?raw";

import CustomStylesSource from "./DividerCustomStyles.stories?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(Vertical as any).parameters = {
  docs: {
    description: {
      story: "竖直分割线。",
    },
    source: {
      code: VerticalSource,
    },
  },
};

(Appearance as any).parameters = {
  docs: {
    description: {
      story:
        "appearance 可取值 `brand`, `subtle`, 或者`strong` 。" +
        "没有指定的时候,取其默认值。",
    },
    source: {
      code: AppearanceSource,
    },
  },
};

(Inset as any).parameters = {
  docs: {
    description: {
      story: "分隔线可以使其线条与容器的边缘内部对齐。",
    },
    source: {
      code: InsetSource,
    },
  },
};

(AlignContent as any).parameters = {
  docs: {
    description: {
      story:
        "与分隔线相关联的label可以在分隔线的“start”、“center”或“end”对齐。",
    },
    source: {
      code: AlignContentSource,
    },
  },
};

(CustomStyles as any).parameters = {
  docs: {
    description: {
      story:
        "A divider can have custom styles applied to both the label and the line.",
    },
    source: {
      code: CustomStylesSource,
    },
  },
};

export default {
  title: "组件/Divider",
  component: Divider,
  // decorators: [
  //   (Story) => (
  //     <FishProvider>
  //       <div
  //         style={{
  //           padding: "48px 24px",
  //           backgroundColor: tokens.colorNeutralBackground2,
  //         }}
  //       >
  //         <Story />
  //       </div>
  //     </FishProvider>
  //   ),
  // ],
} as Meta;

export { Default, Vertical, Appearance, Inset, AlignContent, CustomStyles };
