import { Row } from "antd";
import styled from "styled-components";


// export const WrapperLogo = styled.div`
//     width: 145px;
//     height:72px

// `


export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(38,51,66);
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid black;
    flex-wrap: nowrap
    
`

export const WrapperHeaderAccout = styled.div`
  	display: flex;
	align-items: center;
    color: #FFFFFF;
    gap: 10px;

`
export const WrapperTextHeaderSmall = styled.span`
    fontSize: 15px;
    color: #FFFFFF;
    while-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover{
        background: #FFFFFF;
        border-radius: 4px;

    }
`