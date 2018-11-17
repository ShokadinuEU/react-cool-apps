import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import UserForm from './components/stepFormApp/UserForm';
import TodoApp from './components/TodoApp/TodoApp'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user-form" component={UserForm} />
        <Route path="/todo-app" component={TodoApp} />
      </Switch>
    );
  }
}

export default App;
