import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
import { addTodo, deleteTodo } from '../Store/Reducer';

const Home = () => {
  const todo=useSelector((state)=>state.todo.data)
  const dispatch=useDispatch()
  const Nvgt=useNavigate()
  const dltBtn = (id) =>{
    dispatch(deleteTodo(id))
}
  
    const addref=useRef(null)
    const addBtn=()=>{
      if(addref === ""){
        alert('Please enter a task!')
      }else{
    const addReff=addref.current.value
    dispatch(addTodo({name : addReff,no:[todo.length+1],todo}))
    addref.current.value=''
      }  
  } 
  
  

  return (
    <div className='container'>
      <div className='my-5 pb-5'>
        <h2 className='py-5 mt-5'>Todo App </h2>
        
        <input type='text' placeholder='Enter the todo list...' ref={addref} style={{height :'60px',width:'100vh',border:'solid 1px' }}/>

      <button onClick={addBtn} className='btn btn-success ms-5 mb-2 ' style={{width:'120px', height:'60px'}}>create +</button> 
      </div>
      <table className='table' style={{width:'120vh'}}>
    <thead >
        <tr >
          <th>No.</th>
            <th>Todo List</th>
            <th>Action</th>
        </tr> 
    </thead>
      <tbody>
        
          
      {todo.map((item)=>(
      <tr>
        <td>{item.no}</td>
        <td>{item.text}</td>
        <td>
          
          <button onClick={()=>Nvgt(`/edit/${item.id}`)} className='btn btn-sm btn-primary'>Edit</button>
          <button className='btn btn-sm btn-danger ms-2' onClick={()=>dltBtn(item.id)} >Delete</button>
                
        </td>
      </tr>

      ))}
    </tbody>
      </table>
   
    </div>
  )
}

export default Home
