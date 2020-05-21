import React from "react";
import Greetings from "./Components/Greetings";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  return <Greetings name="React" onClick={onClick} />;
}

export default App;
