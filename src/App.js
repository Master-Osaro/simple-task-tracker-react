import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTask] = useState([{
    id: 1,
    text: "Food Shopping",
    day: "Feb 1st at 1:00am",
    reminder: false

},
{
    id: 2,
    text: "Water Shopping",
    day: "Feb 2nd at 2:00am",
    reminder: true

},
{
    id: 3,
    text: "Bread Shopping",
    day: "Feb 5th at 3:00am",
    reminder: false

}])

//Add Tasks
const addTask=(task)=>{
  const id = Math.floor((Math.random() * 10000)+1)
  const newTask = {id, ...task}
  setTask([...tasks, newTask]) 
}

//Delete Tasks
const deleteTasks=(id)=>{
  setTask(tasks.filter((task)=> task.id !== id))
}

//Toggle Reminder
const toggleReminder=(id)=>{
  setTask(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}:task))
}

  return (
    <div className = "container" >
     <Header onAdd ={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} title = {"Task Tracker"}  />
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}/> : 'No tasks to display'}
    </div>
  );
}


export default App;
