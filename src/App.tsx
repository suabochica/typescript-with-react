import React, { Component } from 'react';

import CounterOutputComponent from './CounterOutputComponent'

//interface IAppProps {}
interface IAppState {
  counterValue: number
}

class App extends Component<{}, IAppState> {
  public state = { counterValue: 0 };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <CounterOutputComponent counter={this.state.counterValue}/>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
      </div>
    )
  }

  private incrementHandler = () => {
    this.setState (prevState => {
      return { counterValue: prevState.counterValue + 1 }
    })
  }

  private decrementHandler = () => {
    this.setState (prevState => {
      return { counterValue: prevState.counterValue - 1 }
    })
  }
}

export default App;
