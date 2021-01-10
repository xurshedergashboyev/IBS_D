import styled from "styled-components";

export const FacultiesItems = styled.div`
  max-width: 904px;
  margin: 0 auto;
  background-color: white;
`;

export const FacultiesEachItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 0 67px;
  @media screen and (max-width: 767px) {
    display: block;
    margin: 0 0 50px;
  }
`;

export const FacultiesItemInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  @media screen and (max-width: 479px) {
    display: block;
  }
  @media screen and (max-width: 767px) {
    margin: 0 0 20px;
  }
`;

export const FacultiesItemIcon = styled.div`
  position: relative;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  width: 124px;
  height: 124px;
  border-radius: 18px;
  background: #f3f1ee;
  @media screen and (max-width: 479px) {
    margin: 0 auto 10px;
  }
  @media screen and (max-width: 575px) {
    width: 82px;
    height: 82px;
  }
`;

export const FacultiesItemIconImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 62px;
    height: 62px;
  }
`;

export const FacultiesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 100%;
  align-items: flex-start;
  padding: 0 100px 0 30px;
  @media screen and (max-width: 479px) {
    justify-content: center;
    text-align: center;
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    padding: 0 0 0 20px;
  }
  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const FacultiesAction = styled.div`
  flex: 0 0 auto;
  -webkit-box-flex: 0;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

export const FacultiesDesc = styled.p`
  font-size: 18px;
`;
