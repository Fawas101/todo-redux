import { createSlice } from "@reduxjs/toolkit";

const   userSlice = createSlice({
    name : "todo",
    initialState : {
        data :[]
    },

    reducers : {
        addTodo : (state,action)=>{
            state.data=[...state.data,{id:Date.now(),no:action.payload.no,text:action.payload.name}]
          },
          deleteTodo : (state,action)=>{
            const id=action.payload
         state.data=state.data.filter((item)=>item.id !== id)
        },
        editTodo : (state,action)=>{
            const {id,text}=action.payload
            state.data = state.data.map((item)=>{
                if(item.id == id){
                return ({...item,text})
                }else{
                    return item;
                }
            })
        }
  
    }
})

export const  {addTodo,deleteTodo,editTodo}=userSlice.actions
export default userSlice.reducer