import { useState, useEffect, useRef } from "react";

const useTypingGame = (startingTime = 10) => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateWordCount = (string) => {
    const words = string.trim().split(/[\s,.]+/);
    const filteredWordsArray = words.filter((word) => word !== "");
    const uniqueWordsArray = [...new Set(filteredWordsArray)];
    return [filteredWordsArray.length, uniqueWordsArray.length];
  };

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setText("");
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  };

  useEffect(() => {
    if (isTimeRunning === true && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((currTime) => currTime - 1);
      }, 1000);
    }
  }, [isTimeRunning, timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsTimeRunning(false);
      const words = calculateWordCount(text);
      setWordCount(words[0]);
      setUniqueWordCount(words[1]);
    }
  }, [timeRemaining, text]);

  return {
    text,
    timeRemaining,
    isTimeRunning,
    wordCount,
    uniqueWordCount,
    handleChange,
    startGame,
    textareaRef,
  };
};

export default useTypingGame;
