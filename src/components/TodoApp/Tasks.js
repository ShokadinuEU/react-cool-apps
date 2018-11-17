import React from 'react'
import './todo-app.scss'

function Tasks({tasks, deleteTask}) {
  const taskList =  tasks.length ? (
    tasks.map(task => {
      return(
        <div onClick={() => {deleteTask(task.id)}} className="single-task" key={task.id}>
          <span className="task-content">{task.task}</span>
        </div>
      )
    })
  ) : (
    <h3 className="tasks-finish">Yay.. you're good to go to work now!</h3>
    )
  return (
    <div className="tasks-wrapper">
      {taskList}
    </div>
  )
}

export default Tasks
