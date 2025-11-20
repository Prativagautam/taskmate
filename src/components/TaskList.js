import React from 'react'
import {useState} from "react"
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = (props) => {
      const [tasks,setTasks]=useState([
    { id:123, name:"learn",completed:true},
    { id:234, name:"understand",completed:true},
    { id:345, name:"code",completed:false}
  ]);
  const [show,setShow]=useState(true)
 
  function handleDelete(id){
    setTasks(tasks.filter(task=>id!==task.id))
  }
  return (
    <>
     <h1>Task List {props.title}</h1>
      <ul>
        <button className="trigger" onClick={()=>setShow(!show)}>Togglee</button>
        {show && tasks.map((task)=>(
            <TaskCard key={task.id}  task={task} handleDelete={handleDelete}/>
        

        ))}
      </ul>
      {/* here result=success is just a custom prop */}
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quod aut, assumenda laboriosam eveniet, repudiandae a, soluta nostrum est quaerat possimus odio! Officia impedit modi, ea molestiae aut ipsam nemo.</p>
      </BoxCard>

      <BoxCard result="warning" >
        <p className="title">Lorem ipsum dolor sit, amet </p>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi sint, rerum reprehenderit expedita dolorum. Iure, dolorum dicta perspiciatis placeat qui sint consequuntur in asperiores corrupti quos at labore eos?</p>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi sint, rerum reprehenderit expedita dolorum. Iure, dolorum dicta perspiciatis placeat qui sint consequuntur in asperiores corrupti quos at labore eos?</p>
      </BoxCard>
    
     
    </>
  )
}
