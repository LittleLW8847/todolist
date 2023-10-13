import React, {useState} from 'react'

function Todoform() {

    const [taskValue, setTaskValue] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log("The task is" + taskValue);
    }

    const handleChange = (e) =>{
      setTaskValue(e.target.value);
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type='text' 
        placeholder='What do you want to do?' 
        name='text' 
        className='todo-form-input' 
        onChange={handleChange}
        >
        </input>
        <button className='addTaskbtn' type='submit' on>Add task</button>
    </form>
  )
}

export default Todoform