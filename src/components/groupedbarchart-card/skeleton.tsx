import useStyles from "./groupedbarchart-card.style";

export type GroupedBarChartSkeletonCardProps = {
  labelFontSize: number;
};

const GroupedBarChartSkeletonCard = ({
  labelFontSize,
}: GroupedBarChartSkeletonCardProps) => {
  const classes = useStyles({
    labelFontSize,
  });

  return (
    <>
      <div
        className={`${classes.chartLabel} ${classes.skeletonAnimation} ${classes.chartLabelSkeleton}`}
      ></div>
      <div
        className={`${classes.chardContainerSkeleton} ${classes.skeletonBorderAnimation}`}
      >
        <div className={classes.chartGroup}>
          <div
            style={{ height: "40%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "20%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "70%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "49%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
        </div>

        <div className={classes.chartGroup}>
          <div
            style={{ height: "22%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "78%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "47%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "54%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
        </div>

        <div className={classes.chartGroup}>
          <div
            style={{ height: "47%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "36%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "22%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "80%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
        </div>

        <div className={classes.chartGroup}>
          <div
            style={{ height: "18%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "37%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "74%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
          <div
            style={{ height: "66%" }}
            className={`${classes.barChart} ${classes.skeletonAnimation}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default GroupedBarChartSkeletonCard;
