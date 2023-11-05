import { Button } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

const ButtonConponents = ({ size, textbutton}) => {
  return (
    <Button
     size={size}
     icon={<SearchOutlined />}
    textbutton={textbutton}
    />
  )
}

export default ButtonConponents