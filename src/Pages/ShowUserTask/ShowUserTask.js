import React from 'react';
import { NavItem } from 'react-bootstrap';

const ShowUserTask = ({task,taskDelete}) => {
    const {name,description,_id}=task;
const success=()=>{
    alert(`${name} ${description}`);
    if(success){
     name.slice(0,2)
     description.slice(0,2)
    }
}
    return (
        <div className='card-group col-lg-12  '>
        <div className=' border w-100 text-center p-2 mb-3'>
        <div className='row justify-content-center align-items-center'>
        <div className='col-3'>
            <p>{name}</p>
            <p>{description}</p>
        </div>
        <div className='col-3'> 
            <button  className='btn btn-success me-5'  onClick={success}>complete</button>
        </div>
        <div className='col-3'> 
            <button  className='btn btn-danger me-5'  onClick={()=>taskDelete(task._id)}>Delete</button>
        </div>
        </div>
        </div>
       </div>
       )
};

export default ShowUserTask;