import React from "react"
import Todo from "./ToDo"


function ToDoList({toDoList ,handleFilter, handleToggle }){
    
    return(
        <div>
{toDoList.map(function (todo){
    return(
        <Todo todo={todo} handleFilter={handleFilter} handleToggle={handleToggle}/>    
        )
})}
<button style={{margin:'20px'}} onClick={handleFilter}>clear completed</button>
        </div>
    )
}
export default ToDoList