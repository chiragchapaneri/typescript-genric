import React, { useContext } from "react";
import { contextValue } from "./UseContext";

export const User = () => {
  const userData = useContext(contextValue);
  const handleLogout = () => {
    userData?.setUser(null);
  };
  const handleLogin = () => {
    userData?.setUser({
      name: "Chirag",
      email: "Chiragchapaneri500@gmail.com",
    });
    userData?.setDesignation("Employee");
  };
  return (
    <div className="mx-auto max-w-screen-2xl items-center">
      <div className="flex flex-col ">
        <div className="self-center">user</div>
        <div className="self-center">
          <button
            onClick={handleLogin}
            className="border-[2px] p-3 bg-blue-700 rounded-xl text-white"
          >
            Login
          </button>
          <button
            onClick={handleLogout}
            className="p-3 bg-blue-700 rounded-xl text-white"
          >
            Logout
          </button>
        </div>
        <h1 className="text-center">User Name is {userData?.user?.name}</h1>
        <h1 className="text-center">User Email is {userData?.user?.email}</h1>
        <h1 className="text-center">
          User Designation {userData?.designation}
        </h1>
      </div>
    </div>
  );
};
