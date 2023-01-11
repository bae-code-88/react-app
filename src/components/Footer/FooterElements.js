import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export const FooterContainer = styled.div`
  position: absolute;
  top: 400%;
  right: 0;

  display: flex;
  justify-content: center;
  align-self: center;

  width: 100%;
  height: 300px;

  @media screen and (max-width: 1280px) {
    top: 410%;
  }
  @media screen and (max-width: 1024px) {
    top: 400%;
  }
  @media screen and (max-width: 800px) {
    top: 360%;
  }
  @media screen and (max-width: 785px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 640px) {
    top: 800vh;
  }
  @media screen and (max-width: 540px) {
    top: 350vh;
  }
`

export const FooterLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 40%;

  @media screen and (max-width: 785px) {
    width: 80%;
  }
`

export const LeftText = styled.p`
  align-self: flex-start;
  color: #a85f3f;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  margin-bottom: 20px;
`

export const LeftHeadline = styled.h1`
  color: #1d1d1b;
  width: 100%;
  align-self: flex-start;
  font-size: 55px;
`

export const LeftTextLittle = styled.p`
  color: #1d1d1b;
  align-self: flex-start;
  font-size: 14px;
  margin-top: 50px;
  @media screen and (max-width: 785px) {
    display: none;
  }
`

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 200px solid #1d1d1b;
  border-left: 750px solid transparent;
  align-self: flex-end;

  @media screen and (max-width: 1600px) {
    border-bottom: 200px solid #1d1d1b;
    border-left: 650px solid transparent;
  }

  @media screen and (max-width: 1500px) {
    border-bottom: 150px solid #1d1d1b;
    border-left: 600px solid transparent;
  }
  @media screen and (max-width: 1366px) {
    border-bottom: 100px solid #1d1d1b;
    border-left: 550px solid transparent;
  }
  @media screen and (max-width: 1246px) {
    display: none;
  }
`

export const FooterRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  width: 40%;

  @media screen and (max-width: 785px) {
    width: 80%;
    align-items: flex-start;
    margin-top: 50px;
  }
`

export const FooterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #1d1d1b;
  font-size: 0.8rem;

  @media screen and (max-width: 785px) {
    align-items: flex-start;
  }
`

export const FooterBtnLink = styled.a`
  background: transparent;

  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #1d1d1b;

  &:hover {
    color: #a85f3f;
  }
`

export const IconF = styled(FaFacebookF)`
  display: block;
  font-size: 1rem;
  cursor: pointer;
  color: #1d1d1b;
  margin-right: 1.8rem;
`

export const IconI = styled(FaInstagram)`
  display: block;
  font-size: 1.1rem;
  cursor: pointer;
  color: #1d1d1b;
`

export const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;

  @media screen and (max-width: 1246px) {
    flex-direction: column;
    align-items: flex-end;
  }
  @media screen and (max-width: 785px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`

export const FooterContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  margin-left: 0.9rem;

  @media screen and (max-width: 785px) {
    margin-left: 0;
  }
  @media screen and (max-width: 1246px) {
    margin-top: 20px;
  }
`

export const IconPhone = styled(FaPhoneAlt)`
  display: block;
  font-size: 1.1rem;
  cursor: pointer;
  color: #a85f3f;
  margin: 0 0.9rem 0 0;
`

export const IconMail = styled(FaEnvelope)`
  display: block;
  font-size: 1.1rem;
  cursor: pointer;
  color: #a85f3f;
  margin: 0 0.9rem 0 0;
`

export const FooterAdres = styled.p`
  font-size: 14px;
  margin-top: 1.5rem;
`

export const DesignRealisation = styled.div`
  margin-top: 4rem;
  font-size: 14px;
  color: #1d1d1b;

  @media screen and (max-width: 1246px) {
    font-size: 18px;
  }
`

export const DesignerLink = styled.a`
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #a85f3f;
  @media screen and (max-width: 1246px) {
    padding: 30px 0;
  }
`
