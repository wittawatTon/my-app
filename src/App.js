import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
  // Method to increment count
    increment() {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
  
    // Method to decrement count
    decrement() {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }
  
    // Method to reset count
    reset() {
      this.setState({
        count: 0
      });
    }
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };

  ReactDOM.render(
    <React.StrictMode>
      <Counter />
    </React.StrictMode>,
    document.getElementById('root')
  )

}

export default App;
