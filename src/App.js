import React, { Component } from 'react';
import logo from './logo.svg';
import store from './store/'

import Counter from './Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store}/>
      </div>
    );
  }
}

export default App;
