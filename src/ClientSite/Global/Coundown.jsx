import React, { useEffect, useState } from "react";

const Countdown = () => {
  const today = new Date();
  const targetDate = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000); // Adding 10 days

  const countDownDate = Math.floor(targetDate.getTime() / 1000);

  // Calculate the initial countDown value correctly
  const initialCountDown = Math.max(0, countDownDate - Math.floor(new Date().getTime() / 1000));

  const [countDown, setCountDown] = useState(initialCountDown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(prevCountDown => Math.max(0, prevCountDown - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Remove the dependency array to prevent unnecessary re-renders

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (60 * 60 * 24));
  const hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countDown % (60 * 60)) / 60);
  const seconds = Math.floor(countDown % 60);

  return (
    <>
      <span className="hour">
        <b className="number">{days}</b><br />
        <b className="text">Days</b>
      </span>
      <span className="hour">
        <b className="number">{hours}</b><br />
        <b className="text">Hours</b>
      </span>
      <span className="hour">
        <b className="number">{minutes}</b><br />
        <b className="text">Mins</b>
      </span>
      <span className="hour">
        <b className="number text-danger">{seconds}</b><br />
        <b className="text">Secs</b>
      </span>
    </>
  );
};

export { Countdown };
