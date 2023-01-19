import { useTranslation } from 'react-i18next'
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

const Team = (props) => {
  const { t } = useTranslation()
  return (
    <>
      <TeamHeader>
        <TeamHeaderLeftContainer>
          <TeamHeaderLetter>{t('LiteraZespół')}</TeamHeaderLetter>
          <TeamHeaderIntroduction>{t('Zespół')}</TeamHeaderIntroduction>
          <TeamHeaderText>{t('Zespółtxt')}</TeamHeaderText>
        </TeamHeaderLeftContainer>

        <TeamHeaderRightContainer>
          <TeamImageContainer>
            <TeamHeaderImage src={team}></TeamHeaderImage>
          </TeamImageContainer>
        </TeamHeaderRightContainer>
      </TeamHeader>

      <TeamSection>
        <TeamSectionIntroduction>{t('TeamSectionIntroduction')}</TeamSectionIntroduction>
        <TeamSectionHeadLine>{t('TeamSectionHeadLine')}</TeamSectionHeadLine>
        <TeamSectionText>{t('TeamSectionText')}</TeamSectionText>
        <Member />
      </TeamSection>
    </>
  )
}
export default Team
