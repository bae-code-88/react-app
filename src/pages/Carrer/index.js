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

const Carrer = () => {
  return (
    <>
      <CarrerHeader>
        <CarrerHeaderLeftContainer>
          <CarrerHeaderLetter>K</CarrerHeaderLetter>
          <CarrerHeaderIntroduction>Kariera</CarrerHeaderIntroduction>
          <CarrerHeaderText>
            {' '}
            W dalszym ciągu szukamy nowych talentów do naszego zespołu. Jeśli chcesz spróbować
            swoich sił,<br></br>
            Aplikuj!
          </CarrerHeaderText>
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
