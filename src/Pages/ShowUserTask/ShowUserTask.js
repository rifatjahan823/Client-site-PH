import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ShowUserTask = ({task,taskDelete}) => {
    const {name,description}=task;
    const [line,setLine]=useState(false)

   const success=()=>{
        alert('success');
        setLine(true)
}

    return (
        <div className='card-group col-lg-12  '>
        <div className=' border w-100 text-center p-2 mb-3'>
        <div className='row justify-content-center align-items-center'>
        <div className='col-lg-3 col-md-12 col-sm-12'>
            <p style={{textDecoration:line?"line-through":"none"}}>{name}</p>
            <p style={{textDecoration:line?"line-through":"none"}}>{description}</p>
        </div>
        <div className='col-lg-3 col-md-6 col-6'> 
            <button  className='btn btn-success me-5' onClick={success}>complete</button>
        </div>
        <div className='col-lg-3 col-md-6 col-6'> 
            <button  className='btn btn-danger me-5'  onClick={()=>taskDelete(task._id)}>Delete</button>
        </div>
        </div>
        </div>
        <ToastContainer></ToastContainer>
       </div>
       )
};

export default ShowUserTask;