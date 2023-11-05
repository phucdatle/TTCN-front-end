import { Row } from 'antd'
import React from 'react'
import NavbarComponents from '../../components/NavbarComponents/NavbarComponents'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WrapperNavbar, WrapperProduct } from './style'
import { Col, Pagination } from 'antd'

const TypeProducsPage = () => {
  return (
    <div style={{ padding:'0 120px ', background:'#efefef'}}>
    <Row  style={{ flexWrap:'nowrap', paddingTop:'20px' }}>
        <WrapperNavbar span={4} >
            <NavbarComponents />
        </WrapperNavbar>
      <Col span={20}>
        <WrapperProduct >
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </WrapperProduct>
        <Pagination defaultCurrent={1} total={50} style={{ textAlign :'center', marginTop:'10px'}} />
      </Col>
      </Row>


    </div>
  )
}

export default TypeProducsPage