import React,{useState} from 'react'
import Todoform from './Todoform'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import Todo from './Todo';

function Todolist({toDos, completeTodo, removeTodo, updateTodos}) {

    const [editList, setEditList] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value =>{
        updateTodos(editList.id, value)
        setEditList({
            id: null,
            value:''
        });
    };

    if(editList.id){
        return <Todoform editList={editList} onSubmit = {submitUpdate}/>;
    }

  return toDos.map((todo, index) => (
    <div div className={todo.isComplete? 'todo-row complete': 'todo-row'} keys = {index}>
        <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine 
            onClick={() => removeTodo(todo.id)}
            className = 'delete-icon'/>
            <TiEdit 
             onClick={() => setEditList({id: todo.id, value: todo.text})}
             className = 'edit-icon'/>
        </div>
    </div>
  )) ;
}

export default Todolist