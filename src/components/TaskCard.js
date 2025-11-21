import React from 'react'
import "./TaskCard.css"
//here we are destructuring props as task and handleDelete so as to avoid writing props everytime
export const TaskCard = ( {task,handleDelete}) => {
  return (
    <div className="taskcard">
      <li className={task.completed ? "completed" : "incomplete"}>
            <span>
              {task.id}-{task.name} -
            </span>
              <button onClick={()=>handleDelete(task.id)} className='delete'>Delete</button>       
      </li>
    </div>
  )
}
