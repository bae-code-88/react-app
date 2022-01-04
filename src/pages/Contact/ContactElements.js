import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export const ContactBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  height: 100%;
  width: 40%;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const ContactStyledLetter = styled.h1`
  position: absolute;
  top: -160px;
  left: -2%;

  font-size: 990px;
  color: #fafafa;

  @media screen and (max-width: 1600px) {
    font-size: 770px;
    top: -150px;
  }

  @media screen and (max-width: 1366px) {
    top: -130px;
    font-size: 630px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 650px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ContactMainIntro = styled.h1`
  position: absolute;
  top: 5%;
  left: 10%;

  font-size: 7rem;
  align-self: center;
  justify-content: center;
  color: #1d1d1b;

  z-index: 1;

  @media screen and (max-width: 1600px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 1280px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 1024px) {
    top: 130%;
    font-size: 3rem;
  }
  @media screen and (max-width: 800px) {
    top: 65%;
  }

  @media screen and (max-width: 640px) {
    top: 120%;
  }

  @media screen and (max-width: 360px) {
    top: 50%;
  }
`;

export const ContactMainInfo = styled.p`
  position: absolute;
  top: 25%;
  left: 10%;

  z-index: 1;
  width: 35%;
  font-size: 16px;
  line-height: 30px;

  @media screen and (max-width: 1366px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1280px) {
    width: 28%;
  }

  @media screen and (max-width: 1024px) {
    width: 55%;
    top: 115vh;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
    top: 75%;
  }
  @media screen and (max-width: 640px) {
    width: 80%;
    top: 150%;
  }

  @media screen and (max-width: 360px) {
    top: 65%;
    font-size: 16px;
  }
`;

export const ContactIcons = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;

  @media screen and (max-width: 785px) {
    margin-left: 0;
  }
  @media screen and (max-width: 1246px) {
    margin-top: 20px;
  }
`;

export const ContactIconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;

  &:nth-child(2) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 785px) {
    margin-left: 0;
  }
  @media screen and (max-width: 1246px) {
    margin-top: 20px;
  }
`;
export const ContactIconPhone = styled(FaPhoneAlt)`
  display: block;
  font-size: 1.1rem;
  color: #a85f3f;
  margin: 0 0.9rem 0 0;
`;
export const ContactIconMail = styled(FaEnvelope)`
  display: block;
  font-size: 1.1rem;
  color: #a85f3f;
  margin: 0 0.9rem 0 0;
`;

export const ContactTitleAdress = styled.p`
  position: absolute;
  top: 50%;
  left: 10%;
  color: #a85f3f;
  font-size: 14px;
  align-self: flex-start;
`;
export const ContactAdress = styled.p`
  position: absolute;
  top: 55%;
  left: 10%;
  font-size: 14px;
`;

export const RegisterInformationTitle = styled.p`
  position: absolute;
  top: 65%;
  left: 10%;
  font-size: 14px;
  color: #a85f3f;
`;

export const RegisterInformationName = styled.p`
  position: absolute;
  top: 70%;
  left: 10%;
  font-size: 14px;
`;

export const RegisterInformationAdress = styled.p`
  position: absolute;
  top: 75%;
  left: 10%;
  font-size: 14px;
`;

export const RegisterInformationNumbers = styled.p`
  position: absolute;
  top: 80%;
  left: 10%;
  font-size: 14px;
`;

export const RegisterAccountNumber = styled.p`
  position: absolute;
  top: 85%;
  left: 10%;
  font-size: 14px;
`;

export const IconsMediaBox = styled.div`
  position: absolute;
  top: 95%;
  left: 10%;
  width: 50%;

  display: flex;
  flex-direction: row;
  justify-items: space-between;
  font-size: 14px;
`;
export const IconFacebook = styled(FaFacebookF)`
  display: block;
  font-size: 1rem;
  cursor: pointer;
  color: #1d1d1b;
`;
export const IconInstagram = styled(FaInstagram)`
  display: block;
  font-size: 1rem;
  cursor: pointer;
  color: #1d1d1b;
  margin-left: 1.8rem;
`;

export const ContactRightContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 50%;
  height: 100%;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const ContactFormBoxTitle = styled.p`
  display: block;
  font-size: 35px;
  width: 80%;
  margin: 10% 0 4% 0;
`;

export const ContactFormBoxText = styled.p`
  display: block;
  font-size: 16px;
  width: 80%;
  margin: 0 0 5% 0;
`;
export const ContactFormBox = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const ContactFormInput = styled.input`
  width: 70%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #a85f3f;
  line-height: 40px;
`;

export const ContactMessageBox = styled.textarea`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #a85f3f;
  line-height: 30px;
  resize: none;
`;

export const ContactFormButton = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background-color: #a85f3f;
  border: none;
  margin-top: 10%;
  cursor: pointer;
`;

export const ContactMapPlace = styled.div`
  position: absolute;
  top: 100vh;
  width: 80%;
  height: 120vh;
`;
