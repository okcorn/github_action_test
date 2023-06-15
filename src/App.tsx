import React from "react";
import { Box } from "./Box";
import { Button } from "./Button";

export const App = () => {
  return (
    <>
      <h1>Hello world! I am using React</h1>
      <Button text={11} />
      <Box text={222} />
    </>
  );
};
