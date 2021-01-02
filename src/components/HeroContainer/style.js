import styled from "styled-components";
import { Paragraph } from "../../styles/MainStyle";

export const Benefits = styled.div`
  padding: 50px 0 0;
  @media screen and (max-width: 479px) {
    padding: 30px 0 50px;
  } ;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -27px -12px;
  width: 90vw;
  justify-content: center;
  @media screen and (max-width: 479px) {
    margin-bottom: -20px;
    margin-top: -20px;
  } ;
`;

export const RowItem = styled.div`
  box-sizing: border-box;
  margin: 12px 27px;
  text-align: center;
  width: calc(33.33%- 24px);
  padding-bottom: 40px;
  @media screen and (max-width: 479px) {
    width: calc(100% - 24px);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 767px) {
    width: calc(50% - 24px);
  } ;
`;

export const Icon = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #f3f1ee;
  margin: 0 auto 15px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 42px;
    height: auto;
  }
`;

export const ContainerDesc = styled(Paragraph)`
  font-size: 25px;
  margin: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
