import { makeStyles, CompoundButton } from "zhangzhaohong9-fish-ui-sy";
import { CalendarMonthRegular } from "fish-ui-sy-react-icons";

const useStyles = makeStyles({
  wrapper: {
    alignItems: "center",
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

const Icon = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <CompoundButton
        secondaryContent="Secondary content"
        icon={<CalendarMonthRegular />}
      >
        With calendar icon before contents
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        icon={<CalendarMonthRegular />}
        iconPosition="after"
      >
        With calendar icon after contents
      </CompoundButton>
    </div>
  );
};

export default Icon;
