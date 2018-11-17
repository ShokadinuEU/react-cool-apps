import React, { Component } from 'react'
import './todo-app.scss'
import Tasks from './Tasks'
import TodoForm from './TodoForm';


class TodoApp extends Component {
  state = {
    tasks: [
      {id: 1, content: "Workout before go to work"},
      {id: 2, content: "Eat your cereales and drink natural juice"},
      {id: 3, content: "Check the schedule before go to work"}
    ]
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })
    this.setState({
      tasks
    })
  }

  addTask = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks
    })
    console.log(tasks)
  }

  render() {
    return (
      <div>
        <h1 className="app-header">Welcome to my Todo Daily Tasks</h1>
        <div className="todo-app-wrapper">
          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
          <TodoForm addTask={this.addTask} />
        </div>
      </div>
    )
  }
}

export default TodoApp
