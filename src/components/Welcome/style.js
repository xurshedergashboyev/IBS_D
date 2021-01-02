import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  margin: 50px;
`;

export const WelcomeInner = styled.div`
  width: 1040px;
  height: 500px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1040px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  background-color: #e0e0e0;
  margin: 0 auto;
  border-radius: 18px;
`;

export const WelcomeContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const WelcomeHeading = styled.h1`
  font-size: 36px;
  padding-left: 20px;
  font-weight: 700;
  color: #000;
`;

export const WelcomeParagraph = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding-left: 20px;
  line-height: 1.5;
  @media screen and (max-width: 1040px) {
    font-size: 18px;
  }

`;

export const WelcomeImage = styled.div `
  padding: 20px;
  display: flex;
  align-items: flex-end;
`;

export const WelcomeAuthor = styled.img `
  width: 467px;
  height: 412px;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 1040px) {
    width: 400px;
    height: auto;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`
