import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Nav/Navigation'
import Sidebar from './components/Sidebar/Sidebar'
import MainPage from './components/MainPage/MainPage'
import Footer from './components/Footer/Footer'

import { withTranslation } from 'react-i18next'

import './App.css'

function App({ t }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleScroll = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', handleScroll)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Router>
      {<Navigation toggle={toggleOpen} windowScroll={handleScroll} scrollY={scrollY} t={t} />}

      {<Sidebar isOpen={isOpen} toggle={toggleOpen} t={t} />}

      {<MainPage t={t} />}
      <Footer />
    </Router>
  )
}

export default withTranslation()(App)
