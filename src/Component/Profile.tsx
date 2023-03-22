import React from "react";

export type profileProps = {
  name: String;
};
export const Profile = ({ name }: profileProps) => {
  return <div>Profile {name}</div>;
};
