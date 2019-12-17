import React from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import Addition from "./components/Addition";
import FunctionalToDoList from "./components/FunctionalToDoList";
import FunctionalCounter from "./components/FunctionalCounter";

function App() {
  return (
    <>
      <FunctionalCounter />
      <FunctionalToDoList />;
    </>
  );
}

export default App;
