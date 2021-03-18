import React, { useEffect, useState } from 'react';

import useStyles from './progress-bar.style';

export type ProgressBarProps = {
  completed: number;
  bgcolor?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ bgcolor, completed }) => {
  const [currentCompleted, setCurrentCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCurrentCompleted(completed), 1000);
  }, []);

  const classes = useStyles({ bgcolor, currentCompleted });

  return (
    <div>
      {completed <= 100 ? (
        <div className={classes.root}>
          <div className={classes.filler}>
            <span className={classes.label}>{`${currentCompleted}%`}</span>
          </div>
        </div>
      ) : (
        'Une erreur est survenue'
      )}
    </div>
  );
};

export default ProgressBar;
