import React from "react";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: ""
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
        <div>
          <input onChange={this.handleChange} value={this.state.input} />
          <button onClick={this.addTask}>Add task</button>
        </div>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  addTask = () => {
    this.setState(state => ({
      tasks: [...state.tasks, state.input],
      input: ""
    }));
  };
}

export default ToDoList;
