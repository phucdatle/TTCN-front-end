// import { Card } from 'antd'
// import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const CardComponent = (props) => {
  const { countInStock,  image, name, price, rating,  discount, selled , id } = props
  const navigate = useNavigate()
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`)
}
  return (
    <WrapperCardStyle
    hoverable
    headStyle={{ width: '200px', height:'200px'  }}
    style={{ width:200}}
    bodyStyle={{padding:'10px'}}
    cover={<img alt="example" src={image}
    onClick={() => countInStock !== 0 &&  handleDetailsProduct(id)}
    disabled ={countInStock===0}
     />}
    
    >
        <StyleNameProduct>{name}</StyleNameProduct>
        <WrapperReportText>
        <span>
            <span style={{marginRight:'5px'}}>{rating}</span><StarFilled  style={{ fontSize : '12px', color:'rgb(252,66,3)', marginRight:'5px' }} />
        </span>
        <span> | Sold {selled || 1000}+</span>
        
        </WrapperReportText>
        <WrapperPriceText><span style={{marginRight:'8px'}}>{price?.toLocaleString()} ₫</span>
        <WrapperDiscountText>
          - {discount || 5}%
        </WrapperDiscountText>
        </WrapperPriceText>
        
     </WrapperCardStyle>
  )
}

export default CardComponent