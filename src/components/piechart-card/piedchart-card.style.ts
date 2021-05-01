import { createUseStyles } from "react-jss";

export default createUseStyles((theme: any) => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    boxShadow:
      "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
    backgroundColor: "#ffffff",
    padding: 10,
  },
  chartLabel: {
    fontSize: (props: { labelFontSize: number }) => props.labelFontSize,
    marginLeft: 5,
  },
  chartContainer: {
    height: "calc(100% - 30px)",
  },
  chardContainerSkeleton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  skeletonAnimation: {
    animation: "pulse 2s infinite ease-in-out",
  },
  chartLabelSkeleton: {
    height: (props: { labelFontSize: number }) => props.labelFontSize + 2,
    marginBottom: 8,
    width: "85%",
  },
  chartSkeleton: {
    position: "relative",
  },
  firstChartMask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  secondChartMask: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },
  errorIcon: {
    fontSize: (props: { iconFontSize: number }) => props.iconFontSize,
  },
  chartErrorSubContainer: {
    textAlign: "center",
    color: theme.error,
  },
}));
