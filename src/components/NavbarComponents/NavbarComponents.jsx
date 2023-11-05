import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextValue } from './style'

const NavbarComponents = () => {
    const renderContent = (type, option) => {
        switch (type) {
            case 'text':
                return option.map((option) => {
                    return(
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            default:
                return{}
        }
    }
  return (
    <div>
        <WrapperLableText>hihaha</WrapperLableText>
        <WrapperContent>
            {renderContent('text', ['tai nghe', 'laptop', 'ban pjhim'])}
        </WrapperContent>
    </div>
  )
}

export default NavbarComponents