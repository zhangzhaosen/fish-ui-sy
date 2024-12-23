import { MessageBarProps } from "./MessageBar.types";
import {
  CheckmarkCircleFilled,
  InfoFilled,
  WarningFilled,
  DismissCircleFilled,
} from "fish-ui-sy-react-icons";

export function getIntentIcon(intent: MessageBarProps["intent"]) {
  switch (intent) {
    case "info":
      return <InfoFilled />;
    case "warning":
      return <WarningFilled />;
    case "error":
      return <DismissCircleFilled />;
    case "success":
      return <CheckmarkCircleFilled />;

    default:
      return null;
  }
}
