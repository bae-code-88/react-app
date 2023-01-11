import {
  FooterContainer,
  FooterLeftContainer,
  FooterRightContainer,
  Triangle,
  LeftText,
  LeftHeadline,
  LeftTextLittle,
  FooterBtn,
  FooterBtnLink,
  IconF,
  IconI,
  FooterContactWrapper,
  FooterContact,
  IconPhone,
  IconMail,
  FooterAdres,
  DesignRealisation,
  DesignerLink,
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeftContainer>
        <LeftText>Potrzebujesz</LeftText>
        <LeftHeadline>
          projektu, realizacji
          <br /> wnętrza?
        </LeftHeadline>
        <LeftTextLittle>Polityka prywatności</LeftTextLittle>
        <Triangle />
      </FooterLeftContainer>

      <FooterRightContainer>
        <FooterBtn>
          <FooterBtnLink href='http://www.facebook.com'>
            <IconF />
          </FooterBtnLink>
          <FooterBtnLink href='http://www.instagram.com'>
            <IconI />
          </FooterBtnLink>
        </FooterBtn>
        <FooterContactWrapper>
          <FooterContact>
            <IconPhone />+ 48 700 000 000
          </FooterContact>
          <FooterContact>
            <IconMail />
            kontakt@kontaktdesign.pl
          </FooterContact>
        </FooterContactWrapper>
        <FooterAdres>ul. Nieznana 8 bud.13, 04-690 Warszawa</FooterAdres>
        <DesignRealisation>
          Realizacja <DesignerLink href='http://chm.media.pl'>CHM STUDIO</DesignerLink>
        </DesignRealisation>
      </FooterRightContainer>
    </FooterContainer>
  )
}
export default Footer
