import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponents/ButtonConponents";
import { Image } from "antd";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  margin-left: 115px;
  gap: 30px;
  justify-content: flex-start;
  height: 45px;
`;
export const WrapperProduct = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: #9255fd;
    span {
      color: #fff;
    }
  }
  width: 100%;
  color: #9255fd;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointers")};
`;

export const HiImg = styled(Image)`
  width: 305px;
  height: 140px;
  border-radius: 7px;
  transition: transform 0.3s;
  &:hover {
    color: #EF323E;
  box-shadow: 0 0 20px #EF323E;
  text-shadow: 0 0 20px #EF323E;
  }
`;

export const HiImg2 = styled(Image)`
  width: 305px;
  height: 140px;
  border-radius: 7px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`
