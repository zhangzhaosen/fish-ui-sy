/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Text } from "zhangzhaohong9-fish-ui-sy";
import Default from "./Default.stories";
import Presets from "./TextPresets.stories";
import Font from "./TextFont.stories";
import Size from "./TextSize.stories";
import Weight from "./TextWeight.stories";
import Italic from "./TextItalic.stories";
import Underline from "./TextUnderline.stories";
import StrikeThrough from "./TextStrikeThrough.stories";
import Truncate from "./TextTruncate.stories";
import Alignment from "./TextAlignment.stories";
// ! raw code imports

import DefaultSource from "./Default.stories?raw";

import PresetsSource from "./TextPresets.stories?raw";

import FontSource from "./TextFont.stories?raw";

import SizeSource from "./TextSize.stories?raw";

import WeightSource from "./TextWeight.stories?raw";

import ItalicSource from "./TextItalic.stories?raw";

import UnderlineSource from "./TextUnderline.stories?raw";

import StrikeThroughSource from "./TextStrikeThrough.stories?raw";

import TruncateSource from "./TextTruncate.stories?raw";

import AlignmentSource from "./TextAlignment.stories?raw";
import { handleParameters } from "zhangzhaohong9-fish-ui-sy";

export default {
  title: "组件/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "文本，可以帮助你统一项目中的文本样式。",
      },
      source: {
        language: "tsx",
      },
    },
  },
} as Meta;

const arr1 = [
  Default,
  Presets,
  Font,
  Size,
  Weight,
  Italic,
  Underline,
  StrikeThrough,
  Truncate,
  Alignment,
];
handleParameters(arr1, [
  DefaultSource,
  PresetsSource,
  FontSource,
  SizeSource,
  WeightSource,
  ItalicSource,
  UnderlineSource,
  StrikeThroughSource,
  TruncateSource,
  AlignmentSource,
]);

export {
  Default,
  Presets,
  Font,
  Size,
  Weight,
  Italic,
  Underline,
  StrikeThrough,
  Truncate,
  Alignment,
};
