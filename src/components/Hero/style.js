import styled from 'styled-components';


export const WrapperInner = styled.div `
  display: flex;
  flex-grow: 1;
  -webkit-box-flex: 1;
  flex-shrink: 1;
  flex-basis: auto;
  min-height: 1px;
  padding: 90px 0 0;
`;

export const Lead = styled.div `
  padding: 35px 0 10px;
  margin: 0 auto;
`;

export const HeroBoth = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 667px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const HeroSection = styled.div `
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
        font-size: .75rem;
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

export const HeroTitle = styled.h1 `
  position: relative;
  max-width: 750px;
  margin: 0 auto;
  font-size: 65px;
  font-weight: 700;
  line-height: 1.5;
  @media screen and (max-width: 667px) {
    text-align: center;
} 
  
  @media screen and (max-width: 991px) {
    font-size: 45px;
  };
  @media screen and (max-width: 550px) {
    font-size: 40px;
  };
`;

export const BtnGroups = styled.div `
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

export const FormSection = styled.div `
  width: 390px;
  height: 394px;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 18px;
  position: relative;
  @media screen and (max-width: 667px) {
    margin-top: 100px;
    margin-left: 0;
  }
  
  ::before {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 10vw;
    height: 10vw;
    min-width: 75px;
    min-height: 75px;
    border-radius: 100%;
    border: 3px solid #000000;
    z-index: -1;
    right: -14%;
    bottom: -14%;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 667px) {
      display: none;
    }
  }
  
  ::after {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 10vw;
    height: 10vw;
    min-width: 150px;
    min-height: 150px;
    right: -20%;
    bottom: -12%;
    border-radius: 100%;
    background-color: #ffbf2b;
    z-index: -2;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 667px) {
      display: none;
    }
  }
  
  .Intro__svg {
    fill: #000000;
    color: #000000;
    position: absolute;
    height: 200px;
    top: -30px;
    left: -70px;
    z-index: -1;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 667px) {
      display: none;
    }
  }
`;

export const FormSectionText = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const FormSectionTitle = styled.h1 `
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  background-image: linear-gradient(transparent 0,transparent 55%, hsl(4deg 65% 85%) 55%, hsl(4deg 65% 85%)    90%,transparent 90%,transparent 100%);
  background-repeat: no-repeat;
  background-size: 90%;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  
`;

export const FormSectionDesc = styled.p `
  font-size: 16px;
  color: #000;
  margin-top: 0;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`

export const Form = styled.form `
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled.input `
  background-color: white;
  border-radius: 16px;
  width: 75%;
  height: 30px;
  border: none;
  margin: 5px;
  font-family: 'Mazzard', sans-serif;
  padding: 5px 10px 5px;
  ::placeholder {
    padding-left: 5px;
    font-family: 'Mazzard', sans-serif;
  }
  
  :focus {
    border-radius: 16px;
    border: 3px solid #ffbf2b;
    outline: none;
  }
`;

