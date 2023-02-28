import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputRef } from "./components/InputRef";
import { MutableRef } from "./components/MutableRef";

function App() {
  return (
    <div className="flex justify-center max-w-screen-2xl flex-col items-center w-full mx-auto gap-4">
      <InputRef />
      <h1 className="text-black">MutableRef</h1>
      <MutableRef />
    </div>
  );
}

export default App;
