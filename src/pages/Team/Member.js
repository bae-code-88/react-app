import {
  TeamSectionArticleContainer,
  TeamSectionArticleBox,
  TeamBoxImage,
  TeamBoxTextContainer,
  TeamBoxSpecialize,
  TeamBoxName,
  TeamBoxArticle,
} from "./TeamElements";
import members from "./MembersData";

const Member = () => {
  const membersList = members.map((member) => (
    <>
      <TeamSectionArticleContainer key={member.id} {...member}>
        <TeamSectionArticleBox>
          <TeamBoxImage src={member.image}></TeamBoxImage>
          <TeamBoxTextContainer>
            <TeamBoxSpecialize>{member.title}</TeamBoxSpecialize>
            <TeamBoxName>{member.author}</TeamBoxName>
          </TeamBoxTextContainer>
        </TeamSectionArticleBox>
        <TeamBoxArticle>{member.text}</TeamBoxArticle>
      </TeamSectionArticleContainer>
    </>
  ));
  return <>{membersList}</>;
};

export default Member;
