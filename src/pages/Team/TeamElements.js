import styled from 'styled-components'

//Header
export const TeamHeader = styled.div`
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

export const TeamHeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  height: 100%;
  width: 40%;
`
//welcome text
export const TeamHeaderLetter = styled.h1`
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

export const TeamHeaderIntroduction = styled.h1`
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

  @media screen and (max-width: 768px) {
    top: 45vh;
  }

  @media screen and (max-width: 400px) {
    top: 45vh;
    font-size: 2.5rem;
  }
`

export const TeamHeaderText = styled.p`
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
  @media screen and (max-width: 768px) {
    width: 80%;
    top: 55vh;
  }

  @media screen and (max-width: 400px) {
    top: 65%;
    font-size: 14px;
    line-height: 16px;
  }
`
//image
export const TeamHeaderRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`

export const TeamImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
  z-index: 2;

  width: 40%;
  height: 100%;

  box-shadow: 40px 30px 20px 5px #f0f1f34d;
  // overflow: hidden;

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
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 50%;
    top: 0;
  }
  @media screen and (max-width: 540px) {
    width: 80%;
    height: 50%;
  }
`

export const TeamHeaderImage = styled.img`
  width: 100%;
  height: 100%;
`

//Section

export const TeamSection = styled.article`
  position: absolute;
  top: 100vh;
  left: 0;

  height: 250vh;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    top: 75vh;
  }
  @media screen and (max-width: 768px) {
    top: 72vh;
  }
`

//Section Introduction
export const TeamSectionIntroduction = styled.p`
  font-size: 16px;
  color: #a85f3f;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`
export const TeamSectionHeadLine = styled.p`
  font-size: 28px;
  color: #1d1d1b;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`
export const TeamSectionText = styled.p`
  font-size: 14px;
`

//Section Articles about members

export const TeamSectionArticleContainer = styled.div`
  position: absolute;
  top: 20vh;
  left: 10%;

  width: 40%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 800px) {
    top: 0;
    left: 10%;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 80%;
  }

  &:nth-child(5) {
    top: 20vh;
    left: 50%;
    @media screen and (max-width: 800px) {
      top: 50vh;
      left: 10%;
    }
  }
  &:nth-child(6) {
    top: 130vh;
    left: 50%;
    @media screen and (max-width: 800px) {
      top: 100vh;
      left: 10%;
    }
  }
  &:nth-child(7) {
    top: 130vh;
    right: 0;
    @media screen and (max-width: 800px) {
      top: 150vh;
      right: 100%;
    }
  }
`
export const TeamSectionArticleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  margin-bottom: 20px;
  // background-color: yellow;
  @media screen and (max-width: 800px) {
    height: 30%;
  }
  @media screen and (max-width: 768px) {
    height: 35%;
  }
  @media screen and (max-width: 400px) {
    height: 25%;
  }
`

export const TeamBoxImage = styled.img`
  width: 60%;
  height: 100%;
  @media screen and (max-width: 800px) {
    width: 60%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    height: 100%;
  }
  @media screen and (max-width: 400px) {
    width: 50%;
    height: 100%;
  }
`
export const TeamBoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  // background-color: coral;
`
export const TeamBoxSpecialize = styled.p`
  font-size: 16px;
  color: #a85f3f;

  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`
export const TeamBoxName = styled.p`
  font-size: 28px;
`

export const TeamBoxArticle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  width: 80%;

  @media screen and (max-width: 800px) {
    height: 10vh;
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    line-height: 17px;
  }
`
