import { useTranslation } from 'react-i18next'
import img5 from '../../images/img5.jpg'
import img12 from '../../images/img12.jpg'
import img13 from '../../images/img13.jpg'

import { HomeHeaderRightContainer } from '../Home/HomeElements'
import {
  OfferHeader,
  OfferHeaderLeft,
  OfferHeaderLetter,
  OfferHeaderIntroduction,
  OfferHeaderText,
  ImageContainer,
  Image,
  OfferIntroduction,
  OfferStripeIntroduction,
  OfferIntroductionHeadline,
  OfferIntro,
  OfferText,
  OfferArticleContainer,
  OfferArticleLeft,
  OfferArticleLeftContainer,
  OfferArticleLeftText,
  OfferArticleLeftImageContainer,
  ImageLeft,
  OfferArticleRightContainer,
  OfferArticleRight,
  OfferArticleRightText,
  OfferArticleLeftHeadline,
  OfferArticleRightHeadline,
  OfferArticleRightImageContainer,
  ImageRight,
} from './OfferElements'

const Offer = (props) => {
  const { t } = useTranslation()
  return (
    <>
      <OfferHeader>
        <OfferHeaderLeft>
          <OfferHeaderLetter>O</OfferHeaderLetter>
          <OfferHeaderIntroduction>{t('Oferta')}</OfferHeaderIntroduction>
          <OfferHeaderText>{t('Ofertatxt')}</OfferHeaderText>
        </OfferHeaderLeft>
        <HomeHeaderRightContainer>
          <ImageContainer>
            <Image src={img5}></Image>
          </ImageContainer>
        </HomeHeaderRightContainer>
      </OfferHeader>

      <OfferIntroduction>
        <OfferStripeIntroduction></OfferStripeIntroduction>
        <OfferIntroductionHeadline>{t('HomeWprowadzenie')}</OfferIntroductionHeadline>
        <OfferIntro>{t('HomeHeadline')}</OfferIntro>
        <OfferText>{t('HomeText')}</OfferText>
      </OfferIntroduction>

      <OfferArticleContainer>
        <OfferArticleLeft>
          <OfferArticleLeftContainer>
            <OfferArticleLeftHeadline>{t('OfferArticleLeftHeadline')}</OfferArticleLeftHeadline>
            <OfferArticleLeftText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </OfferArticleLeftText>
          </OfferArticleLeftContainer>
          <OfferArticleLeftImageContainer>
            <ImageLeft src={img12}></ImageLeft>
          </OfferArticleLeftImageContainer>
        </OfferArticleLeft>

        <OfferArticleRight>
          <OfferArticleRightImageContainer>
            <ImageRight src={img13}></ImageRight>
          </OfferArticleRightImageContainer>
          <OfferArticleRightContainer>
            <OfferArticleRightHeadline>{t('OfferArticleRightHeadline')}</OfferArticleRightHeadline>
            <OfferArticleRightText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </OfferArticleRightText>
          </OfferArticleRightContainer>
        </OfferArticleRight>
      </OfferArticleContainer>
    </>
  )
}
export default Offer
