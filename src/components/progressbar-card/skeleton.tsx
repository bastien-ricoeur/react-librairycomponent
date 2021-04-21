import useStyles from "./progressbar-card.style";

export type ProgressBarSkeletonCardProps = {
  widthHeightIcon: number;
  iconFontSize: number;
  labelFontSize: number;
  contentWidth: string;
  primaryColor?: string;
  secondColor?: string;
  size: "small" | "medium" | "large";
};

const ProgressBarSkeletonCard = ({
  widthHeightIcon,
  iconFontSize,
  labelFontSize,
  contentWidth,
  primaryColor,
  secondColor,
  size
}: ProgressBarSkeletonCardProps) => {

  const classes = useStyles({
    widthHeightIcon,
    primaryColor,
    secondColor,
    iconFontSize,
    labelFontSize,
    contentWidth,
    size
  });

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={`${classes.iconContainer} ${classes.skeletonAnimation}`}></div>
        <div className={classes.cardContent}>
          <div className={`${classes.cardLabel} ${classes.skeletonAnimation} ${classes.cardLabelSkeleton}`}></div>
          {size !== "small" && (
            <div className={`${classes.cardDescritpion} ${classes.skeletonAnimation} ${classes.cardDescritpionSkeleton}`}></div>
          )}
          <div className={`${classes.skeletonAnimation} ${classes.cardProgressBarSkeleton}`}>
            ProgressBar
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarSkeletonCard;
