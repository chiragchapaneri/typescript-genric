import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RandomNumber } from "./components/RandomNumber";

function App() {
  return (
    <div className="flex justify-center max-w-screen-2xl  flex-col items-center">
      <h1>Restricting props</h1>
      <RandomNumber value={1} isNegative={false} />
    </div>
  );
}

export default App;
