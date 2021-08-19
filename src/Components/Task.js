import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './Task.css';
import {useDispatch} from 'react-redux';
import {setCheck,editTodos}   from '../features/todoSlice'

function Task({todo}) {
    
    
  const  dispatch = useDispatch ()
    const handleChange= ()=>{
    dispatch(setCheck(todo.id))
    }
    
    return (
        <div className="Task">
            <div style={{display:'flex'}}>
            <Checkbox
        checked={todo.done}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    <p className={todo.done&& 'task--done'}>{todo.item}</p>
    </div>
    <button style={{backgroundColor:'blue', color:'white'}} >Edit</button>
        </div>
    )
}

export default Task
