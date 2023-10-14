import React, {useState, useEffect, useRef} from 'react'

function Todoform(props) {

    const [taskValue, setTaskValue] = useState('')

    const inputRef = useRef(null);
    useEffect(()=>{
      inputRef.current.focus()
    })

    const handleSubmit = (e) => {
      e.preventDefault();

      props.onSubmit({//create props to passing task
        id: Math.floor(Math.random() * 1000),
        text: taskValue
      });

      setTaskValue('');
    }

    const handleChange = (e) =>{
      setTaskValue(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        <input type='text' 
        placeholder='What do you want to do?' 
        name='text' 
        value={taskValue}
        className='todo-input' 
        onChange={handleChange}
        ref={inputRef}
        >
        </input>
        <button className='todo-button' type='submit' on>Add task</button>
    </form>
  )
  
}

export default Todoform