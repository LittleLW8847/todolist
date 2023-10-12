import React, {useState} from 'react'

function Todoform() {

    const [taskInput, setTaskInput] = useState('')
  return (
    <form>
        <input type='text' 
        placeholder='What do you want to do?' 
        value={taskInput} 
        name='text' 
        className='todo-form-input'>
        </input>
        <button className='addTaskbtn'>Add task</button>
    </form>
  )
}

export default Todoform