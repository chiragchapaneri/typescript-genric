import React, { Component } from "react";
import { Login } from "./Login";
import { profileProps } from "./Profile";

type PriveProps = {
  isLooggedIn: boolean;
  Component: React.ComponentType<profileProps>;
};

export const Privet = ({ isLooggedIn, Component }: PriveProps) => {
  if (isLooggedIn) {
    return <Component name="chirag" />;
  } else {
    return <Login />;
  }
};
