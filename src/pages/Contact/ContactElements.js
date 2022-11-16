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
  @media screen and (max-width: 1024px) {
    height: 150%;
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
    top: 10%;
    font-size: 3rem;
  }
  @media screen and (max-width: 640px) {
    top: 30vh;
  }
  @media screen and (max-width: 500px) {
    top: 20vh;
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
    width: 45%;
  }

  @media screen and (max-width: 1024px) {
    width: 55%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    width: 70%;
    top: 45vh;
    line-height: 25px;
  }
  @media screen and (max-width: 640px) {
    width: 70%;
    top: 50vh;
    line-height: 25px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 17px;
    top: 30vh;
    width: 80%;
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

  @media screen and (max-width: 1024px) {
    top: 35%;
  }
  @media screen and (max-width: 785px) {
    margin-left: 0;
  }
  @media screen and (max-width: 640px) {
    top: 70vh;
  }
  @media screen and (max-width: 500px) {
    top: 40vh;
    font-size: 14px;
    flex-wrap: wrap;
  }
`;

export const ContactIconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;

  &:nth-child(2) {
    margin-left: 1rem;
    @media screen and (max-width: 500px) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 1246px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 785px) {
    margin-left: 0;
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

//informacje o firmie
export const ContactAdressRegistersInformation = styled.div`
  position: absolute;
  // background-color: yellow;
  height: 25vh;
  width: 40%;
  top: 40vh;
  left: 10%;

  @media screen and (max-width: 1024px) {
    width: 80%;
    top: 40vh;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
    top: 80vh;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    top: 95vh;
  }
  @media screen and (max-width: 500px) {
    top: 130vh;
  }
`;

export const ContactTitleAdress = styled.p`
  color: #a85f3f;
  font-size: 14px;
  margin-bottom: 20px;
`;
export const ContactAdress = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const RegisterInformationTitle = styled.p`
  font-size: 14px;
  color: #a85f3f;
  margin-bottom: 20px;
`;

export const RegisterInformationName = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const RegisterInformationAdress = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const RegisterInformationNumbers = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const RegisterAccountNumber = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
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
  @media screen and (max-width: 800px) {
    display: none;
  }
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
    top: 65vh;
  }
  @media screen and (max-width: 1024px) {
    top: 80vh;
  }
  @media screen and (max-width: 800px) {
    top: 30vh;
  }
  @media screen and (max-width: 500px) {
    top: 50vh;
  }
`;

export const ContactFormBoxTitle = styled.p`
  display: block;
  font-size: 35px;
  width: 80%;
  margin: 10% 0 4% 0;
  @media screen and (max-width: 640px) {
    margin: 10% 0 0;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
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
  height: 100vh;
  @media screen and (max-width: 1280px) {
    top: 160vh;
  }
  @media screen and (max-width: 1024px) {
    top: 180vh;
  }
  @media screen and (max-width: 800px) {
    top: 110vh;
    height: 70vh;
  }
  @media screen and (max-width: 768px) {
    top: 125vh;
    height: 50vh;
  }

  @media screen and (max-width: px) {
    top: 310vh;
    height: 150vh;
  }
  @media screen and (max-width: 400px) {
    top: 190vh;
    height: 70vh;
  }
`;
