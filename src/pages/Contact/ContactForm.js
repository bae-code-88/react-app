import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import {
  ContactFormBoxTitle,
  ContactFormBoxText,
  ContactFormInput,
  ContactFormBox,
  ContactMessageBox,
  ContactFormButton,
} from './ContactElements'
import emailjs from '@emailjs/browser'

const ContactForm = (props) => {
  const { t } = useTranslation()
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_yrut48n', 'template_n7yrm0k', form.current, 'user_UQv3s1k61PVPZrZHpGvvJ')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
  return (
    <>
      <ContactFormBoxTitle>{t('ContactFormBoxTitle')}</ContactFormBoxTitle>
      <ContactFormBoxText>{t('ContactFormBoxText')}</ContactFormBoxText>
      <ContactFormBox name='message' ref={form} onSubmit={sendEmail}>
        <ContactFormInput type='text' placeholder={t('ContactFormInputName')} name='user_name' />
        <ContactFormInput
          type='number'
          placeholder={t('ContactFormInputPhone')}
          name='user_phone'
        />
        <ContactFormInput type='email' placeholder='E-mail' required />
        <ContactMessageBox
          type='text'
          name='message'
          placeholder={t('ContactFormInputMessage')}
          rows='5'
          cols='60'
        />
        <ContactFormButton type='submit' value='Send'>
          {t('ContactFormButton')}
        </ContactFormButton>
      </ContactFormBox>
    </>
  )
}

export default ContactForm
