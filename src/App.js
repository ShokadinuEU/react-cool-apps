import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/home/Navbar';
import UserForm from './components/stepFormApp/UserForm';
import TodoApp from './components/TodoApp/TodoApp'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={TodoApp} />
          <Route path="/user-form" component={UserForm} />
          <Route path="/todo-app" component={TodoApp} />
        </Switch>
      </div>
    );
  }
}

export default App;
