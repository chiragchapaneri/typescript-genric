import React, { useEffect, useRef } from "react";

export const InputRef = () => {
  const inputRefrence = useRef<HTMLInputElement>(null);

  const changeData = () => {
    console.log(inputRefrence.current?.focus(), "");
  };
  useEffect(() => {
    console.log(inputRefrence);

    inputRefrence.current?.focus();
  });
  return (
    <div className="flex flex-col items-center gap-3 ">
      <div>InputRef</div>
      <div className="border-[1px] border-black">
        <input
          type="text"
          ref={inputRefrence}
          placeholder="Enter Your Name"
          className="outline-none"
        />
      </div>
      <button
        onClick={changeData}
        className="bg-blue-700 text-white rounded-md p-3"
      >
        Enter
      </button>
    </div>
  );
};
