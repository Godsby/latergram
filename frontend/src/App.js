import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: []}
  componentDidMount() {
    axios.get("/users")
    .then(res => {
      debugger
    })

  }
  render() {
    return (
      <div className="App">
        Hellow!
      </div>
    );
  }
}

export default App;
