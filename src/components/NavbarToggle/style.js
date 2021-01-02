import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 10%;
  right: ${({ open }) => (open ? "0" : "2rem")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
  @media screen and (max-width: 1024px) {
    right: ${({ open }) => (open ? "2rem" : "1rem")};
  }
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#000" : "#000")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      width: 1.5rem;
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  :focus {
    outline: none;
  }
`;
