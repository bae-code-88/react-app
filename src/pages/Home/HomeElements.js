import { NavLink as LinkR } from "react-router-dom";
import styled from "styled-components";
import "../../images/projekt.jpg";
import "../../images/realizacja.jpg";
import "../../images/wnetrza.jpg";

export const HomeHeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 50%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    width: 75%;
    flex-direction: row;
    justify-content: space-between;
    margin: 45% auto 0;
  }
  @media screen and (max-width: 800px) {
    width: 70%;
    margin: 68% auto 0 auto;
  }
`;

// LETTERS
export const HomeHeaderLetterP = styled.h1`
  position: absolute;
  top: -210px;
  left: 5%;

  font-size: 900px;
  color: #fafafa;

  opacity: 0.2;
  animation: fadein linear infinite;
  animation-duration: 15s;

  @keyframes fadein {
    0% {
      opacity: 1;
    }
    28% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1600px) {
    font-size: 770px;
    top: -200px;
  }

  @media screen and (max-width: 1366px) {
    top: -170px;
    font-size: 630px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 650px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HomeHeaderLetterR = styled.h1`
  position: absolute;
  top: -210px;
  left: 5%;

  font-size: 900px;
  color: #fafafa;

  opacity: 0;
  animation: fadein linear infinite;
  animation-duration: 15s;
  animation-delay: 5s;

  @keyframes fadein {
    0% {
      opacity: 1;
    }
    28% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1600px) {
    font-size: 770px;
    top: -200px;
  }

  @media screen and (max-width: 1366px) {
    top: -170px;
    font-size: 630px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 650px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HomeHeaderLetterW = styled.h1`
  position: absolute;
  top: -210px;
  left: 0;

  font-size: 900px;
  color: #fafafa;

  opacity: 0;

  animation: fadein linear infinite;
  animation-duration: 15s;
  animation-delay: 10s;

  @keyframes fadein {
    0% {
      opacity: 1;
    }
    28% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1600px) {
    font-size: 740px;
    top: -170px;
  }

  @media screen and (max-width: 1366px) {
    top: -150px;
    font-size: 630px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 650px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

// TEXT HEADER
export const HomeHeaderTextP = styled.h1`
  font-size: 7rem;
  align-self: flex-start;
  align-items: center;
  color: #1d1d1b;

  z-index: 2;
  margin-top: 160px;
  margin-left: 20%;
  animation: color linear infinite;
  animation-duration: 15s;

  @keyframes color {
    0% {
      color: #1d1d1b;
    }
    29% {
      color: #1d1d1b;
    }
    31% {
      color: #1d1d1b1a;
    }
    90% {
      color: #1d1d1b1a;
    }
    100% {
      color: #1d1d1b;
    }
  }
  @media screen and (max-width: 1600px) {
    font-size: 5rem;
    margin-top: 90px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 1024px) {
    align-self: center;
    margin: 100px 0 0;
    font-size: 2rem;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const HomeHeaderTextR = styled.h1`
  font-size: 7rem;
  align-self: flex-start;
  align-items: center;
  margin-left: 20%;
  color: #1d1d1b1a;
  z-index: 2;

  animation: color linear infinite;
  animation-duration: 15s;
  animation-delay: 5s;

  @keyframes color {
    0% {
      color: #1d1d1b;
    }
    29% {
      color: #1d1d1b;
    }
    31% {
      color: #1d1d1b1a;
    }
    90% {
      color: #1d1d1b1a;
    }
    100% {
      color: #1d1d1b;
    }
  }
  @media screen and (max-width: 1600px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 1280px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 1024px) {
    align-self: center;
    margin: 100px 0 0;
    font-size: 2rem;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const HomeHeaderTextW = styled.h1`
  font-size: 7rem;
  align-self: flex-start;
  align-items: center;
  margin-left: 20%;
  color: #1d1d1b1a;
  z-index: 2;

  animation: color linear infinite;
  animation-duration: 15s;
  animation-delay: 10s;

  @keyframes color {
    0% {
      color: #1d1d1b;
    }
    29% {
      color: #1d1d1b;
    }
    31% {
      color: #1d1d1b1a;
    }
    90% {
      color: #1d1d1b1a;
    }
    100% {
      color: #1d1d1b;
    }
  }
  @media screen and (max-width: 1600px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 1280px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 1024px) {
    align-self: center;
    margin: 100px 0 0;
    font-size: 2rem;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

// IMAGE Header
export const HomeHeaderRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10%;

  width: 40%;
  height: 74%;
  box-shadow: 40px 30px 20px 5px #f0f1f34d;
  overflow: hidden;

  @media screen and (max-width: 1600px) {
    width: 39%;
    right: 11%;
  }

  @media screen and (max-width: 1366px) {
    width: 45%;
  }

  @media screen and (max-width: 1280px) {
    width: 48%;
  }

  @media screen and (max-width: 1024px) {
    top: 80px;
    right: 10%;

    width: 80%;
    height: 70%;
  }
  @media screen and (max-width: 800px) {
    top: 80px;
    right: 10%;

    width: 80%;
    height: 50%;
  }
  @media screen and (max-width: 640px) {
    width: 80%;
    height: 70%;
  }
  @media screen and (max-width: 540px) {
    width: 80%;
    height: 50%;
  }
`;

export const ImageP = styled.img`
  height: 100%;
  width: 125%;

  animation: fadein linear infinite;
  animation-duration: 15s;

  @keyframes fadein {
    0% {
      opacity: 1;
    }
    28% {
      opacity: 1;
    }
    31% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const ImageR = styled.img`
  width: 110%;
  height: 100%;
  background-position: cover;

  opacity: 0;
  animation: fadein linear infinite;
  animation-duration: 15s;
  animation-delay: 5s;

  @keyframes fadein {
    0% {
      opacity: 1;
    }
    28% {
      opacity: 1;
    }
    31% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 540px) {
    height: 100%;
  }
`;
export const ImageW = styled.img`
  width: 100%;
  height: 100%;
  background-position: cover;

  opacity: 0;
  animation: fadein linear infinite;
  animation-duration: 15s;
  animation-delay: 10s;

  @keyframes fadein {
    0% {
      opacity: 1;
    }
    28% {
      opacity: 1;
    }
    31% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// ARTICLE

export const HomeArticle = styled.article`
  position: absolute;
  top: 70%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  color: #1d1d1b;

  @media screen and (max-width: 1024px) {
    top: 90%;
  }
  @media screen and (max-width: 800px) {
    flex-direction: row-reverse;
    top: 50%;
  }
  @media screen and (max-width: 640px) {
    top: 140%;
  }
  @media screen and (max-width: 540px) {
    top: 60%;
  }
`;

export const HomeAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 50%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const HomeManImage = styled.img`
  width: 65%;
  @media screen and (max-width: 800px) {
    margin-right: -40%;
    width: 140%;
  }
  @media screen and (max-width: 640px) {
    margin-right: -40%;
    width: 110%;
  }
`;

export const HomeArticleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 10%;
  }
`;

export const HomeArticleIntroduction = styled.p`
font size:18px;
color:#a85f3f;
align-self:flex-start;
margin-bottom:20px;
letter-spacing:1px;
`;

export const HomeArticleHeadline = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
  color: #1d1d1b;
  @media screen and (max-width: 768px) {
    width: 120%;
    margin-left: 20%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const HomeArticleText = styled.p`
color: #1d1d1b;
font size:14px;
line-height:30px;
`;

export const HomeButton = styled(LinkR)`
  display: flex;
  align-self: flex-start;
  color: #a85f3f;

  width: 200px;
  padding: 50px 0;
  text-decoration: none;
  transition: 0.4s ease-in-out;

  &:hover {
    width: 400px;
  }
`;
export const Line = styled.div`
  height: 100%;
  width: 20%;
  border-bottom: 1px solid #a85f3f;
  margin-right: 30px;
`;

export const ButtonText = styled.p`
font size:14px;
width:80%;
letter-spacing:1px;
`;

// GALLERY
export const HomeGallery = styled.section`
  position: absolute;
  top: 140%;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 208%;
  width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 1280px) {
    top: 135%;
  }
  @media screen and (max-width: 1024px) {
    top: 155%;
  }
  @media screen and (max-width: 800px) {
    top: 140%;
  }
  @media screen and (max-width: 640px) {
    top: 260%;
    height: 500%;
  }
  @media screen and (max-width: 540px) {
    top: 135%;
    height: 210%;
  }
  @media screen and (max-width: 400px) {
    top: 145%;
    height: 200%;
  }
`;

export const HomeGalleryIntroduction = styled.p`
  align-self: center;

  color: #a85f3f;
  letter-spacing: 1px;

  position: absolute;
  top: 12%;
  @media screen and (max-width: 800px) {
    top: 4%;
  }

  &:nth-child(2) {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 100px;
    color: #1d1d1b;
    margin-top: 1%;

    @media screen and (max-width: 800px) {
      top: 5%;
    }
    @media screen and (max-width: 640px) {
      font-size: 50px;
    }
    @media screen and (max-width: 540px) {
      position: absolute;
      top: 5%;
    }
  }
`;
export const GalleryStripe = styled.div`
  height: 110vh;
  width: 100%;

  transform: skewY(-14deg);
  background-color: rgb(243, 243, 243);
  margin-top: 5%;

  @media screen and (max-width: 800px) {
    height: 150vh;
  }
  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const GalleryImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  position: absolute;
  width: 100%;

  top: 35%;
  left: 0;

  &:nth-child(4) {
    top: 40%;

    @media screen and (max-width: 800px) {
      top: 47%;
    }
    @media screen and (max-width: 540px) {
      top: 37%;
    }
  }
  @media screen and (max-width: 800px) {
    top: 10%;
    flex-direction: column;
  }
`;

export const GalleryImage = styled.img`
  z-index: 1;
  width: 35%;
  margin: 1% 5%;
  box-shadow: 40px 30px 20px 5px #a0a1a34a;
  align-self: flex-center;

  // &:hover {
  //   width: 35.2%;
  //   transition: 0.4s ease-in-out;
  //   cursor: pointer;
  // }

  @media screen and (max-width: 800px) {
    width: 80%;
    margin: 2% 0 0;
  }
`;

export const GalleryLine = styled.div`
  width: 50%;
  height: 60px;
  border-right: 1px solid #a85f3f;
  z-index: 1;
  position: absolute;
  bottom: 13%;

  @media screen and (max-width: 800px) {
    height: 100px;
    bottom: 18%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HomeGalleryButtonContainer = styled.button`
  z-index: 1;
  width: 190px;
  height: 50px;
  align-self: center;

  margin-top: 2%;
  border: 1px solid #a85f3f;
  background-color: white;

  position: absolute;
  bottom: 8%;

  @media screen and (max-width: 800px) {
    bottom: 15%;
  }
  @media screen and (max-width: 768px) {
    bottom: 10%;
  }
  @media screen and (max-width: 500px) {
    bottom: 25%;
  }
`;

export const HomeGalleryButton = styled.a`
  font-size: 16px;
  height: 50px;
  width: 190px;
  display: block;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  color: #a85f3f;
`;
