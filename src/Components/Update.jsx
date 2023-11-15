import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editTodo } from '../Store/Reducer';


const Update = () => {

    const {id} = useParams();
    const edit = useSelector((state)=>state.todo.data);
    const edtRef=useRef(null)
    const editList = edit.filter((f) => f.id == id);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const edtBtn = () =>{
        const edtReff = edtRef.current.value
        dispatch(editTodo({id:id,text:edtReff})) 
        navigate('/')
    }


    return (
    <div>
      <div className='d-flex w-100 vh-150 justify-content-center align-items-centre pt-5 mt-5'>
        <div className='w-50 h-50 border bg-secondary text-white p-5  ' style={{marginTop:'150px'}}>
            <h3 className='d-flex align-items-centre justify-content-center py-5'>Edit Todo List</h3>
                <form >
                    <div className='pb-5'>
                    <input 
                    type="text" 
                    className='form-control' 
                    placeholder='Write Here...' 
                    style={{height :'60px',}} 
                    defaultValue={editList[0].text} ref={edtRef}
                    />
                    </div>        
                    <br />      
                    <button className='btn btn-info 'style={{marginLeft:'350px'}} onClick={()=>edtBtn(editList[0].id)}>Update</button>      
                </form>
        </div>
    </div>
    </div>
  )
}

export default Update
