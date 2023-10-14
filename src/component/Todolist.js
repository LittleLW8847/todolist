import React,{useState} from 'react'
import Todoform from './Todoform'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Todolist({toDos, completeTodo}) {

    const [editList, setEditList] = useState({
        id: null,
        value: ''
    })
  return toDos.map((todo, index) => (
    <div div className={todo.isComplete? 'todo-row complete': 'todo-row'} keys = {index}>
        <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine />
            <TiEdit />
        </div>
    </div>
  )) ;
}

export default Todolist