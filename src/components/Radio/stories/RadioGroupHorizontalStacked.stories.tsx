import { Label, Radio, RadioGroup } from "zhangzhaohong9-fish-ui-sy";

const HorizontalStacked = () => (
  <>
    <Label>Choose your favorite fruit:</Label>
    <RadioGroup layout="horizontal-stacked">
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </>
);

export default HorizontalStacked;
