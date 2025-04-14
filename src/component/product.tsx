import React from 'react'
import "../App.css"

interface ProductInterFace {
    product : number | string
    MainImage : []
    
}

function product(props : ProductInterFace) {
  return (
    <>
      {
        props.MainImage.map((MainImage , i)=>{
          return(
                  <div className="col-md-4">
                    <img src={MainImage} alt="" />
                    <h4>{product[i].title}</h4>
                    <p>{product[i].content}</p>
                    <p>{product[i].price}</p>
                  </div>
          )
        })
      }
    </>
  )
}

export default product
