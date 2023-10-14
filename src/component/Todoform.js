import React, {useState} from 'react'

function Todoform(props) {

    const [taskValue, setTaskValue] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();

      props.onSubmit({//create props to passing task
        id: Math.floor(Math.random() * 1000),
        text: taskValue
      });
    }

    const handleChange = (e) =>{
      setTaskValue(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' 
        placeholder='What do you want to do?' 
        name='text' 
        value={taskValue}
        className='todo-form-input' 
        onChange={handleChange}
        >
        </input>
        <button className='addTaskbtn' type='submit' on>Add task</button>
    </form>
  )
  
}

export default Todoform