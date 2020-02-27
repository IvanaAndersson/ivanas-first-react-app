import React from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import Addition from "./components/Addition";
import FunctionalToDoList from "./components/FunctionalToDoList";
import FunctionalCounter from "./components/FunctionalCounter";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <>
      <FunctionalCounter />
      <FunctionalToDoList />;
      <CurrencyConverter />;
    </>
  );
}

export default App;
