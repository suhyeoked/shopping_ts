import { useState } from 'react'
import './App.css'
import Product from './component/product'
import stoneJK1 from "./image/stoneJK.avif"
import stoneJK2 from "./image/stoneJK1.avif"
import stoneJK3 from "./image/stoneJK2.avif"
import Data from "./component/data"

import { Navbar , Container , Nav } from 'react-bootstrap';



interface DataInterFace {
  id : number 
  title : string
  content : string
  price : number
}


function App() {
  let [product , setProduct] = useState<DataInterFace[]>(Data)
  const MainImage = [stoneJK1 , stoneJK2, stoneJK3]
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
      
      <div className="MainBg"></div>
        <div className="container">
          <div className="row">
            <Product product ={product} MainImage={MainImage} />
          </div>
        </div>
    </>
  )
}

export default App
