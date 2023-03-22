import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "./components/genric/Llist";

function App() {
  return (
    <div className="flex justify-center max-w-screen-2xl  flex-col items-center">
      <h1 className="text-5xl mb-7">Genric Types</h1>
      <List
        items={[
          { id: 1, name: "chirag" },
          { id: 21, name: "meet" },
        ]}
        onClick={(item) => {
          console.log(item);
        }}
      />
    </div>
  );
}

export default App;
