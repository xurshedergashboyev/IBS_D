import styled from "styled-components";
import { Container } from "../../styles/MainStyle";

export const BenefitsSection = styled.div`
  padding: 50px 0 0;
  @media screen and (max-width: 479px) {
    padding: 30px 0 50px;
  } ;
`;

export const BenefitsContainer = styled(Container)`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 479px) {
    margin-bottom: -20px;
    margin-top: -20px;
  } ;
`;

export const RowItem = styled.div`
  box-sizing: border-box;
  margin: 27px 12px;
  text-align: center;
  width: 350px;
  padding-bottom: 40px;
  @media screen and (max-width: 479px) {
    width: 175px;
    font-size: 14px;
    margin: 20px auto;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    width: 200px;
    font-size: 16px;
  } ;
`;

export const Icon = styled.div`
  position: relative;
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background-color: #f3f1ee;
  margin: 0 auto 15px;
  <AboutDesc / > {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const AboutDesc = styled.p`
  // empty
`;

export const IconImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: auto;
`;
