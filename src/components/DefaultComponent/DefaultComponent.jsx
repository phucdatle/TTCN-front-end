import React  from 'react'
import HeaderComponents from '../HeaderComponent/HeaderComponent'
import FooterConponent from '../FooterComponent/FooterComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
        <HeaderComponents/>
        {children}
        <FooterConponent/>
    </div>
  )
}

export default DefaultComponent