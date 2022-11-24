import { useState } from "react"

function ToDoForm({addTask}){
const [userInput, setUserInput]=useState('')
function handleChange(e){
    setUserInput(e.currentTarget.value)
}
function handleSubmit(e){
    e.preventDefault();
    addTask(userInput)
    setUserInput("")
}

    return(
        <div>
<form onSubmit={handleSubmit}>
<input type="text" value={userInput} onChange={handleChange} placeholder='Enter task...' />
<button>Submit</button>
</form>
        </div>
    )
}
export default ToDoForm