import { useEffect, useState } from "react";

import useStyles from "./progress-bar.style";

export type ProgressBarProps = {
  completed: number;
  bgcolor?: string;
};

const ProgressBar = ({ bgcolor, completed }: ProgressBarProps) => {
  const [currentCompleted, setCurrentCompleted] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentCompleted(completed), 500);
    return () => clearInterval(interval);
  }, [completed]);

  const classes = useStyles({ bgcolor, currentCompleted });

  return (
    <>
      {completed <= 100 && completed > 0 ? (
        <div className={classes.root}>
          <div className={classes.filler}>
            <span className={classes.label}>{`${currentCompleted || ""
              }%`}</span>
          </div>
        </div>
      ) : (
        "Une erreur est survenue"
      )}
    </>
  );
};

export default ProgressBar;
