import styled from 'styled-components';

export const About = styled.div `
  @media screen and (max-width: 575px) {
    padding: 30px 0;
  }
`;

export const SectionMainTitle = styled.div `
  text-align: center;
  margin-top: 20px;
  @media screen and (max-width: 945px) {
    margin-top: 400px;
  };
  @media screen and (max-width: 805px) {
    margin-top: 500px;
  };
  @media screen and (max-width: 575px) {
    margin-top: 400px;
    margin-bottom: 40px;
  };
  @media screen and (max-width: 479px) {
    margin-top: 500px;
    text-align: center;
  };
`;

export const SectionTitle = styled.div `
  text-align: center;
  @media screen and (max-width: 575px) {
    margin-bottom: 40px;
  };
  @media screen and (max-width: 479px) {
    text-align: center;
  };
`;

export const AboutVideo = styled.div`
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  border-radius: 18px;
  width: 720px;
  @media screen and (max-width: 575px) {
    margin: 0 auto 40px;
  };
`;

export const AboutVideoPlace = styled.div `
  background: #ffbf2b;      
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AboutVideoButton = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-decoration: none;
  color: #fff;
  transition: color .2s;
  .video-button {
    display: block;
    font-size: 60px;
    width: 1em;
    height: 1em;
  };
`;

