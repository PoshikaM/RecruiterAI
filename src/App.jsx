import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FlowchartSection from './components/FlowchartSection'
import ImpactSection from './components/ImpactSection'
import IntegrationsSection from './components/IntegrationsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-dark-primary-bg text-white' : 'bg-secondary-bg text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HeroSection darkMode={darkMode} />
        <FlowchartSection darkMode={darkMode} />
        <ImpactSection darkMode={darkMode} />
        <IntegrationsSection darkMode={darkMode} />
        <TestimonialsSection darkMode={darkMode} />
        <FAQSection darkMode={darkMode} />
        <CTASection darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
