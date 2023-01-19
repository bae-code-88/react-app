import { useState } from 'react'
import {
  SidebarContainer,
  SidebarLogo,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarLNG,
} from './SidebarElements'

import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const Sidebar = ({ isOpen, toggle }) => {
  const [isActive, setIsActive] = useState(true)
  const { t } = useTranslation()

  const toggleActive = (lang) => {
    setIsActive(!isActive)
    i18n.changeLanguage(lang)
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarLogo>LOGO</SidebarLogo>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' exact={true} activeStyle={{ color: '#a85f3f' }}>
            Strona Główna
          </SidebarLink>
          <SidebarLink to='/oferta' activeStyle={{ color: '#a85f3f' }}>
            {t('Oferta')}
          </SidebarLink>
          <SidebarLink to='/zapytanie' activeStyle={{ color: '#a85f3f' }}>
            {t('Zapytanie')}
          </SidebarLink>
          <SidebarLink to='/realizacje' activeStyle={{ color: '#a85f3f' }}>
            {t('Realizacje')}
          </SidebarLink>
          <SidebarLink to='/zespół' activeStyle={{ color: '#a85f3f' }}>
            {t('Zespół')}
          </SidebarLink>
          <SidebarLink to='/kariera' activeStyle={{ color: '#a85f3f' }}>
            {t('Kariera')}
          </SidebarLink>
          <SidebarLink to='/kontakt' activeStyle={{ color: '#a85f3f' }}>
            {t('Kontakt')}
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarLNG to='/' isActive={isActive} onClick={() => toggleActive('pl')}>
            PL
          </SidebarLNG>
          |
          <SidebarLNG to='/' onClick={() => toggleActive('en')} isActive={!isActive}>
            EN
          </SidebarLNG>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
export default Sidebar
