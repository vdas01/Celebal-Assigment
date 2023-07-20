import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.style.css"
import { useNavigate } from 'react-router-dom';


const Login = ({setUser}) => {

  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    name:"",
    email:"",
    password:""
  });
 
const onSubmit = (e)=>{
  e.preventDefault();
  sessionStorage.setItem("userData",JSON.stringify(inputs));
    navigate("/");
}

  return (
    <div className='login'>
         <div className="containerr">
         <h3>Login Form</h3>
         <Form className='form'>
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" value={inputs.name} placeholder="Enter name" className='mb-3' onChange={(e)=>setinputs({...inputs,name:e.target.value})}/>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" value={inputs.email} placeholder="Enter email" onChange={(e)=>setinputs({...inputs,email:e.target.value})}/>
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>
     
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" value={inputs.password} onChange={(e)=>setinputs({...inputs,password:e.target.value})}/>
         </Form.Group>
         <Button variant="primary" type="submit" onClick={onSubmit}>
           Submit
         </Button>
       </Form>
         </div>
    </div>
  )
}

export default Login