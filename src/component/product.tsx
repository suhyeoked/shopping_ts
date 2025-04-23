import React from 'react'
import "../App.css"

interface ProductInterFace {
  product : {
    id : number
    title : string
    content : string
    price : number
  }[]
  MainImage : string[]
}

function product(props : ProductInterFace) {
  return (
    <>
      {
        props.product.map((product , i)=>{
          return(
        <div className="col-md-4">
        <img src={props.MainImage[i]} alt="" />
        <h4>
          {product.title}
        </h4>
        <p>{product.content}</p>
      </div>
        )})
      }
    </>
  )
}

export default product
