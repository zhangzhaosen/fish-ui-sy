/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Checkbox, tokens } from 'zhangzhaohong9-fish-ui-sy';

import Default from "./CheckboxDefault.stories";
import Checked from "./CheckboxChecked.stories";
import Mixed from "./CheckboxMixed.stories";
import Disabled from "./CheckboxDisabled.stories";
import Large from "./CheckboxLarge.stories";
import LabelBefore from "./CheckboxLabelBefore.stories";
import LabelWrapping from "./CheckboxLabelWrapping.stories";
import Required from "./CheckboxRequired.stories";

// ! raw code imports

import DefaultSource from "./CheckboxDefault.stories.tsx?raw";

import CheckedSource from "./CheckboxChecked.stories.tsx?raw";

import DisabledSource from "./CheckboxDisabled.stories.tsx?raw";

import MixedSource from "./CheckboxMixed.stories.tsx?raw";

import LargeSource from "./CheckboxLarge.stories.tsx?raw";

import LabelBeforeSource from "./CheckboxLabelBefore.stories.tsx?raw";

import LabelWrappingSource from "./CheckboxLabelWrapping.stories.tsx?raw";

import RequiredSource from "./CheckboxRequired.stories.tsx?raw";

const meta: Meta = {
  title: "组件/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: tokens.spacingHorizontalM,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(Checked as any).parameters = {
  docs: {
    description: {
      story:
        "A checkbox can be initially checked using `defaultChecked`, or controlled via the `checked` property.",
    },
    source: {
      code: CheckedSource,
    },
  },
};

(Mixed as any).parameters = {
  docs: {
    description: {
      story:
        'A checkbox can be initially mixed (also known as indeterminate) using `defaultChecked="mixed"`, ' +
        'or controlled via `checked="mixed"`.<br />' +
        "In this example, the mixed state is used when a group of options has differing values.",
    },
    source: {
      code: MixedSource,
    },
  },
};

(Large as any).parameters = {
  docs: {
    description: {
      story: "A checkbox can be large in size.",
    },
    source: {
      code: LargeSource,
    },
  },
};

(Disabled as any).parameters = {
  docs: {
    description: {
      story: "An checkbox can be disabled.",
    },
    source: {
      code: DisabledSource,
    },
  },
};

(LabelBefore as any).parameters = {
  docs: {
    description: {
      story: "The label can be placed before the checkbox.",
    },
    source: {
      code: LabelBeforeSource,
    },
  },
};

(LabelWrapping as any).parameters = {
  docs: {
    description: {
      story:
        "The label will wrap if it is wider than the available space. The checkbox indicator will stay aligned " +
        "to the first line of text.",
    },
    source: {
      code: LabelWrappingSource,
    },
  },
};

(Required as any).parameters = {
  docs: {
    description: {
      story:
        "When a checkbox is marked as `required`, its label also gets the required styling.",
    },
    source: {
      code: RequiredSource,
    },
  },
};

export {
  Default,
  Checked,
  Mixed,
  Disabled,
  Large,
  LabelBefore,
  LabelWrapping,
  Required,
};
