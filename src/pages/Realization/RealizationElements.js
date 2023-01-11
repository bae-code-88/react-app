import styled from 'styled-components'

// Header
export const RealizationHeader = styled.div`
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

export const RealizationHeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  height: 100%;
  width: 40%;
`
export const RealizationHeaderLetter = styled.h1`
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
export const RealizationHeaderIntroduction = styled.h1`
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
    top: 55%;
  }

  @media screen and (max-width: 360px) {
    top: 50%;
  }
`
export const RealizationHeaderText = styled.p`
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
    top: 65%;
    font-size: 16px;
  }

  @media screen and (max-width: 360px) {
    top: 65%;
  }
`

export const RealizationHeaderRightContainer = styled.div`
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

//Section

export const RealizationSection = styled.div`
  position: absolute;
  top: 110vh;
  left: 0;
  width: 100%;
  height: 250vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1024px) {
    top: 140vh;
  }

  @media screen and (max-width: 800px) {
    top: 85vh;
  }
`
export const RealizationSectionIntroduction = styled.h1`
  font-size: 3rem;
  text-align: center;

  @media screen and(max-width:800px) {
    font-size: 2.5rem;
  }
  @media screen and(max-width:640px) {
    font-size: 2rem;
  }
`
export const RealizationButtonContainer = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const RealizationButton = styled.button`
  font-size: 16px;
  width: 140px;
  height: 30px;
  margin: 15px;

  color: ${({ isActive, name }) => (isActive === name ? '#a85f3f' : '#1d1d1b')};
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  &@media screen and (max-width:360px) {
    font-size: 14px;
    padding: 10px;
    margin: 0;
  }
`

export const ImagesContainer = styled.div`
  position: absolute;
  top: 35vh;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    top: 25vh;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    height: 80%;
  }

  @media screen and (max-width: 800px) {
    top: 20vh;
  }
  @media screen and (max-width: 770px) {
    top: 35vh;
  }
  @media screen and (max-width: 640px) {
    top: 25vh;
  }
`

export const ImageBox = styled.div`
  width: 35%;
  height: 20%;
  margin-left: 5%;
  margin-right: 5%;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    height: 20%;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
  }
`

export const ImageReal = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.7;
  }
`
