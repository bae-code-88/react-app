import {
  ContactBox,
  ContactLeftContainer,
  ContactStyledLetter,
  ContactMainIntro,
  ContactMainInfo,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactBox>
        <ContactLeftContainer>
          <ContactStyledLetter>K</ContactStyledLetter>
          <ContactMainIntro>Kontakt</ContactMainIntro>
          <ContactMainInfo>
            Nasz zespół pozostaje do Twojej dyspozycji, skontaktuj się z nami a
            znajdziemy idealne rozwiązanie.
          </ContactMainInfo>
        </ContactLeftContainer>
      </ContactBox>
    </>
  );
};

export default Contact;
