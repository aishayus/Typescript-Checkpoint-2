import React, { Component } from 'react';

// Define an interface for the component's state
interface CounterState {
  count: number;
}

// Define the class component with the state type
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0
  };

  // Define the method with its type annotations
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
