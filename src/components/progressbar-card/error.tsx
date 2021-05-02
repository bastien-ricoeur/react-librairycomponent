import { IoSadOutline } from "react-icons/io5";
import useStyles from "./progressbar-card.style";

export type ProgressBarErrorCardProps = {
  labelFontSize: number;
  size: "small" | "medium" | "large";
  errorLabel?: string;
};

const ProgressBarErrorCard = ({
  labelFontSize,
  size,
  errorLabel = "Une erreur est survenue",
}: ProgressBarErrorCardProps) => {
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
    <div className={classes.root}>
      <div className={`${classes.card} ${classes.cardError}`}>
        <div className={classes.chartErrorSubContainer}>
          <IoSadOutline className={classes.errorIcon} />
          <div>{errorLabel}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarErrorCard;
