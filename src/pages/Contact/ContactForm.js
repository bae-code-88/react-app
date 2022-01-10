import {
  ContactFormBoxTitle,
  ContactFormBoxText,
  ContactFormInput,
  ContactFormBox,
  ContactMessageBox,
  ContactFormButton,
} from "./ContactElements";

const ContactForm = () => {
  return (
    <>
      <ContactFormBoxTitle>Zostaw wiadomość</ContactFormBoxTitle>
      <ContactFormBoxText>Czekamy na Twoją wiadomość.</ContactFormBoxText>
      <ContactFormBox name="contact">
        <ContactFormInput placeholder="Imię i nazwisko" />
        <ContactFormInput placeholder="Telefon" />
        <ContactFormInput type="email" placeholder="E-mail"></ContactFormInput>
        <ContactMessageBox
          name="contact"
          placeholder="Wiadomość"
          rows="5"
          cols="60"
        ></ContactMessageBox>
        <ContactFormButton>Wyślij</ContactFormButton>
      </ContactFormBox>
    </>
  );
};

export default ContactForm;
