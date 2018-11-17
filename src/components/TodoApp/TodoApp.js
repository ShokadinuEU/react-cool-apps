import React, { Component } from 'react'
import './todo-app.scss'
import Tasks from './Tasks'


class TodoApp extends Component {
  state = {
    tasks: [
      {id: 1, task: "Workout before go to work"},
      {id: 2, task: "Eat your cereales and drink natural juice"},
      {id: 3, task: "Check the schedule before go to work"}
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

  render() {
    return (
      <div>
        <h1 className="app-header">Welcome to my Todo Daily Tasks</h1>
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    )
  }
}

export default TodoApp
