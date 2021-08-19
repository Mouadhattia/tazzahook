import React ,{useState}  from 'react';
import './Addtask.css';
import { useDispatch} from 'react-redux'
import { saveTodo } from '../features/todoSlice';





export default function Addtask() {
    const [add, setAdd] = useState('')
    const dispatch = useDispatch()
    const addTodo =()=>{
        dispatch(saveTodo({
            item:add,
            done: false,
            id:Date.now()
        }))
        
    }
    return (
        <div className='Addtask'>
           <input type="text" onChange={e=>setAdd(e.target.value)} />
           <button onClick={addTodo}>Add!</button>
        </div>
    )
}
