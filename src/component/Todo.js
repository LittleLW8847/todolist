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

    const removeTodo = id =>{
      const removeTask = [...toDos].filter(todo => todo.id !== id);
      setToDo(removeTask);
    }

    const updateTodos = (todoID, newTask) => {
      if(!newTask.text || /^\s*$/.test(newTask.text)){
        return;
      }

      setToDo(prev => prev.map(item => (item.id === todoID? newTask: item)));
    } 
    
  return (
    <div className='todoWrapper'>
        <Todoform onSubmit = {addToDo}/>
        <Todolist
         toDos = {toDos} 
         completeTodo = {completeTodo} 
         removeTodo={removeTodo}
         updateTodos = {updateTodos}/>
    </div>
  )
}


export default Todo;