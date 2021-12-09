import {TeamHeader,
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
TeamSectionArticleContainer,
TeamSectionArticleBox,
TeamBoxImage,
TeamBoxTextContainer,
TeamBoxSpecialize,
TeamBoxName,
TeamBoxArticle} from './TeamElements'
import team from '../../images/community-concept-with-hands-people (1).jpg';
import man from '../../images/man.png';

const members=[
    {
        id:1,
        image:man,
        title:'Architekt',
        author:'Jan Nowak',
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id:2,
        image:man,
        title:'Architekt',
        author:'Jan Nowak',
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id:3,
        image:man,
        title:'Architekt',
        author:'Jan Nowak',
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id:4,
        image:man,
        title:'Architekt',
        author:'Jan Nowak',
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
]


const Team=()=>{
    const membersList=members.map(member=>(
    <>
    <TeamSectionArticleContainer key={member.id} {...member}>
        <TeamSectionArticleBox >
            <TeamBoxImage src={member.image}></TeamBoxImage>
            <TeamBoxTextContainer>
                <TeamBoxSpecialize>{member.title}</TeamBoxSpecialize>
                <TeamBoxName>{member.author}</TeamBoxName>
            </TeamBoxTextContainer>
        </TeamSectionArticleBox>
        <TeamBoxArticle >{member.text}</TeamBoxArticle>
    </TeamSectionArticleContainer>
    </>))

    return(
    <>
   <TeamHeader>
    <TeamHeaderLeftContainer>
        <TeamHeaderLetter>Z</TeamHeaderLetter>
        <TeamHeaderIntroduction>
            Zespół 
        </TeamHeaderIntroduction>
        <TeamHeaderText> Zespół indywidualności, w którym każdy wnosi coś wyjątkowego do pracy studia. Poznaj nas lepiej.</TeamHeaderText>
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
{membersList}
    </TeamSection>
    </>
    )
}
export default Team;