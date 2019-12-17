import React from "react";

const FunctionalToDoList = props => {
  const taskString = localStorage.getItem("tasks") || "";
  const initialTasks = taskString.split(" ; ");
  const [tasks, setTasks] = React.useState(initialTasks);
  const [input, setInput] = React.useState("");

  const handleChange = event => {
    setInput(event.target.value);
  };

  React.useEffect(() => {
    const encodedTasks = tasks.join(" ; ");
    localStorage.setItem("tasks", encodedTasks);
  }, [tasks]);

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
    <div className="todo-list">
      <h1>Current tasks:</h1>
      <ul>
        {tasks.map((task, completedTasks, i) => (
          <li key={i}>
            {task}

            <span className="buttons">
              <button data-index={i} onClick={deleteTask}>
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div>
        <input
          onChange={handleChange}
          value={input}
          placeholder="Add a todo..."
        />
        <button onClick={addTask}>Add task</button>
        <p>Number of tasks: {tasks.length}</p>
      </div>
    </div>
  );
};

export default FunctionalToDoList;
