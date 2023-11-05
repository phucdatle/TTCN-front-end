import React from 'react'
import imageProduct from '../../assets/img/123.jpg'
import { Button, Col, Image, Row } from 'antd'
import imageProductSmall from '../../assets/img/121.jpg'
import { WrapperAddressProduct, WrapperImgCol, WrapperImgSmall, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'

const ProductDetailComponent = () => {
   const onChange = ()=> { }
  return (
    <Row style={{padding:'16px', background: '#fff'}}>
        <Col span={10}>
        <Image src={imageProduct} alt='image product' preview={false} />
        <Row style={{ paddingTop:'10px', justifyContent: 'space-between'}}>
          <WrapperImgCol span={4}>
             <WrapperImgSmall src={imageProductSmall} alt='image small' preview={false} />
          </WrapperImgCol>
          <WrapperImgCol span={4}>
             <WrapperImgSmall src={imageProductSmall} alt='image small' preview={false} />
          </WrapperImgCol>
          <WrapperImgCol span={4}>
             <WrapperImgSmall src={imageProductSmall} alt='image small' preview={false} />
          </WrapperImgCol>
          <WrapperImgCol span={4}>
             <WrapperImgSmall src={imageProductSmall} alt='image small' preview={false} />
          </WrapperImgCol>
          <WrapperImgCol span={4}>
             <WrapperImgSmall src={imageProductSmall} alt='image small' preview={false} />
          </WrapperImgCol>
        </Row>
        </Col>
        <Col span={14}>
        <div style={{marginLeft:'10px'}}>
            <WrapperStyleNameProduct>tên sản phẩm </WrapperStyleNameProduct>
            <div>
            <StarFilled style={{ fontSize : '12px', color:'rgb(252,66,3)' }} />
            <StarFilled style={{ fontSize : '12px', color:'rgb(252,66,3)' }} />
            <StarFilled style={{ fontSize : '12px', color:'rgb(252,66,3)' }} />
            <WrapperStyleTextSell> | da ban 1000</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
               <WrapperPriceTextProduct>200.000d</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
               <span>giao den </span>
               <span className='address'>dia chi</span> -
               <span className='change-address'>doi dia chi</span> 
            </WrapperAddressProduct>
            <div>
               <div>so luong</div>
               <WrapperQualityProduct>
                  <button style={{ border:'none', background:'transparent'}}>
                     <MinusOutlined style={{color:'#000', fontSize:'15px' }} />
                  </button>

                  <WrapperInputNumber defaultValue={3} onChange={onChange} size='small' />

                  <button style={{ border:'none', background:'transparent'}}>
                     <PlusOutlined style={{color:'#000', fontSize:'15px' }} />
                  </button>
               </WrapperQualityProduct>
            </div>
            <div>
               <Button 
               style={{size:'100px', height:'48', width:'150'}}
               ></Button>
            </div>

         </div>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent