import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TopSection from './components/TopSection'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    // px-10
    <div className=''>
    <TopSection/>
    <Skills/>
    <Projects/>
    </div>
  )
}

export default App
