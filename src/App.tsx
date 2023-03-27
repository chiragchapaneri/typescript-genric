import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tost } from "./components/Tost";
function App() {
  return (
    <div className="flex justify-center max-w-screen-2xl  flex-col items-center">
      {/* <InputRef /> */}
      <Tost postion="center" />
    </div>
  );
}

export default App;
