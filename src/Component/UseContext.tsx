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
};
export const contextValue = createContext<UseContexType | null>(null);
export const UseContext = ({ children }: UseContextProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <contextValue.Provider value={{ user, setUser }}>
      <div className="flex flex-col justify-center">
        <h1 className="text-center">UseContext</h1>
        {children}
      </div>
    </contextValue.Provider>
  );
};
