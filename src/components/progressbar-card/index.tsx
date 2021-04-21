import {
  IoCheckmarkDoneCircleSharp,
  IoDocumentText,
  IoLogoLinkedin,
  IoPizza,
} from "react-icons/io5";
import { ReactElement } from "react";

import '../../style/base.css';

import ProgressBar from "../progress-bar";
import useStyles from "./progressbar-card.style";
import ProgressBarSkeletonCard from "./skeleton";

export type ProgressBarCardProps = {
  completed: number;
  label: string;
  total: number;
  isLoading?: boolean;
  icon?: "pizza" | "linkedin" | "checkmark" | "document";
  primaryColor?: string;
  secondColor?: string;
  size?: "small" | "medium" | "large";
};

const ProgressBarCard = ({
  completed,
  label,
  total,
  isLoading = false,
  icon = "pizza",
  primaryColor,
  secondColor,
  size = "medium",
}: ProgressBarCardProps) => {
  let widthHeightIcon = 0;
  let iconFontSize = 0;
  let labelFontSize = 0;
  let contentWidth = "";

  switch (size) {
    case "small":
      widthHeightIcon = 30;
      iconFontSize = 20;
      labelFontSize = 12;
      contentWidth = "calc(100% - 42px)";
      break;
    case "medium":
      widthHeightIcon = 75;
      iconFontSize = 40;
      labelFontSize = 18;
      contentWidth = "calc(100% - 90px)";
      break;
    default:
      widthHeightIcon = 120;
      iconFontSize = 70;
      labelFontSize = 29;
      contentWidth = "calc(100% - 150px)";
      break;
  }

  const classes = useStyles({
    widthHeightIcon,
    primaryColor,
    secondColor,
    iconFontSize,
    labelFontSize,
    contentWidth,
  });

  const renderIcon = (
    iconName: "pizza" | "linkedin" | "checkmark" | "document"
  ): ReactElement => {
    switch (iconName) {
      case "pizza":
        return <IoPizza />;
      case "linkedin":
        return <IoLogoLinkedin />;
      case "checkmark":
        return <IoCheckmarkDoneCircleSharp />;
      case "document":
        return <IoDocumentText />;
      default:
        return <div>No match</div>;
    }
  };

  return (
    <div className={classes.root}>
      {!isLoading && completed <= total ? (
        <div className={classes.card}>
          <div className={classes.iconContainer}>{renderIcon(icon)}</div>
          <div className={classes.cardContent}>
            <div className={classes.cardLabel}>{label}</div>
            {size !== "small" && (
              <div className={classes.cardDescritpion}>
                {completed} / {total}
              </div>
            )}
            <div>
              <ProgressBar
                completed={Math.floor((completed / total) * 100)}
                bgcolor={primaryColor}
              />
            </div>
          </div>
        </div>
      ) : (
        <ProgressBarSkeletonCard widthHeightIcon={widthHeightIcon} iconFontSize={iconFontSize} labelFontSize={labelFontSize} contentWidth={contentWidth} primaryColor={primaryColor} secondColor={secondColor} size={size} />
      )}
    </div>
  );
};

export default ProgressBarCard;
