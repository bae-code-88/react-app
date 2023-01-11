import { useState } from 'react'
import {
  Nav,
  Logo,
  NavLink,
  NavLogoLink,
  RightContainer,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  IconF,
  IconI,
  Language,
} from './NavigationElements'

import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const Navigation = ({ toggle, handleScroll, scrollY, props }) => {
  const [isActive, setIsActive] = useState(true)
  const { t } = useTranslation()

  const toggleActive = (lang) => {
    setIsActive(!isActive)
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <Nav onScroll={handleScroll} scrollY={scrollY}>
        <Logo>
          <NavLogoLink to='/' exact>
            LOGO
          </NavLogoLink>
        </Logo>
        <Bars onClick={toggle} />

        <RightContainer>
          <NavBtn scrollY={scrollY}>
            <Language to='/' isActive={isActive} onClick={() => toggleActive('pl')}>
              PL
            </Language>
            |
            <Language to='/' onClick={() => toggleActive('en')} isActive={!isActive}>
              EN
            </Language>
            <NavBtnLink href='http://facebook.com'>
              <IconF />
            </NavBtnLink>
            <NavBtnLink href='http://instagram.com'>
              <IconI />
            </NavBtnLink>
          </NavBtn>

          <NavMenu>
            <NavLink to='/oferta' activeStyle={{ color: '#a85f3f' }}>
              {t('Oferta')}
            </NavLink>
            <NavLink to='/zapytanie' activeStyle={{ color: '#a85f3f' }}>
              {t('Zapytanie')}
            </NavLink>
            <NavLink to='/realizacje' activeStyle={{ color: '#a85f3f' }}>
              {t('Realizacje')}
            </NavLink>
            <NavLink to='/zespół' activeStyle={{ color: '#a85f3f' }}>
              {t('Zespół')}
            </NavLink>
            <NavLink to='/kariera' activeStyle={{ color: '#a85f3f' }}>
              {t('Kariera')}
            </NavLink>
            <NavLink to='/kontakt' activeStyle={{ color: '#a85f3f' }}>
              {t('Kontakt')}
            </NavLink>
          </NavMenu>
        </RightContainer>
      </Nav>
    </>
  )
}
export default Navigation
