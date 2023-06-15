import React, { FC } from "react";

type Props = {
  text: string;
};

export const Button: FC<Props> = ({ text }) => {
  return <button onClick={() => console.log("clicked!")}>{text}</button>;
};
