import { createUseStyles } from 'react-jss';

export default createUseStyles((theme: any) => ({
  root: {
    height: 10,
    width: '100%',
    backgroundColor: theme.gray,
    borderRadius: 50,
    overflow: 'hidden',
  },
  filler: {
    height: '100%',
    width: (props: { currentCompleted: number }) =>
      `${props.currentCompleted}%`,
    backgroundColor: (props: { bgcolor: string }) =>
      props.bgcolor || theme.primary,
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  label: {
    color: 'white',
    paddingRight: 5,
    fontSize: 10,
  },
}));
