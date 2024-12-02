import type { RadioGroupProps } from "zhangzhaohong9-fish-ui-sy";
import { Label, Radio, RadioGroup } from "zhangzhaohong9-fish-ui-sy";

const Default = (props: Partial<RadioGroupProps>) => {

  return <>
    <Label>Choose your favorite fruit:</Label>
    <RadioGroup {...props}>
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </>
};

export default Default;
