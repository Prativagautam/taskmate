// import {useState} from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {TaskList} from "./components/TaskList"
import './App.css'
import {AddTask} from "./components/AddTask"

// example one for useState implementation
// export const App = () => {
//   const [count,setCount]=useState(0);
//   function handleAdd(){
//     setCount(count + 1)
//     console.log(count)
//   }
//   function handleSub(){
//     setCount(count -1 )
//     console.log(count)
//   }
//   return (
//    <div>
//     <p>{count}</p>
//     <button onClick={handleAdd}>Add</button>
//     <button onClick={handleSub}>Sub</button>
//    </div>
//   )
// }



//example 2 of useState implementation for array of object and filtering
//conditional rendering 2 ways -> 1 ternanry operator like in this code we use if completed diff className andd if not diff className 
//2 way is using logical and operator if condition is true it executes one else another

export const App = () => {
  // const [tasks,setTasks]=useState([
  //   { id:123, name:"learn",completed:true},
  //   { id:234, name:"understand",completed:true},
  //   { id:345, name:"code",completed:false}
  // ]);
  // const [show,setShow]=useState(true)
 
  // function handleDelete(id){
  //   setTasks(tasks.filter(task=>id!==task.id))
  // }
  return (
    <div className="App">
      <Header/>
      <AddTask/>
      <TaskList />
      <Footer/>
    </div>
  )
}

