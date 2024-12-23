import { makeStyles } from "@griffel/react";
import { Text } from "zhangzhaohong9-fish-ui-sy";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
  },
});

const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Text size={100}>100</Text>
      <Text size={200}>200</Text>
      <Text size={300}>300</Text>
      <Text size={400}>400</Text>
      <Text size={500}>500</Text>
      <Text size={600}>600</Text>
      <Text size={700}>700</Text>
      <Text size={800}>800</Text>
      <Text size={900}>900</Text>
      <Text size={1000}>1000</Text>
    </div>
  );
};

export default Size;
