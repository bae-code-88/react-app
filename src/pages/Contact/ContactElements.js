import styled from "styled-components";

export const ContactBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: row;
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
`;

export const ContactStyledLetter = styled.h1`
  position: absolute;
  top: -200px;
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
  top: 30%;
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
  top: 55%;
  left: 10%;

  z-index: 1;
  width: 35%;
  font-size: 20px;
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
