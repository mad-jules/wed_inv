"use client";
import { useEffect, useState } from "react";
function getTimeRemaining(targetDate: Date) {
  const difference = targetDate.getTime() - Date.now();
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  return timeLeft;
}
