import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UseContext } from "./Component/UseContext";
import { User } from "./Component/User";
// import { InputRef } from "./components/InputRef";

function App() {
  return (
    <div className="flex justify-center max-w-screen-2xl  flex-col items-center">
      {/* <InputRef /> */}
      <UseContext>
        <User />
      </UseContext>
    </div>
  );
}

export default App;
