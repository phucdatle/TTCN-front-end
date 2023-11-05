import React  from 'react'
import HeaderComponents from '../HeaderComponent/HeaderComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
        <HeaderComponents/>
        {children}
    </div>
  )
}

export default DefaultComponent