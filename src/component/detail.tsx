import React from 'react'
import '../App.css'
import stoneJK1 from "../image/stoneJK.avif"
import stoneJK2 from "../image/stoneJK1.avif"
import stoneJK3 from "../image/stoneJK2.avif"
import Navba from './navba'


function detail() {
  let MainImageDetail = [stoneJK1 , stoneJK2, stoneJK3]
  return (
    <div>
      <Navba />
        <div className="container">
      <div className="row">
      <div className="col-md-6">
        <img src={MainImageDetail[0]} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
    </div> 
    </div>
  )
}

export default detail
