import React, { FC } from "react";

type Props = {
  text: string;
};

export const Box: FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};
