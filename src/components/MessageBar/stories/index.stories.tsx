/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import {
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarGroup,
  MessageBarTitle,
} from "zhangzhaohong9-fish-ui-sy";

import Default from "./Default.stories";
import Actions from "./Actions.stories";
import Shape from "./Shape.stories";
import Reflow from "./Reflow.stories";
import Dismiss from "./Dismiss.stories";
import Animation from "./Animation.stories";
import ManualLayout from "./ManualLayout.stories";

// ! raw code imports

import DefaultSource from "./Default.stories.tsx?raw";

import ActionsSource from "./Actions.stories.tsx?raw";

import ShapeSource from "./Shape.stories.tsx?raw";

import ReflowSource from "./Reflow.stories.tsx?raw";

import DismissSource from "./Dismiss.stories.tsx?raw";

import AnimationSource from "./Animation.stories.tsx?raw";

import ManualLayoutSource from "./ManualLayout.stories.tsx?raw";

const meta: Meta = {
  title: "组件/MessageBar",
  component: MessageBar,
  subcomponents: {
    MessageBarGroup,
    MessageBarBody,
    MessageBarTitle,
    MessageBarActions,
  } as any,
  parameters: {
    docs: {
      description: {
        component: "Add specific text or patterns to the page.",
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

(Shape as any).parameters = {
  docs: {
    source: {
      code: ShapeSource,
    },
  },
};

(Actions as any).parameters = {
  docs: {
    source: {
      code: ActionsSource,
    },
  },
};

(Dismiss as any).parameters = {
  docs: {
    source: {
      code: DismissSource,
    },
  },
};

(Animation as any).parameters = {
  docs: {
    source: {
      code: AnimationSource,
    },
  },
};

(Reflow as any).parameters = {
  docs: {
    source: {
      code: ReflowSource,
    },
  },
};

(ManualLayout as any).parameters = {
  docs: {
    source: {
      code: ManualLayoutSource,
    },
  },
};

export { Default, Shape, Actions, Dismiss, Animation, Reflow, ManualLayout };
