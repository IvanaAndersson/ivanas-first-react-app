import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import Button from "./components/Button";
import Body from "./components/Body";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`${theme}-theme`}>
      <Button />
      <Body />
    </main>
  );
};

export default App;
