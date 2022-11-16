import {
  ContactBox,
  ContactLeftContainer,
  ContactStyledLetter,
  ContactMainIntro,
  ContactMainInfo,
  ContactIcons,
  ContactIconBox,
  ContactIconPhone,
  ContactIconMail,
  ContactAdressRegistersInformation,
  ContactTitleAdress,
  ContactAdress,
  RegisterInformationTitle,
  RegisterInformationName,
  RegisterInformationAdress,
  RegisterInformationNumbers,
  RegisterAccountNumber,
  IconFacebook,
  IconInstagram,
  IconsMediaBox,
  ContactRightContainer,
  ContactMapPlace,
} from "./ContactElements";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <>
      <ContactBox>
        <ContactLeftContainer>
          <ContactStyledLetter>K</ContactStyledLetter>
          <ContactMainIntro>Kontakt</ContactMainIntro>
          <ContactMainInfo>
            Nasz zespół pozostaje do Twojej dyspozycji, skontaktuj się z nami
            <br></br>a znajdziemy idealne rozwiązanie.
          </ContactMainInfo>

          <ContactIcons>
            <ContactIconBox>
              <ContactIconPhone />+ 48 700 000 000
            </ContactIconBox>
            <ContactIconBox>
              <ContactIconMail />
              kontakt@kontaktdesign.pl
            </ContactIconBox>
          </ContactIcons>

          <ContactAdressRegistersInformation>
            <ContactTitleAdress>Adres pracowni</ContactTitleAdress>
            <ContactAdress>
              ul. Nieznana 8 bud.13, 04-690 Warszawa
            </ContactAdress>
            <RegisterInformationTitle>Dane rejestrowe</RegisterInformationTitle>
            <RegisterInformationName>NoName sp.z o.o.</RegisterInformationName>
            <RegisterInformationAdress>
              ul. Nieznana 8 bud.13, 04-690 Warszawa
            </RegisterInformationAdress>
            <RegisterInformationNumbers>
              KRS 1000000000, NIP 20 00000000, REGON 300000000
            </RegisterInformationNumbers>
            <RegisterAccountNumber>
              Nr konta: 12 3456 7890 0000 1111 2222 3333
            </RegisterAccountNumber>
          </ContactAdressRegistersInformation>
          <IconsMediaBox>
            <IconFacebook /> <IconInstagram />
          </IconsMediaBox>
        </ContactLeftContainer>

        <ContactRightContainer>
          <ContactForm />
        </ContactRightContainer>
        <ContactMapPlace>
          <ContactMap />
        </ContactMapPlace>
      </ContactBox>
    </>
  );
};

export default Contact;
