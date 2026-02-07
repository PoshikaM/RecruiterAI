import { motion } from 'framer-motion'
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react'

const Footer = ({ darkMode }) => {
    const footerLinks = {
        Product: [
            { name: 'Features', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Integrations', href: '#' },
            { name: 'API', href: '#' }
        ],
        Company: [
            { name: 'About', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press', href: '#' }
        ],
        Resources: [
            { name: 'Documentation', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Community', href: '#' },
            { name: 'Webinars', href: '#' }
        ],
        Legal: [
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' },
            { name: 'Security', href: '#' },
            { name: 'Cookies', href: '#' }
        ]
    }

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Mail, href: '#', label: 'Email' }
    ]

    return (
        <footer className={`py-16 lg:py-20 ${darkMode ? 'bg-dark-secondary-bg' : 'bg-primary-bg'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
                    {/* Logo & Description */}
                    <div className="col-span-2">
                        <motion.a
                            href="#"
                            className="flex items-center gap-2 mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-3 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold gradient-text">RecruiterAI</span>
                        </motion.a>
                        <p className={`text-sm mb-6 max-w-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            AI-powered recruiting platform that helps you hire faster and better.
                            Trusted by 500+ companies worldwide.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${darkMode
                                            ? 'bg-dark-primary-bg text-gray-400 hover:text-white hover:bg-primary'
                                            : 'bg-white text-gray-500 hover:text-primary hover:bg-primary-bg shadow-sm'
                                        }`}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <div key={index}>
                            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className={`text-sm transition-colors ${darkMode
                                                    ? 'text-gray-400 hover:text-white'
                                                    : 'text-gray-600 hover:text-primary'
                                                }`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            © 2024 RecruiterAI. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Cookie Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
