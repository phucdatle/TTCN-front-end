import { Badge, Col, Image } from 'antd'
// import Search from 'antd/lib/transfer/search'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccout, WrapperTextHeaderSmall } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import logo from '../HeaderComponent/logo.jpg'



const HeaderComponents = () => {
  return (
    <div>
      {/* logo */}
      <WrapperHeader >
        <Col span={6}>
        <div>
        <Image src={logo} style={{ width: '145px', height: '72px'}} preview={false} />
        </div>
        </Col>
        {/* tim kiem */}
        <Col span={12}>
          <ButtonInputSearch
            size='large'
            placeholder='Input search text'
            textbutton='Search'
          />
        </Col>
        {/* tay trai  */}
        <Col span={6} style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize: '30px' }} />
            {/* ca nhan */}
            <div>
              <WrapperTextHeaderSmall>LognIn/ SignIn</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Profile</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>

            </div>
          </WrapperHeaderAccout>
          <div>
            <Badge count={99} size='small'>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: 'black' }} />
            </Badge>
            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponents