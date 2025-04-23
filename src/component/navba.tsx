import React from 'react'
import { Navbar , Container , Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Navba() {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="MyPick" onClick={()=>{
            navigate('/')
          }}>최수혁 PICK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
                navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/detail')
            }}>Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navba
