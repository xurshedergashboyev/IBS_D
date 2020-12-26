import styled from 'styled-components'

export const Wrapper = styled.div `
  display: flex;
  min-height: 100vh;
  position: relative;
  min-width: 320px;
  text-align: center;
`


export const  Container = styled.div `
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
  }
  
`

export const Heading = styled.h3`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  color: #000;
  padding: 0;
  margin: 0;
  
  
  .heading-lg {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 12px;
    
    
    @media screen and (max-width: 479px) {
      margin: 0 0 5px;
    }

    @media screen and (max-width: 575px) {
      font-size: 25px;
    }
    
    
  }
`

export const HeadingDesc = styled.div `
  max-width: 540px;
  margin: 0 auto;
  padding-top: 10px;
  
  
  @media screen and (max-width: 479px) {
    font-size: 16px;
  }
`


