import styled from "styled-components";

export const TestsPageStyled = styled.div`
  padding: 0 32px;
  
`;

export const TestsPageCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 32px 0;
  
  
  
  clear: both;  
  
  &:after,&:before{
    clear: both;  
    display: table;
  }
  
  &:before{
    clear: both;
  }
  
  @media only screen and (max-width: 1024px){
    padding: 0 16px;
  }
  
  
`;