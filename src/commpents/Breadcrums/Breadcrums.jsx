import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import Product from '../../pages/Product';
const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />SHOP<img src={arrow_icon} alt="" /> men {Product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrums
