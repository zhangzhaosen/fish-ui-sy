import { Checkbox } from 'zhangzhaohong9-fish-ui-sy';

const Disabled = () => (
  <>
    <Checkbox disabled label="Disabled" />
    <Checkbox disabled label="Disabled checked" checked />
    <Checkbox disabled label="Disabled mixed" checked="mixed" />
  </>
);

export default Disabled;
