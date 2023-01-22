import { useState } from 'react'
import './App.css'

function App() {
  const [newTask, setNewTask] = useState('')
  const [todolist, setTodolist] = useState([])

  const handleChange =(event)=>{
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id+1,
      taskName: newTask,
    }
    setTodolist([...todolist, task])
  }

const deleteTask = (id) => {

  setTodolist(todolist.filter((task)=> task.id !== id))
}
  return (
    <div className='body'>
<div className="addTask">
<input type="text" onChange={handleChange} />
{/* <h1>{newTask}</h1> */}
<button onClick={addTask}>Add Task</button>
</div>
<div className="list">
  {todolist.map((task)=>{
    return <div>
      <h1>{task.taskName} </h1>
      <button onClick={()=> deleteTask(task.id)}>X</button>
      </div>
  })} 
</div>
    </div>
    
  )

}

//   const [age, setAge] = useState(0)
//   const [inputValue, setInputValue] = useState("")
//   const [showText, setShowText] = useState(true)
  
//   const [textColor, setTextColor] = useState("black")
//   const changeColor = () =>{
//     setTextColor(textColor=== "black" ? "red" : "black")
//   }

  
// const increaseAge = () => {
//   setAge(age+1)
// }
// const decreaseAge = () => {
//   setAge(age-1)
// }
// const settozero =()=> {
//   setAge(0)
// }
// const handleChange = (e) => {
//   setInputValue(e.target.value)
// }
//   return (
//     <div className="App">
//       {age}
//       <div><button onClick={increaseAge}>Increase Age</button>
//       <button onClick={decreaseAge}>decrease Age</button>
//       <button onClick={settozero}>Set Age to zero</button>
//       </div>
//       <div><input type="text"onChange={handleChange} /></div>
//       <div><button onClick={changeColor}>change color</button></div>
//       <div><button onClick={()=> {setShowText(!showText)}}>Show/Hide</button></div>
//       <div>{showText && <h1  style={{color:textColor}} > Hi, my name is Pedro</h1>}</div>
//       {inputValue}
//     </div>
//   )
// }

export default App
