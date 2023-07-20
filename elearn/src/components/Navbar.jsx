import React,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbarr = () => {
    const [user, setUser] = useState(null);
    console.log(user);
     
    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("userData"))); 
    },[]);

    const signOut = () =>{
      sessionStorage.removeItem("userData");
    }
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
    <Container>
      <Navbar.Brand href="#home">Pathsala</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href='/courses'>Courses</Nav.Link>
           {!user ? 
            <Nav.Link href="/login">Login</Nav.Link> :
            <>
              <button id='logout_btn' onClick={signOut}>Logout</button>
              <h4 style={{"color":"white","textTransform":"capitalize"}} id='user_title'>{user.name}</h4> 
            </>
            }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr