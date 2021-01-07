import styled from "styled-components";
import { Container } from '../../styles/MainStyle'

export const WrapperInner = styled.div`
  display: flex;
  min-height: 1px;
  padding: 90px 0 0;
`;

export const Lead = styled.div`
  padding: 35px 0 10px;
  margin: 0 auto;
`;

export const HeroBoth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
  }
`;

export const HeroContainer = styled(Container) `
  @media screen and (max-width: 450px) {
    padding: 0;
  }
`

export const HeroSection = styled.div`
  margin: 0 auto;
  .all {
    display: block;
    margin-top: 0;
    @media screen and (max-width: 667px) {
      text-align: center;
    }
    .secondary {
      position: relative;
      display: inline-flex;
    }
    .span {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 0.75rem;
      }
    }
    svg {
      width: 10rem;
      fill: #fff;
      z-index: -1;
      :hover {
        fill: #ffbf2b;
      }
      @media screen and (max-width: 667px) {
        width: 8rem;
      }
    }
  }
`;

export const HeroTitle = styled.h1`
  position: relative;
  max-width: 750px;
  margin: 0 auto;
  font-size: 65px;
  font-weight: 700;
  line-height: 1;
  padding-bottom: 30px;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    font-size: 45px;
  }
  @media screen and (max-width: 550px) {
    font-size: 40px;
  } ;
`;

export const FirstSpan = styled.span``;

export const SecondSpan = styled.span`
  font-family: "Margo", sans-serif;
  font-size: 100px;
  -webkit-text-fill-color: #00e4e3;
`;

export const ThirdSpan = styled.span`
  font-family: "Hello", sans-serif;
  font-size: 100px;
  -webkit-text-fill-color: #ffbf2b;
`;

export const FourthSpan = styled.span`
  background-image: linear-gradient(
    transparent 0,
    transparent 55%,
    #8aff8d 55%,
    #8aff8d 90%,
    transparent 90%,
    transparent 100%
  );
  background-position: 70%;
  background-repeat: no-repeat;
  font-family: "Recoleta", sans-serif;
`;
