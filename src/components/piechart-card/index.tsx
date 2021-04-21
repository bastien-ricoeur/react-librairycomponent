import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "react-jss";

import Theme from "../../style/itheme";

import useStyles from "./piedchart-card.style";

export interface ChartData {
  label: string;
  data: number;
}

export type PieChartCardProps = {
  data: Array<ChartData>;
  label: string;
  size?: "small" | "medium" | "large";
};

const PieChartCard: React.FC<PieChartCardProps> = ({
  data,
  label,
  size = "medium",
}) => {
  let labelFontSize = 0;

  switch (size) {
    case "small":
      labelFontSize = 12;
      break;
    case "medium":
      labelFontSize = 18;
      break;
    default:
      labelFontSize = 29;
      break;
  }

  const theme = useTheme<Theme>();

  const classes = useStyles({
    labelFontSize,
  });

  const chartData = {
    labels: data.map((obj: ChartData) => obj.label),
    datasets: [
      {
        label: label,
        data: data.map((obj: ChartData) => obj.data),
        backgroundColor: data.map((_obj: ChartData, index: number) => {
          switch (index % 4) {
            case 0:
              return theme.primary;
            case 1:
              return theme.second;
            case 2:
              return theme.lightPrimary;
            case 3:
              return theme.ligthSecond;
            default:
              return "";
          }
        }),
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    animation: {
      duration: 3000,
    },
  };

  return (
    <div className={classes.root}>
      <div className={classes.chartLabel}>{label}</div>
      <div className={classes.chartContainer}>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChartCard;
