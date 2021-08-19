import { createSlice } from '@reduxjs/toolkit'

const initialState = {
todoList:[
    {
        item:'todo1',
        done: false,
        id:1
    },
    {
        item:'todo2',
        done: true,
        id:2
    }
]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo:(state,action)=>{
            state.todoList.push(action.payload)

        },
       setCheck:(state,action) =>{
           state.todoList.map(e=>{
               if(action.payload=== e.id){
                   if(e.done===true){
                       e.done = false
                   }
                   else{
                       e.done= true
                   }
               }
           })
       },
       editTodos: (state, action) => {
        return state.map(todo => {
            if (todo.id === action.payload.id) {
                return {
                    ...todo,
                    item: action.payload.item,
                }
            }
            return todo;
        })
    },
        
    
    }
});

export const { saveTodo,setCheck,editTodos } = todoSlice.actions
export const selectTodolist = state => state.todos.todoList
export default todoSlice.reducer
