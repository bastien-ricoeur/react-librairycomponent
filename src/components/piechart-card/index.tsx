import { Doughnut } from "react-chartjs-2";
import Theme from "../../style/itheme";
import useStyles from "./piedchart-card.style";
import { useTheme } from "react-jss";
import "../../style/base.css";

import PieChartSkeletonCard from './skeleton';
import PieChartErrorCard from './error';

export interface ChartData {
  label: string;
  data: number;
}

export type PieChartCardProps = {
  data?: Array<ChartData>;
  label?: string;
  loading?: boolean;
  error?: boolean;
  errorLabel?: string;
  size?: "small" | "medium" | "large";
};

const PieChartCard = ({ data = [], label, loading = false, error = false, errorLabel, size = "medium" }: PieChartCardProps) => {
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
      duration: 3000
    },
  };

  return (
    <div className={classes.root}>
      {!loading ? (
        <>
          {!error ? (
            <>
              <div className={classes.chartLabel}>{label}</div>
              <div className={classes.chartContainer}>
                <Doughnut data={chartData} options={options} />
              </div>
            </>
          ) : (
            <PieChartErrorCard labelFontSize={labelFontSize} size={size} errorLabel={errorLabel} />
          )}
        </>
      ) : (
        <PieChartSkeletonCard labelFontSize={labelFontSize} />
      )}

    </div>
  );
};

export default PieChartCard;
