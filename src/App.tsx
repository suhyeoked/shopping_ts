import { useState } from 'react'
import './App.css'
import Product from './component/product'
import stoneJK1 from "./image/stoneJK.avif"
import stoneJK2 from "./image/stoneJK1.avif"
import stoneJK3 from "./image/stoneJK2.avif"
import Data from "./component/data"
import { Routes , Route ,Link, useNavigate } from 'react-router-dom'
import Navba from './component/navba'


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
      <Navba />
      <div className="MainBg"></div>
        <div className="container">
          <div className="row">
            <Product product = {product} MainImage ={MainImage}/>
          </div>
        </div>
        
    </>
  )
}

export default App
