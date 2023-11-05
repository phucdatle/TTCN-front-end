import React from 'react'
import TypeProduct from '../../components/TypeProducts/TypeProduct'
import {  WrapperProduct, WrapperTypeProduct } from './style'
import SliderComponents from '../../components/SliderComponents/SliderComponents'
import  slider1  from '../../assets/img/slide1.png'
import  slider2  from '../../assets/img/slide2.jpg'
import  slider3  from '../../assets/img/slider3.jpg'
import  slider4  from '../../assets/img/slide4.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Button } from 'antd'
// import NavbarComponents from '../../components/NavbarComponents/NavbarComponents'

const HomePage = () => {
  const  arr= ['Laptop', 'Mouses', 'Headphone', 'Keyboard', 'Keycap', 'Mouse pads']
  return (
  <>
      <div style={{padding: '0 120px',background: '#efefef'}}>
    <WrapperTypeProduct>
    {arr.map((item) => {
      return(
    
    <TypeProduct name={item} key={item}  />
      )
    })}
    </WrapperTypeProduct>
    </div>
    <div id='container' style={{ backgroundColor: '#efefef', padding: '0 120px', height:'4000px'  }}>
    <SliderComponents style={{marginTop:'20px'}} arrImages={[slider1, slider2, slider3, slider4]}/>

    <WrapperProduct>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
  
    </WrapperProduct>
    <div style={{ width:'100%', display: 'flex', justifyContent: 'center', marginTop: '50px'   }}>
    <Button type="primary">Xem them</Button>
    </div>
    </div>
  </>
    )
}

export default HomePage