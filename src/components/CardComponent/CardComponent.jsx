// import { Card } from 'antd'
// import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
  return (
    <WrapperCardStyle
    hoverable
    headStyle={{ width: '200px', height:'200px'  }}
    style={{ width:200}}
    bodyStyle={{padding:'10px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <StyleNameProduct>hiihi</StyleNameProduct>
        <WrapperReportText>
        <span>
            <span>5.00</span><StarFilled  style={{ fontSize : '12px', color:'rgb(252,66,3)' }} />
        </span>
        <span> | Đã bán 1000</span>
        
        </WrapperReportText>
        <WrapperPriceText>100.100 đ
        <WrapperDiscountText>
          -5%
        </WrapperDiscountText>
        </WrapperPriceText>
        
     </WrapperCardStyle>
  )
}

export default CardComponent