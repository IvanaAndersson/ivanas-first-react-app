import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const Button = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={`${theme}-theme`}>
      Switch theme
    </button>
  );
};

export default Button;
