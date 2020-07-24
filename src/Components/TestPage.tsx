import React, { useState } from "react";
import useTestA from "../hooks/useTest";
// import { TestState } from "../modules/test";

function TestPage() {
  const { testA, modifyTestA, modifyTestb } = useTestA();

  const abc = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    modifyTestA(event.target.value);
  };

  const def = (event: React.ChangeEvent<HTMLInputElement>) => {
    modifyTestb(event.target.value);
  };

  return (
    <div>
      <input onChange={abc} />
      <input onChange={def} />
      <div>{testA.initiala}</div>
      <div>{testA.initialb}</div>
    </div>
  );
}

export default TestPage;
