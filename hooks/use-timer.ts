import { useRef, useState } from 'react';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export interface UseTimer {
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  isRunning: boolean;
  initialTimeLeft: number;
  timeHasPassed: number;
  timeLeftPretty: string;
}

const defaultInitialTimeLeft = 25 * 60;

const useTimer = (initialTimeLeft = defaultInitialTimeLeft): UseTimer => {
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isRunning, setIsRunning] = useState(false);
  const intervalReference = useRef(null);

  function startTimer() {
    if (intervalReference.current !== null) return;

    setIsRunning(true);
    intervalReference.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalReference.current === null) return;

    clearInterval(intervalReference.current);
    intervalReference.current = null;
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalReference.current);
    intervalReference.current = null;
    setTimeLeft(initialTimeLeft);
    setIsRunning(false);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  const timeLeftPretty = `${minutes}:${seconds}`;

  return {
    startTimer,
    stopTimer,
    resetTimer,
    isRunning,
    initialTimeLeft,
    timeHasPassed: initialTimeLeft - timeLeft,
    timeLeftPretty,
  };
};

export default useTimer;
