import { useState } from 'react'
import './App.css'

import { Navbar , Container , Nav } from 'react-bootstrap';

function App() {


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">최수혁 PICK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="MainBg">
        
      </div>
    </>
  )
}

export default App
