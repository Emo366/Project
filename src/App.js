import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data.json'
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';




function App() {

const [toDoList, setToDoList]=useState(data)

function handleToggle(id){
  let mapped=toDoList.map(function (task){
    return task.id==id ?{...task, complete:!task.complete}:{...task}

  })
  setToDoList(mapped)
 
}
function handleFilter(){
  let filtered=toDoList.filter(function (task){
    return !task.complete
  })
  setToDoList(filtered)
 
}
function addTask(userInput){
  let copy=[...toDoList]
  copy=[...copy, {id:toDoList.length+1, task:userInput, complete:false }]
  setToDoList(copy)
}










  return (
    <div className="App">
<Header/>
<ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle}/>
<ToDoForm addTask={addTask}/>

    </div>
  );
}

export default App;
