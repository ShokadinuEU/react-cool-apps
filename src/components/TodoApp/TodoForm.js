import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="new-task-form">
          <label className="task-form-label">Add new task:</label>
          <input className="task-form-input" placeholder="Enter new task for the list..." type="text" onChange={this.handleChange}  value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default TodoForm
