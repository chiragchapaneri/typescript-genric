import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type TostProps = {
  postion:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Tost = ({ postion }: TostProps) => {
  return <div>Tost notification postion -{postion}</div>;
};
