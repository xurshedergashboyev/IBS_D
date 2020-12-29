import styled from 'styled-components';

export const FooterSection = styled.div `
  padding: 40px 0;
  @media screen and (max-width: 479px) {
    padding: 20px 0 40px;
  };
`;

export const FooterInner = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  };
`;

export const FooterInfo = styled.div `
  box-sizing: border-box;
  margin-right: 12px;
  margin-left: 12px;
  width: calc(33.333% - 24px);
  @media screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 12px;
  };
  @media screen and (max-width: 767px) {
    width: calc(100% - 24px);
  };
`;

export const FooterInfoItem = styled.div `
  line-height: 1.2;
  margin-bottom: 28px;
  @media screen and (max-width: 479px) {
    width: calc(100% - 24px);
    text-align: center;
  };
  @media screen and (max-width: 767px) {
    margin: 10px 12px;
    box-sizing: border-box;
  };
`;

export const FooterMap = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-left: 12px;
  margin-right: 12px;
  width: calc(66.6667% - 24px);
  iframe {
    width: 600px;
    height: 400px;
    min-height: 150px;
    border-radius: 16px;
  };
  @media screen and (max-width: 767px) {
    width: calc(100% - 24px);
    height: 200px;
    margin-bottom: 30px;
  };
`;

export const FooterBottom = styled.div `
  position: relative;
  padding: 45px 0;
  @media screen and (max-width: 767px) {
    padding: 0;
    margin: 40px 0 0;
  };
`;

export const FooterSocialList = styled.div `
  // empty
`;

export const SocialList = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  @media screen and (max-width: 767px) {
    -webkit-box-pack: center;
    justify-content: center;
  };
`;

export const FooterSocialItem = styled.div `
  display: block;
  margin: 15px;
  transition: all .3s;
`;

export const FooterDesc = styled.p `
  font-size: 16px;
`;

export const SocialItems = styled.a `
  text-decoration: none;
  color: #000;
  transition: all .3s;
  background-color: transparent;
  display: block;
  font-size: 25px;
`;

