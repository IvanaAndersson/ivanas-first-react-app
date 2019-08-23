import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }

  decrement = () => {
    this.setState(oldState => ({
      count: oldState.count - 1
    }));
  };

  increment = () => {
    this.setState(oldState => ({
      count: oldState.count + 1
    }));
  };
}

export default Counter;
