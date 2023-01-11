import {
  TeamHeader,
  TeamHeaderLeftContainer,
  TeamHeaderLetter,
  TeamHeaderIntroduction,
  TeamHeaderText,
  TeamHeaderRightContainer,
  TeamImageContainer,
  TeamHeaderImage,
  TeamSection,
  TeamSectionIntroduction,
  TeamSectionHeadLine,
  TeamSectionText,
} from './TeamElements'
import team from '../../images/community-concept-with-hands-people (1).jpg'
import Member from './Member'

const Team = () => {
  return (
    <>
      <TeamHeader>
        <TeamHeaderLeftContainer>
          <TeamHeaderLetter>Z</TeamHeaderLetter>
          <TeamHeaderIntroduction>Zespół</TeamHeaderIntroduction>
          <TeamHeaderText>
            {' '}
            Zespół indywidualności, w którym każdy wnosi coś wyjątkowego do pracy studia. Poznaj nas
            lepiej.
          </TeamHeaderText>
        </TeamHeaderLeftContainer>

        <TeamHeaderRightContainer>
          <TeamImageContainer>
            <TeamHeaderImage src={team}></TeamHeaderImage>
          </TeamImageContainer>
        </TeamHeaderRightContainer>
      </TeamHeader>

      <TeamSection>
        <TeamSectionIntroduction>Poznaj Nas</TeamSectionIntroduction>
        <TeamSectionHeadLine>Architekci i Projektanci</TeamSectionHeadLine>
        <TeamSectionText>Wybierz swojego specjalistę</TeamSectionText>
        <Member />
      </TeamSection>
    </>
  )
}
export default Team
