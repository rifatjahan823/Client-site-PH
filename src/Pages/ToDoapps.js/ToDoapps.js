import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ToDoapps = () => {
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
        <div className='mx-auto border mt-5 px-3 w-50'>
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
    );
};

export default ToDoapps;