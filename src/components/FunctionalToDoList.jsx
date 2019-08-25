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

  const deleteTask = event => {
    const index = event.target.dataset.index;
    setTasks(tasks => {
      const deleteTasks = [...tasks];
      deleteTasks.splice(index, 1);
      return deleteTasks;
    });
  };

  return (
    <div>
      <h1>Current tasks:</h1>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <button data-index={i} onClick={deleteTask}>
              Delete
            </button>
            {task}
          </li>
        ))}
      </ul>
      <div>
        <input onChange={handleChange} value={input} />
        <button onClick={addTask}>Add task</button>
        <p>Number of tasks: {tasks.length}</p>
      </div>
    </div>
  );
};

export default FunctionalToDoList;
