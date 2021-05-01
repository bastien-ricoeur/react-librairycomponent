import { IoSadOutline } from "react-icons/io5";
import useStyles from "./groupedbarchart-card.style";

export type GroupedBarChartErrorCardProps = {
  labelFontSize: number;
  size: "small" | "medium" | "large";
  errorLabel?: string;
};

const GroupedBarChartErrorCard = ({
  labelFontSize,
  size,
  errorLabel = "Une erreur est survenue",
}: GroupedBarChartErrorCardProps) => {
  let iconFontSize = 0;

  switch (size) {
    case "small":
      iconFontSize = 40;
      break;
    case "medium":
      iconFontSize = 60;
      break;
    default:
      iconFontSize = 90;
      break;
  }

  const classes = useStyles({ labelFontSize, iconFontSize });

  return (
    <div className={classes.chardContainerSkeleton}>
      <div className={classes.chartErrorSubContainer}>
        <IoSadOutline className={classes.errorIcon} />
        <div>{errorLabel}</div>
      </div>
    </div>
  );
};

export default GroupedBarChartErrorCard;
