import { useState, useRef, useEffect } from "react";
import s from "./Timer.module.css";

export const getTime = (date) =>
  date ? new Date(date).toLocaleTimeString() : new Date().toLocaleTimeString();

const Timer = () => {
  const [time, setTime] = useState(getTime());

  const ref = useRef(null);

  const startTimer = () => {
    ref.current = setInterval(() => {
      setTime(getTime());
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(ref.current);
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <>
      <p className={s.timer}>{time}</p>
    </>
  );
};

export default Timer;
