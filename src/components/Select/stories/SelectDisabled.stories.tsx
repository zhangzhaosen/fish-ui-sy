import { Select, useId } from "zhangzhaohong9-fish-ui-sy";

export const Disabled = () => {
  const selectId = useId();

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select disabled id={selectId}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};

export default Disabled;
