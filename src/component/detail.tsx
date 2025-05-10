import React from 'react'
import '../App.css'
import stoneJK1 from "../image/stoneJK.avif"
import stoneJK2 from "../image/stoneJK1.avif"
import stoneJK3 from "../image/stoneJK2.avif"
import Navba from './navba'
import { useLocation } from 'react-router-dom';
import "../App.css" 
import product from './product'

function detail() {

  let MainImageDetail = [stoneJK1 , stoneJK2, stoneJK3]
  // const location = useLocation();
  // const product = location.state?.item;
  
  // if(!product) return <p>상품 정보가 없습니다.</p>
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
