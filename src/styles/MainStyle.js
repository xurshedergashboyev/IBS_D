import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MainWrapper = styled.div`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 100%;
  .desktop {
    position: absolute;
    top: 140px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    display: block;
    @media screen and (max-width: 800px) {
      display: none;
    }
    .cls-1 {
      animation: fadeIn 0s forwards;
      opacity: 0;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  min-width: 320px;
  text-align: center;
`;

export const Container = styled.div`
  position: relative;
  width: 1170px;
  min-width: 320px;
  padding: 0 40px;
  margin: 0 auto;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0 20px;
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
  } ;
`;

export const Heading = styled.h3`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  color: #000;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 479px) {
    margin: 0 0 5px;
  }
  @media screen and (max-width: 575px) {
    font-size: 28px;
  } ;
`;

export const HeadingDesc = styled.div`
  max-width: 540px;
  margin: 10px auto;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 479px) {
    font-size: 16px;
  } ;
`;

export const Paragraph = styled.p`
  font-size: 16px;
`;

export const BtnGroups = styled.div`
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const MainButton = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  letter-spacing: 0;
  padding: 12px 22px;
  color: #000;
  background-color: #ffbf2b;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
`;
