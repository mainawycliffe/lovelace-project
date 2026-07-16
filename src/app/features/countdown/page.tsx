"use client";
import React, { useState, useEffect } from "react";

function Countdown() {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date.getTime();
  });

  const [timeLeft, setTimeLeft] = useState(() => targetDate - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(id);
  }, [targetDate]);

  function getFormattedUnits() {
    const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => String(num).padStart(2, "0");

    return {
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
    };
  }

  const units = getFormattedUnits();

  return (
    
    <div className="countdown">
      <div className="countdown-display" style={{ display: 'flex', gap: '45px' }}>
        <span data-testid="days-label">{units.days} days</span>
        <span data-testid="hours-label">{units.hours} hours</span>
        <span data-testid="minutes-label">{units.minutes} minutes</span>
        <span data-testid="seconds-label">{units.seconds} seconds</span>
      </div>
    </div>
  );

}

export default Countdown;
