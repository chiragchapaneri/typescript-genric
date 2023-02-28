import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputRef } from "./components/InputRef";

function App() {
  return (
    <div className="flex justify-center max-w-screen-2xl  flex-col items-center bg-red-500">
      <InputRef />
    </div>
  );
}

export default App;
