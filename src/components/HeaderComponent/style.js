import { Row } from "antd";
import styled from "styled-components";


// export const WrapperLogo = styled.div`
//     width: 145px;
//     height:72px

// `


export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: #fff ;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid black;
    flex-wrap: nowrap
    
`

export const WrapperHeaderAccout = styled.div`
  	display: flex;
	align-items: center;
    color: black;
    gap: 10px;

`
export const WrapperTextHeaderSmall = styled.span`
    fontSize: 15px;
    color:black;
    while-space: nowrap;
`