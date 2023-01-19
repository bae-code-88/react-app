import { useTranslation } from 'react-i18next'

import projekt from '../../images/projekt.jpg'
import realizacja from '../../images/realizacja.jpg'
import wnetrza from '../../images/wnetrza.jpg'

import man from '../../images/man.png'
import proj1 from '../../images/proj1.png'
import proj2 from '../../images/proj2.png'
import proj3 from '../../images/proj3.png'
import proj4 from '../../images/proj4.png'

import {
  HomeHeaderLeftContainer,
  HomeHeaderRightContainer,
  HomeHeaderTextP,
  HomeHeaderTextR,
  HomeHeaderTextW,
  ImageContainer,
  HomeHeaderLetterP,
  HomeHeaderLetterR,
  HomeHeaderLetterW,
  ImageP,
  ImageR,
  ImageW,
  HomeArticle,
  HomeArticleIntroduction,
  HomeArticleHeadline,
  HomeArticleText,
  HomeButton,
  HomeAside,
  HomeArticleSection,
  HomeManImage,
  Line,
  ButtonText,
  HomeGallery,
  HomeGalleryIntroduction,
  GalleryStripe,
  GalleryLine,
  GalleryImage,
  GalleryImageContainer,
  HomeGalleryButtonContainer,
  HomeGalleryButton,
} from './HomeElements'

const Home = (props) => {
  const { t } = useTranslation()
  const letters = ['P', 'R', 'W']

  return (
    <>
      <HomeHeaderLeftContainer>
        <HomeHeaderTextP>{t('HomeHeaderTextP')}</HomeHeaderTextP>
        <HomeHeaderTextR>{t('HomeHeaderTextR')}</HomeHeaderTextR>
        <HomeHeaderTextW>{t('HomeHeaderTextW')}</HomeHeaderTextW>
        <HomeHeaderLetterP>{letters[0]}</HomeHeaderLetterP>
        <HomeHeaderLetterR>{letters[1]}</HomeHeaderLetterR>
        <HomeHeaderLetterW>{letters[2]}</HomeHeaderLetterW>
      </HomeHeaderLeftContainer>

      <HomeHeaderRightContainer>
        <ImageContainer>
          <ImageP src={projekt}></ImageP>
        </ImageContainer>
        <ImageContainer>
          <ImageR src={realizacja}></ImageR>
        </ImageContainer>
        <ImageContainer>
          <ImageW src={wnetrza}></ImageW>
        </ImageContainer>
      </HomeHeaderRightContainer>

      <HomeArticle>
        <HomeAside>
          <HomeManImage src={man}></HomeManImage>
        </HomeAside>

        <HomeArticleSection>
          <HomeArticleIntroduction>{t('HomeWprowadzenie')}</HomeArticleIntroduction>
          <HomeArticleHeadline>{t('HomeHeadline')}</HomeArticleHeadline>
          <HomeArticleText>{t('HomeText')}</HomeArticleText>
          <HomeButton to='/oferta'>
            <Line></Line>
            <ButtonText>{t('HomeButtonOffer')}</ButtonText>
          </HomeButton>
        </HomeArticleSection>
      </HomeArticle>

      <HomeGallery>
        <HomeGalleryIntroduction>{t('HomeIntroductionSelected')}</HomeGalleryIntroduction>
        <HomeGalleryIntroduction>
          {t('HomeIntroductionSelectedRealizations')}
        </HomeGalleryIntroduction>

        <GalleryImageContainer>
          <GalleryImage src={proj1}></GalleryImage>
          <GalleryImage src={proj2}></GalleryImage>
          <GalleryImage src={proj3}></GalleryImage>
          <GalleryImage src={proj4}></GalleryImage>
        </GalleryImageContainer>

        <GalleryStripe></GalleryStripe>
        <GalleryLine></GalleryLine>
        <HomeGalleryButtonContainer>
          <HomeGalleryButton href='/realizacje'>{t('HomeGalleryButtonText')}</HomeGalleryButton>
        </HomeGalleryButtonContainer>
      </HomeGallery>
    </>
  )
}
export default Home
