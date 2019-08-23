import React from "react";

const FunctionalToDoList = props => {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleChange = event => {
    setInput(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <div>
        <input onChange={handleChange} value={input} />
        <button onClick={addTask}>Add task</button>
      </div>
    </div>
  );
};

export default FunctionalToDoList;
