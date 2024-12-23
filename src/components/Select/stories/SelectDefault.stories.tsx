import { Select, useId } from "zhangzhaohong9-fish-ui-sy";
import type { SelectProps } from "zhangzhaohong9-fish-ui-sy";

const Default = (props: SelectProps) => {
  const selectId = useId();

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select id={selectId} {...props}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};

export default Default;
