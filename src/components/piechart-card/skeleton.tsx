import { useLayoutEffect, useRef, useState } from "react";
import useStyles from "./piedchart-card.style";

export type PieChartSkeletonCardProps = {
  labelFontSize: number;
};

const PieChartSkeletonCard = ({
  labelFontSize,
}: PieChartSkeletonCardProps) => {

  const [width, setWidth] = useState(0);
  const [widthOfCenter, setWidthOfCenter] = useState(0);
  const [paddingOfCenter, setPaddingOfCenter] = useState(0);

  const classes = useStyles({
    labelFontSize,
  });

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {

      const minValue = (ref.current.offsetWidth < ref.current.offsetHeight) ? ref.current.offsetWidth : ref.current.offsetHeight;
      const newWidth = minValue - (minValue * 20 / 100);
      const newWidthOfCenter = newWidth - (newWidth * 50 / 100);
      const newPaddingOfCenter = (newWidth - newWidthOfCenter) / 2;

      setWidth(newWidth);
      setWidthOfCenter(newWidthOfCenter);
      setPaddingOfCenter(newPaddingOfCenter);
    }
  })

  return (
    <>
      <div className={`${classes.chartLabel} ${classes.skeletonAnimation} ${classes.chartLabelSkeleton}`}></div>
      <div ref={ref} className={`${classes.chartContainer} ${classes.chardContainerSkeleton}`}>
        <div className={`${classes.chartSkeleton} `} style={{ width: width, height: width }}>
          <div className={`${classes.skeletonAnimation} ${classes.firstChartMask}`}></div>
          <div className={classes.secondChartMask} style={{ width: widthOfCenter, height: widthOfCenter, top: paddingOfCenter, left: paddingOfCenter }}></div>
        </div>
      </div>
    </>

  );
};

export default PieChartSkeletonCard;
