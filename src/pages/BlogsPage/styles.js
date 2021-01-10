import styled from "styled-components";

export const BlogPageStyled = styled.div`
  padding: 0 32px;
  @media only screen and (max-width: 1024px){
    padding: 0 16px;
  }
`;

export const BlogPageNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
`;

export const BlogPageNavBox = styled.p`
  font-size: 13px;
  line-height: 24px;
  font-weight: 500;
  padding: 2px 12px;
  margin-bottom: 16px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  transition: 0.5s;
  ${ props => props.active && "background-color: #00E4E3; color : white" }
  cursor: pointer;
`;

export const BlogPageCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 32px 0;
  justify-content: space-between;
`;

