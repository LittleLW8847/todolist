import React,{useState} from 'react'
import Todoform from './Todoform'
import {v4 as uuidv4} from 'uuid'
uuidv4();

function Todo(){
    const [toDos, setToDo] = useState([]); 

    const addToDo = todo =>{

      if(!todo.text || /^\s*$/.test(todo.text)){
        return;
      }

      const newToDos = [todo, ...toDos]
        setToDo(newToDos);
    }
    
  return (
    <div className='todoWrapper'>
        <Todoform onSubmit = {addToDo}/>
    </div>
  )
}


export default Todo;