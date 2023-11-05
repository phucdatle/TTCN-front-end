import { Input } from 'antd'
import React from 'react'

const InputComponents = (size, placeholder,...rest ) => {
  return (
    <Input
     size={size} 
     placeholder='Input search text'
      />
  )
}

export default InputComponents