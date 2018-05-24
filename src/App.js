import React, { Component } from 'react';
import NavBar from './components/nav-components/NavBar';
import FormComponent from './components/form-components/Form-Component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FormComponent/>
      </div>
    );
  }
}

export default App;
