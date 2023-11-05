import { Button } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import InputComponents from '../InputComponent/InputComponents';

const ButtonInputSearch = (props) => {
    const { size, placeholder, textbutton } = props
    return (
        <div style={{ display: 'flex' }}>
            <InputComponents
                size={size}
                placeholder={placeholder}
            />
            <Button size={size}
                icon={<SearchOutlined />}
            >{textbutton}
            </Button>
        </div>
    )
}

export default ButtonInputSearch