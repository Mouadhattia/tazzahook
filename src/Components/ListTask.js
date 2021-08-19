import React from 'react';
import Task from './Task';
import {useSelector} from 'react-redux';
import {selectTodolist} from '../features/todoSlice';

function ListTask() {
    const todoList =useSelector(selectTodolist)
    return (
        <div style={{width:'80%'}}>
           {todoList.map((e)=><Task todo={e}/>)} 
        </div>
    )
}

export default ListTask
