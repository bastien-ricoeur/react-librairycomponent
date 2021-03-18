import { createUseStyles } from 'react-jss';

export default createUseStyles((theme: any) => ({
  root: {
    height: 20,
    width: '100%',
    backgroundColor: theme.gray,
    borderRadius: 50,
    margin: 50,
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
    fontWeight: 'bold',
    paddingRight: 5,
  },
}));
