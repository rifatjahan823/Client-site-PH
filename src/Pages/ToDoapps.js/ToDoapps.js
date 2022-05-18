import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ShowUserTask from '../ShowUserTask/ShowUserTask';

const ToDoapps = () => {
    const [addTask,setAddTask]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addtask')
        .then(res=>res.json())
        .then(data=>setAddTask(data))
    },[addTask])

    const taskDelete = id =>{
        const proceed= window.confirm('are you sure');
        if(proceed){
            fetch(`http://localhost:5000/addtaskDelete/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
               const remaing = addTask.filter(task=>task._id!==id) 
               setAddTask(remaing) 
            })
        }
    }
    const onSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const result={name,description}
        fetch('http://localhost:5000/addtask',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(result)
        })
        .then(res=>res.json())
        .then(result=>{
        })
    }
    return (
        <>
        <div className='mx-auto form-container p-3 border shadow mt-4'>
      <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control  type="text" name="name" placeholder="Name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"name="description" placeholder="Leave a comment here" required/>
      </Form.Group>
      <Button  style={{backgroundColor:"black",border:'none'}} className='w-50 mx-auto d-block mb-2' type="submit">
        Add Task
     </Button>
    </Form>
    </div>
<div className='container mt-5'>
    {
                
    addTask.map(task=><ShowUserTask
    task={task}
    key={task._id}
    taskDelete={taskDelete}>
    </ShowUserTask>)
                }
</div>
    </>   
    );
};

export default ToDoapps;