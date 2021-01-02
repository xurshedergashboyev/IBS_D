import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 320px;
  background-color: hsla(0, 0%, 100%, 0.97);
  padding: 20px 0;
  z-index: 10;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 20px 20px;
  } ;
`;

export const AllItems = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: block;
  text-decoration: none;
`;

export const Menu = styled.div`
  display: flex;
  @media screen and (max-width: 1199px) {
    display: none;
  } ;
`;

export const Item = styled.div`
  margin-right: 18px;
`;

export const Phone = styled.div`
  margin-left: 20px;
  @media screen and (max-width: 575px) {
    font-size: 16px;
  } ;
`;

export const Languages = styled.div`
  display: flex;
  margin-left: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  } ;
`;

export const Button = styled.div`
  margin-left: 20px;
  @media screen and (max-width: 575px) {
    display: none;
  } ;
`;

export const NavbarItemLink = styled.a`
  text-decoration: none;
  color: #222222;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    color: #00e4e3;
    transition: all 0.3s;
  }
`;
