import React, { useState, useEffect } from 'react';

import styles from './Background.module.css';

const Background: React.FC = () => {
  const [, setTick] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTick(tick => tick + 1);
    }, 750);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className={styles.backgroundCode}>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className={styles.codeSnippet}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            fontSize: `${Math.random() * 1 + 0.5}rem`,
          }}
        >
          {`const ${['function', 'class', 'component', 'variable'][Math.floor(Math.random() * 4)]} = () => { ... }`}
        </div>
      ))}
    </div>
  );
};

export default Background;