import { NavLink as LinkR } from "react-router-dom";
import { FaBars, FaFacebookF, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const shadow = "0px 10px 15px #e9e5e575";

export const Nav = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ scrollY }) => (scrollY > 50 ? "100px" : "150px")};

  display: flex;
  justify-content: center;
  align-self: center;

  z-index: 1500;
  color: #1d1d1b;
  background-color: white;
  box-shadow: ${({ scrollY }) => (scrollY > 50 ? shadow : "none")};
  transition: 0.4s ease-in-out;
  position: ${({ scrollY }) => (scrollY > 50 ? "fixed" : "absolute")};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 40%;
`;
export const NavLogoLink = styled(LinkR)`
  font-size: 40px;
  color: #1d1d1b;
  text-decoration: none;
  font-weight: 700;
`;

export const NavLink = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  font-size: 18px;
  color: #1d1d1b;
  cursor: pointer;
  letter-spacing: 1px;

  &.active {
    color: #a85f3f;
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 929px) {
    display: block;

    position: absolute;
    top: 32.5%;
    right: 10%;

    width: 40px;
    height: 40px;
    padding: 10px;

    color: white;
    background-color: #1d1d1b;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: #1d1d1b;

  width: 40%;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  color: #1d1d1b;
  font-size: 0.8rem;
  display: ${({ scrollY }) => (scrollY > 50 ? "none" : "flex")};

  @media screen and (max-width: 929px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  background: transparent;
  padding: 1.1rem;

  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #1d1d1b;

  &.active {
    color: #a85f3f;
  }

  &:hover {
    color: #a85f3f;
  }
`;

export const IconF = styled(FaFacebookF)`
  display: block;
  font-size: 1rem;
  cursor: pointer;
  color: #1d1d1b;
  margin-left: 0.45rem;

  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const IconI = styled(FaInstagram)`
  display: block;
  font-size: 1.1rem;
  cursor: pointer;
  color: #1d1d1b;

  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const Language = styled.button`
  display: block;
  align-self: center;
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  height: 60px;
  width: 45px;

  padding: 0.72rem;
  color: ${({ isActive }) => (isActive ? "#a85f3f" : "#1d1d1b")};

  &.active {
    color: #a85f3f;
  }
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 929px) {
    display: none;
  }
`;
