import React from 'react';

const ShowUserTask = ({task,taskDelete}) => {
    const {name,description,_id}=task;
const success=()=>{
    alert(`${name}`)
}
    return (
        <div className='card-group col-lg-12  '>
        <div className=' border w-100 text-center p-3 d-flex justify-content-around align-items-center'>
            <div>
                <p>{name}</p>
                <p>{description}</p>
            </div>
            <div> 
                <button  className='btn btn-danger me-5'  onClick={success}>complete</button>
            </div>
            <div> 
                <button  className='btn btn-danger me-5'  onClick={()=>taskDelete(task._id)}>Delete</button>
            </div>
        </div>
       </div>
       )
};

export default ShowUserTask;