import { createUseStyles } from "react-jss";

export default createUseStyles((theme: any) => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    boxShadow:
      "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  card: {
    width: "86%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardError: {
    width: "100%",
    justifyContent: "center"
  },
  iconContainer: {
    width: (props: { widthHeightIcon: number }) => props.widthHeightIcon,
    height: (props: { widthHeightIcon: number }) => props.widthHeightIcon,
    color: (props: { primaryColor: string }) =>
      props.primaryColor || theme.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: (props: { iconFontSize: number }) => props.iconFontSize,
    backgroundColor: (props: { secondColor: string }) =>
      props.secondColor || theme.lightPrimary,
    borderRadius: "100%",
  },
  skeletonAnimation: {
    animation: "pulse 2s infinite ease-in-out",
  },
  cardContent: {
    width: (props: { contentWidth: string }) => props.contentWidth,
  },
  cardLabel: {
    fontSize: (props: { labelFontSize: number }) => props.labelFontSize,
  },
  cardLabelSkeleton: {
    height: (props: { labelFontSize: number }) => props.labelFontSize + 2,
    marginBottom: 8,
  },
  cardDescritpion: {
    color: "#bdbdbd",
    fontSize: (props: { labelFontSize: number }) => props.labelFontSize - 7,
    marginBottom: 3,
    marginLeft: 2,
  },
  cardDescritpionSkeleton: {
    height: (props: { labelFontSize: number }) => props.labelFontSize - 7,
    marginBottom: 8,
    marginLeft: 0,
    width: "30%",
  },
  cardProgressBarSkeleton: {
    height: (props: { labelFontSize: number }) => props.labelFontSize - 4,
    fontSize: 0,
  },
  errorIcon: {
    fontSize: (props: { iconFontSize: number }) => props.iconFontSize,
  },
  chartErrorSubContainer: {
    textAlign: "center",
    color: theme.error,
  }
}));
