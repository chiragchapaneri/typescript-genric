import React, { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interVelRef = useRef<number | undefined>(undefined);
  const stopInterval = () => {
    console.log(interVelRef.current, "stop");

    window.clearInterval(interVelRef.current);
  };
  useEffect(() => {
    interVelRef.current = window.setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      stopInterval();
    };
  });
  return (
    <div className="flex flex-col gap-2">
      MutableRef {timer}
      <button
        className="bg-blue-500 rounded-md p-3"
        onClick={() => stopInterval()}
      >
        Stop Timer
      </button>
    </div>
  );
};
