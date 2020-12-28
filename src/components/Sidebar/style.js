import styled from 'styled-components';

export const MainWrapper = styled.div `
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;

export const SideWrapper = styled.div `
  width: 720px;
  min-width: 720px;
  height: 100%;
  background-color: #ffbf2b;
  @media screen and (max-width: 1024px) {
    min-width: 375px;
    width: 375px;
  }
  @media screen and (max-width: 667px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const SideWrapperInner = styled.div `
  padding: 20px 40px 32px 136px;
  position: relative;
  width: 100%;
  background-color: #ffbf2b;
  
  @media screen and (max-width: 1024px) {
    padding-left: 20px;
  }
`;

export const Buttons = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const MainButtons = styled.div `
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const CloseButton = styled.div `
  font-size: 20px;
  margin-left: 20px;
  @media screen and (max-width: 1024px) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    right: 5px;
  }
`

export const SideContent = styled.div `
  margin: 0 0 24px;
  font-size: 25px;
  font-weight: 600;
  line-height: 40px;
  border-bottom: 2px solid #000;
  padding-bottom: 40px;
`;

export const SideExtraContent = styled.div `
  margin: 0;
  padding: 24px 0 52px;
  font-size: 20px;
  line-height: 36px;
  font-weight: 500;
  
`;

export const SideExtra = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -20px;
  @media screen and (max-width: 1024px) {
    margin-top: -20px;
  }
`;

export const SideExtraItems = styled.div `
  display: flex;
  align-items: center;
  :last-child {
    margin-left: 20px;
  }
`

export const SideExtraSpan = styled.span `
  margin-left: 5px;
  font-size: 14px;
  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }
`

export const SideExtraContentItems = styled.a `
  display: block;
  margin-top: 0;
  color: black;
  text-decoration: none;
  :hover {
  text-decoration: underline;
  cursor: pointer;
}
`;

export const SideContentItems = styled.a `
  display: block;
  color: black;
  margin-top: 12px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  };
`;