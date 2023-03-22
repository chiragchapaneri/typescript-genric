import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Privet } from "./Component/Privet";
import { Profile } from "./Component/Profile";

function App() {
  return (
    <div className="flex justify-center max-w-screen-2xl  flex-col items-center">
      <Privet isLooggedIn={true} Component={Profile} />
    </div>
  );
}

export default App;
