import { createUseStyles } from 'react-jss';

export default createUseStyles((theme: any) => ({
  root: {
    width: (props: { width: number }) => props.width,
    height: (props: { height: number }) => props.height,
    borderRadius: 5,
    boxShadow:
      'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: (props: { widthHeightIcon: number }) => props.widthHeightIcon,
    height: (props: { widthHeightIcon: number }) => props.widthHeightIcon,
    color: (props: { iconColor: string }) => props.iconColor || theme.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: (props: { iconFontSize: number }) => props.iconFontSize,
    backgroundColor: (props: { iconBackground: string }) =>
      props.iconBackground || theme.ligthPrimary,
    borderRadius: '100%',
  },
  cardContent: {
    width: (props: { contentWidth: string }) => props.contentWidth,
  },
  cardLabel: {
    fontSize: (props: { labelFontSize: number }) => props.labelFontSize,
  },
}));
