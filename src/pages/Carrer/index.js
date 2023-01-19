import { useTranslation } from 'react-i18next'
import {
  CarrerHeader,
  CarrerHeaderLeftContainer,
  CarrerHeaderLetter,
  CarrerHeaderIntroduction,
  CarrerHeaderText,
  CarrerHeaderRightContainer,
  CarrerImageContainer,
  CarrerHeaderImage,
  CarrerSection,
  CarrerSectionIntroduction,
} from './CarrerElements'

import Occupations from './CarrerOccupations'
import img7 from '../../images/img7.jpg'

const Carrer = (props) => {
  const { t } = useTranslation()
  return (
    <>
      <CarrerHeader>
        <CarrerHeaderLeftContainer>
          <CarrerHeaderLetter>{t('LiteraKariera')}</CarrerHeaderLetter>
          <CarrerHeaderIntroduction>{t('Kariera')}</CarrerHeaderIntroduction>
          <CarrerHeaderText> {t('Karieratxt')}</CarrerHeaderText>
        </CarrerHeaderLeftContainer>

        <CarrerHeaderRightContainer>
          <CarrerImageContainer>
            <CarrerHeaderImage src={img7}></CarrerHeaderImage>
          </CarrerImageContainer>
        </CarrerHeaderRightContainer>
      </CarrerHeader>

      <CarrerSection>
        <CarrerSectionIntroduction>szukamy</CarrerSectionIntroduction>
        <Occupations></Occupations>
      </CarrerSection>
    </>
  )
}

export default Carrer
