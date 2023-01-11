import styled from 'styled-components'

export const OfferHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const OfferHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  height: 100%;
  width: 40%;
`

export const OfferHeaderLetter = styled.h1`
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
`

export const OfferHeaderIntroduction = styled.h1`
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

  @media screen and (max-width: 500px) {
    top: 53%;
  }
`

export const OfferHeaderText = styled.p`
  position: absolute;
  top: 55%;
  left: 10%;

  z-index: 1;
  width: 35%;
  font-size: 18px;
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

  @media screen and (max-width: 500px) {
    top: 65%;
    font-size: 16px;
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
  z-index: 2;

  width: 40%;
  height: 100%;

  box-shadow: 40px 30px 20px 5px #f0f1f34d;
  overflow: hidden;

  @media screen and (max-width: 1600px) {
    width: 39%;
    right: 11%;
  }

  @media screen and (max-width: 1366px) {
    width: 46%;
  }

  @media screen and (max-width: 1280px) {
    width: 48%;
  }

  @media screen and (max-width: 1024px) {
    top: 80px;
    right: 13%;

    width: 75%;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    top: 80px;
    right: 10%;

    width: 80%;
    height: 50%;
  }
  @media screen and (max-width: 640px) {
    width: 80%;
    height: 110%;
    top: 0;
  }
  @media screen and (max-width: 540px) {
    width: 80%;
    height: 50%;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`

// Introduction

export const OfferIntroduction = styled.article`
  position: absolute;
  top: 40%;
  left: 0;

  width: 100%;
  height: 200vh;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    top: 70vh;
  }
  @media screen and (max-width: 800px) {
    top: 50vh;
  }
  @media screen and (max-width: 640px) {
    top: 130vh;
  }
  @media screen and (max-width: 500px) {
    top: 35vh;
  }
`

export const OfferStripeIntroduction = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  transform: skewY(-14deg);
  background-color: rgb(243, 243, 243);
  opacity: 0.6;
  margin-top: 5%;

  width: 100%;
  height: 80vh;

  @media screen and (max-width: 1600px) {
    height: 85vh;
  }
  @media screen and (max-width: 800px) {
    top: 10vh;
    height: 65vh;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`

export const OfferIntroductionHeadline = styled.p`
position:absolute;
top:35%;
left:0;

font-size:18px;
align-self:center;
justify-content:center;

width:100%;
text-align:center;
text-transform:uppercase;
letter-spacing:1px;
color:#a85f3f;


@media screen and (max-width:1600px){
    font-size:18px; 
}
@media screen and (max-width:1024px){
    top:70vh;
}
@media screen and (max-width:800px){
    top:30vh;
}
@media screen and (max-width:640px){
    top:45vh;
}
@media screen and (max-width:500px){
    top:50vh;
    font-size:14px; 

`

export const OfferIntro = styled.h1`
  position: absolute;
  top: 40%;
  left: 25%;
  width: 50%;

  font-size: 3rem;
  justify-content: center;
  text-align: center;
  color: #1d1d1b;
  z-index: 1;

  @media screen and (max-width: 1600px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 1024px) {
    top: 75vh;
  }
  @media screen and (max-width: 800px) {
    top: 35vh;
    left: 10%;
    width: 80%;
  }
  @media screen and (max-width: 640px) {
    top: 55vh;
  }
  @media screen and (max-width: 500px) {
    top: 55vh;
    font-size: 20px;
  }
`

export const OfferText = styled.p`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 50%;

  font-size: 18px;
  text-align: center;
  color: #1d1d1b;
  line-height: 30px;
  margin-top: 20px;

  @media screen and (max-width: 1600px) {
    top: 95vh;
  }
  @media screen and (max-width: 1024px) {
    top: 100vh;
  }
  @media screen and (max-width: 800px) {
    top: 50vh;
    left: 10%;
    width: 80%;
  }
  @media screen and (max-width: 640px) {
    top: 100vh;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`

// Article
export const OfferArticleContainer = styled.article`
  position: absolute;
  top: 120vh;
  left: 0;
  width: 100%;
  height: 300vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    top: 150vh;
  }
  @media screen and (max-width: 800px) {
    top: 70vh;
  }
  @media screen and (max-width: 640px) {
    top: 270vh;
    height: 500vh;
  }
  @media screen and (max-width: 500px) {
    height: 290vh;
    top: 65vh;
  }
`

export const OfferArticleLeft = styled.div`
  position: absolute;
  top: 40vh;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    top: 30vh;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    top: 40vh;
  }
  @media screen and (max-width: 360px) {
    top: 0;
  }
`

export const OfferArticleLeftImageContainer = styled.div`
  position: absolute;
  top: 25vh;
  right: 10%;
  width: 40%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-self: center;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    top: 70vh;
    width: 80%;
    height: 40%;
    right: 10%;
  }
  @media screen and (max-width: 640px) {
    top: 120vh;
    height: 50%;
  }

  @media screen and (max-width: 500px) {
    top: 90vh;
    width: 80%;
    height: 40%;
  }
`

export const ImageLeft = styled.img`
  width: 100%;
  height: 100%;
`
export const OfferArticleLeftContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  width: 35%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 800px) {
    width: 80%;
    right: 10%;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    align-items: flex-start;
    top: 0;
  }
`
export const OfferArticleLeftHeadline = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`
export const OfferArticleLeftText = styled.p`
  font-size: 18px;
  line-height: 35px;
  width: 100%;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`

export const OfferArticleRight = styled.div`
  position: absolute;
  top: 150vh;
  right: 0;

  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    top: 165vh;
  
`
export const OfferArticleRightImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;

  width: 40%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    top: 60vh;
    width: 80%;
    height: 30%;
    right: 10%;
  }
  @media screen and (max-width: 640px) {
    top: 240vh;
    height: 30%;
  }
  @media screen and (max-width: 360px) {
    display: none;
  }
`
export const ImageRight = styled.img`
  width: 95%;
  height: 100%;
  align-self: flex-start;
  @media screen and (max-width: 500px) {
    display: none;
  }
`
export const OfferArticleRightContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10%;

  width: 40%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 800px) {
    top: 10vh;
    width: 80%;
    right: 10%;
    align-items: center;
  }
  @media screen and (max-width: 640px) {
    top: 100vh;
    height: 60%;
  }
  @media screen and (max-width: 500px) {
    top: 0;
    align-items: flex-start;
  }
`

export const OfferArticleRightHeadline = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`

export const OfferArticleRightText = styled.p`
  font-size: 18px;
  line-height: 35px;
  width: 95%;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`
