import { CompoundButton } from "zhangzhaohong9-fish-ui-sy";
import { CalendarMonthRegular } from "fish-ui-sy-react-icons";
import type { CompoundButtonProps } from "zhangzhaohong9-fish-ui-sy";

const Default = (props: CompoundButtonProps) => (
  <CompoundButton
    icon={<CalendarMonthRegular />}
    secondaryContent="Secondary content"
    {...props}
  >
    Example
  </CompoundButton>
);

export default Default;
