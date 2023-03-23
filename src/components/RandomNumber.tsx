import { type } from "os";
import React from "react";

type RandomNumberType = {
  value: number;
};

type isPositiveNumber = RandomNumberType & {
  isPositive?: boolean;
  isNegative?: never;
  isZero?: never;
};
type isNegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative?: boolean;
  isZero?: never;
};

type isZeroNumber = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero?: boolean;
};

type RandomProps = isNegativeNumber | isNegativeNumber | isZeroNumber;
export const RandomNumber = ({
  value,
  isPositive,
  isZero,
  isNegative,
}: RandomProps) => {
  return (
    <div>
      RandomNumber
      <div>
        {value} {isPositive && "positive"} {isNegative && "negative"}
        {isZero && "zero"}
      </div>
    </div>
  );
};
