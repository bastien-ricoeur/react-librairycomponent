import * as React from 'react';
import { IoPizza } from 'react-icons/io5';

import useStyles from './progressbar-card.style';

export type ProgressBarCardProps = {
  completed: number;
  label: string;
  total: number;
  iconColor?: string;
  iconBackground?: string;
  size?: 'small' | 'medium' | 'large';
};

const ProgressBarCard: React.FC<ProgressBarCardProps> = ({
  completed,
  label,
  total,
  iconColor,
  iconBackground,
  size = 'medium',
}) => {
  let width = 0;
  let height = 0;
  let widthHeightIcon = 0;
  let iconFontSize = 0;
  let labelFontSize = 0;
  let contentWidth = '';

  switch (size) {
    case 'small':
      width = 180;
      height = 80;
      widthHeightIcon = 30;
      iconFontSize = 20;
      labelFontSize = 12;
      contentWidth = 'calc(100% - 42px)';
      break;
    case 'medium':
      width = 360;
      height = 160;
      widthHeightIcon = 75;
      iconFontSize = 40;
      labelFontSize = 20;
      contentWidth = 'calc(100% - 90px)';
      break;
    default:
      width = 540;
      height = 240;
      widthHeightIcon = 120;
      iconFontSize = 70;
      labelFontSize = 29;
      contentWidth = 'calc(100% - 150px)';
      break;
  }

  const classes = useStyles({
    width,
    height,
    widthHeightIcon,
    iconColor,
    iconBackground,
    iconFontSize,
    labelFontSize,
    contentWidth,
  });

  return (
    <div className={classes.root}>
      {completed <= total ? (
        <div className={classes.card}>
          <div className={classes.iconContainer}>
            <IoPizza />
          </div>
          <div className={classes.cardContent}>
            <p className={classes.cardLabel}>{label}</p>
            <p>
              {completed} / {total}
            </p>
          </div>
        </div>
      ) : (
        'Une erreur est survenue'
      )}
    </div>
  );
};

export default ProgressBarCard;
