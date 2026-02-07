import { useState } from 'react'
import { Menu, X, Moon, Sun, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false)

    // Navigation links that scroll to actual page sections
    const navLinks = [
        { name: 'How It Works', href: '#flowchart' },
        { name: 'Impact', href: '#impact' },
        { name: 'Integrations', href: '#integrations' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setIsOpen(false)
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-dark-primary-bg/90' : 'bg-white/90'} backdrop-blur-lg border-b ${darkMode ? 'border-dark-secondary-bg' : 'border-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-3 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold gradient-text">RecruiterAI</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Desktop Right Section */}
                    <div className="hidden lg:flex items-center gap-4">
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-dark-secondary-bg text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.button>
                        <motion.a
                            href="#cta"
                            onClick={(e) => handleNavClick(e, '#cta')}
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent-3 text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Free Trial
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center gap-3">
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-dark-secondary-bg text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
                            whileTap={{ scale: 0.9 }}
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.button>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-dark-secondary-bg' : 'bg-gray-100'}`}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`lg:hidden ${darkMode ? 'bg-dark-primary-bg' : 'bg-white'} border-t ${darkMode ? 'border-dark-secondary-bg' : 'border-gray-100'}`}
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`block py-2 text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="#cta"
                                    onClick={(e) => handleNavClick(e, '#cta')}
                                    className="block py-3 text-center rounded-xl bg-gradient-to-r from-primary to-accent-3 text-white font-semibold"
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
