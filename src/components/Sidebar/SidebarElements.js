import { NavLink as LinkR } from 'react-router-dom'

import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1550;

  width: 100%;
  height: 100%;
  background-color: #1d1d1b;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 0.6s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-500%')};
`

export const SidebarLogo = styled.h1`
  position: absolute;
  top: 2.5rem;
  left: 10%;
  background-color: transparent;
  font-size: 3rem;
  outline: none;
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 10%;
  background-color: transparent;
  font-size: 4rem;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  &:hover {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(45deg)')};
    transition: 0.1s ease-in;
  }
`

export const SidebarWrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 80%;
`
export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 5% 0 0 0;
  width: 100%;
  @media screen and (max-width: 412px) {
    margin: 15% 0;
  }
`

export const SidebarLink = styled(LinkR)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5%;

  font-size: 2rem;
  padding: 5%;

  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: #fff;

  &.active {
    color: #a85f3f;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 4%;
  }
  @media screen and (max-width: 411px) {
    font-size: 1.5rem;
    padding: 3%;
  }
`

export const SidebarBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0 0 0;
  font-size: 1.5rem;
`

export const SidebarLNG = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#a85f3f' : '#fff')};
  background-color: transparent;
  border: none;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`
