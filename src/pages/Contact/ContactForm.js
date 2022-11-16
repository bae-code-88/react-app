import { useRef } from "react";
import {
  ContactFormBoxTitle,
  ContactFormBoxText,
  ContactFormInput,
  ContactFormBox,
  ContactMessageBox,
  ContactFormButton,
} from "./ContactElements";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b08q7qg",
        "template_n7yrm0k",
        form.current,
        "user_UQv3s1k61PVPZrZHpGvvJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <ContactFormBoxTitle>Zostaw wiadomość</ContactFormBoxTitle>
      <ContactFormBoxText>Czekamy na Twoją wiadomość.</ContactFormBoxText>
      <ContactFormBox name="message" ref={form} onSubmit={sendEmail}>
        <ContactFormInput
          type="text"
          placeholder="Imię i nazwisko"
          name="user_name"
        />
        <ContactFormInput
          type="number"
          placeholder="Telefon"
          name="user_phone"
        />
        <ContactFormInput type="email" placeholder="E-mail" required />
        <ContactMessageBox
          type="text"
          name="message"
          placeholder="Wiadomość"
          rows="5"
          cols="60"
        />
        <ContactFormButton type="submit" value="Send">
          Wyślij
        </ContactFormButton>
      </ContactFormBox>
    </>
  );
};

export default ContactForm;
