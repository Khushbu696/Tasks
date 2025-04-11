import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  return (
    <div style={styles.container}>
      <h2>Timer</h2>
      <div style={styles.time}>{seconds}s</div>
      <div>
        <button onClick={startTimer} style={styles.button} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} style={styles.button} disabled={!isRunning}>
          Stop
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  time: {
    fontSize: '48px',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Timer;
