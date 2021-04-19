import { createUseStyles } from 'react-jss';

export default createUseStyles((_theme: any) => ({
  root: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    boxShadow:
      'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  chartLabel: {
    fontSize: (props: { labelFontSize: number }) => props.labelFontSize,
    marginLeft: 5,
  },
  chartContainer: {
    height: 'calc(100% - 30px)',
  },
}));
