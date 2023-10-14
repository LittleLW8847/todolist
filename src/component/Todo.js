import React,{useState} from 'react'
import Todoform from './Todoform'
import Todolist from './Todolist';

function Todo(){
    const [toDos, setToDo] = useState([]); 

    const addToDo = todo =>{

      if(!todo.text || /^\s*$/.test(todo.text)){
        return;
      }

      const newToDos = [todo, ...toDos]
        setToDo(newToDos);
    }

    const completeTodo = id => {
      let updateTodos = toDos.map(todo => {
        if(todo.id === id){
          todo.isComplete =! todo.isComplete
        }

        return todo;
      })
      setToDo(updateTodos);
    }
    
  return (
    <div className='todoWrapper'>
        <Todoform onSubmit = {addToDo}/>
        <Todolist
         toDos = {toDos} 
         completeTodo = {completeTodo} />
    </div>
  )
}


export default Todo;