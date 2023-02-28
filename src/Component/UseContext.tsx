import { type } from "os";
import React, { createContext, useState } from "react";
export type AuthUser = {
  name: String;
  email: String;
};

type UseContextProps = {
  children: React.ReactNode;
};

type UseContexType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  designation: String | null;
  setDesignation: React.Dispatch<React.SetStateAction<String | null>>;
};
export const contextValue = createContext<UseContexType | null>(null);
export const UseContext = ({ children }: UseContextProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [designation, setDesignation] = useState<String | null>(null);

  return (
    <contextValue.Provider
      value={{ user, setUser, designation, setDesignation }}
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-center">UseContext</h1>
        {children}
      </div>
    </contextValue.Provider>
  );
};
