import styled from "styled-components";

export const About = styled.div`
  @media screen and (max-width: 575px) {
    padding: 30px 0;
  }
`;

export const SectionMainTitle = styled.div`
  text-align: center;
  margin-top: 20px;
  @media screen and (max-width: 945px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 805px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 575px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 479px) {
    margin-top: 20px;
    text-align: center;
  } 
`;

export const SectionTitle = styled.div`
  text-align: center;
  @media screen and (max-width: 575px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 479px) {
    text-align: center;
  } 
`;

export const AboutVideo = styled.div`
  padding: 20px;
  display: flex;
  margin: 40px;
  justify-content: center;
  .youtube-video {
    width: 720px;
    height: 400px;
    border-radius: 18px;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      height: 300px;
    }
    @media screen and (max-width: 600px) {
      height: 250px;
    }
  }
`;

export const AboutVideoPlace = styled.div`
  width: 720px;
  height: 400px;
  background-color: #8aff8d;
  border-radius: 18px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 300px;
  }
  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;

export const AboutVideoButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  color: #fff;
  transition: color 0.2s;
  :hover {
    color: #ffbf2b;
  }
  .video-button {
    font-size: 60px;
    width: 1em;
    height: 1em;
    cursor: pointer;
  }
`;
