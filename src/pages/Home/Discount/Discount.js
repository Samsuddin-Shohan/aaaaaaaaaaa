import React from "react";
import discount from "../../../assets/Discount.svg";
import { useEffect, useState } from "react";

const Discount = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`04/10/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <div className="bg-blue-300 h-12 flex justify-center items-center">
      <img className="h-4" src={discount} alt="" />
      <h2 className="mx-3 text-white">
        50% discount only valid for {timeLeft.hours + timeLeft.days * 24}:
        {timeLeft.minutes}:{timeLeft.seconds}
      </h2>
    </div>
  );
};

export default Discount;
