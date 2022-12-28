import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TopSection from './components/TopSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {

  return (
    // px-10
    <div className=''>
    <TopSection/>
    <Skills/>
    <Projects/>
    <ContactSection/>
    </div>
  )
}

export default App
