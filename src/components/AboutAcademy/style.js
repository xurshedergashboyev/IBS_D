import styled from 'styled-components';
import AboutVideoImage from '../../assets/images/aboutAcademyImage.jpg';

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
  margin: 0 auto 95px;
  border-radius: 18px;
  @media screen and (max-width: 575px) {
    margin: 0 auto 40px;
  };
`;

export const AboutVideoButton = styled.div `
  background-image: url(${AboutVideoImage});      
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

