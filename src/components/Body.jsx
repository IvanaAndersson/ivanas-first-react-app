import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import useTypingGame from "../hooks/useTypingGame";

const Body = () => {
  const { theme } = useContext(ThemeContext);
  const {
    text,
    timeRemaining,
    isTimeRunning,
    wordCount,
    uniqueWordCount,
    handleChange,
    startGame,
    textareaRef,
  } = useTypingGame();
  return (
    <section className="game">
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        ref={textareaRef}
        disabled={!isTimeRunning}
        placeholder={`Textarea is ${isTimeRunning ? "enabled" : "disabled"}`}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} className={`${theme}-theme`}>
        START
      </button>
      <h3>Word count: {wordCount}</h3>
      <h3>Unique words count: {uniqueWordCount}</h3>
    </section>
  );
};

export default Body;
