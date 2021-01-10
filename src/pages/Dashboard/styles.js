import styled from "styled-components";

export const DashboardStyled = styled.div`
  width: calc(100% - 110px);
  margin: 0 0 0 100px;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  *{
    box-sizing: border-box;
  }
  
  @media only screen and (max-width: 1024px){
    width: 100%;
    margin: 0;
  }
`;