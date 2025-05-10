import React from 'react'
import { Navbar , Container , Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function Navba() {
    const navigate = useNavigate();
  return (
    <div>
      <nav className="NavBa">
        <ul>
          <li className="MyPick">최수혁 PICK</li>
          <li onClick={()=>{
            navigate('/')
          }}>Home</li>
          <li onClick={()=>{
            navigate('/detail')
          }} >Detail</li>
          <li>Pricing</li>
        </ul>
      </nav>
      {/* <Navbar bg="dark" data-bs-theme="dark">
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
      </Navbar> */}
    </div>
  )
}

export default Navba
