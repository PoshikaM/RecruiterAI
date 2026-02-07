import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { useRef } from 'react'

const HeroSection = ({ darkMode }) => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start']
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const conversationBubbles = [
        {
            name: 'Sarah K.',
            role: 'Founder at TechStart',
            quote: 'Candidates wait 3 weeks for replies while I\'m juggling everything. We\'re losing great talent to competitors.',
            position: 'top-left',
            delay: 0.4,
            avatar: 'SK',
            parallax: y1
        },
        {
            name: 'Rahul M.',
            role: 'Hiring Manager at GrowthCo',
            quote: 'Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.',
            position: 'top-right',
            delay: 0.6,
            avatar: 'RM',
            parallax: y2
        },
        {
            name: 'Priya S.',
            role: 'CEO at InnovateLabs',
            quote: 'I\'m the CEO, product lead, AND now doing HR? There\'s zero time to read 200 resumes properly.',
            position: 'bottom-left',
            delay: 0.8,
            avatar: 'PS',
            parallax: y1
        },
        {
            name: 'Amit T.',
            role: 'Head of HR at ScaleUp',
            quote: 'Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.',
            position: 'bottom-right',
            delay: 1.0,
            avatar: 'AT',
            parallax: y2
        }
    ]

    const getPositionClasses = (position) => {
        switch (position) {
            case 'top-left':
                return 'lg:absolute lg:left-0 lg:top-32 lg:max-w-xs xl:left-8 xl:top-40'
            case 'top-right':
                return 'lg:absolute lg:right-0 lg:top-32 lg:max-w-xs xl:right-8 xl:top-40'
            case 'bottom-left':
                return 'lg:absolute lg:left-4 lg:bottom-20 lg:max-w-xs xl:left-16 xl:bottom-32'
            case 'bottom-right':
                return 'lg:absolute lg:right-4 lg:bottom-20 lg:max-w-xs xl:right-16 xl:bottom-32'
            default:
                return ''
        }
    }

    // Staggered reveal animation - bubbles appear on load, then stay still
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    // Bubble reveal animation - appears and settles, no continuous dance
    const bubbleVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 40
        },
        visible: (delay) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: delay,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    }

    return (
        <section
            ref={sectionRef}
            className={`relative min-h-screen pt-20 lg:pt-0 overflow-hidden ${darkMode ? 'bg-dark-primary-bg' : 'bg-primary-bg'
                }`}
        >
            {/* Simple Decorative Objects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent-1 opacity-20`} />
                <div className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-3 opacity-15`} />
                <div className={`absolute top-1/4 right-1/4 w-16 h-16 rounded-2xl bg-accent-2 opacity-20 rotate-12`} />
                <div className={`absolute bottom-1/3 left-1/4 w-12 h-12 rounded-full bg-primary opacity-20`} />
            </div>

            <motion.div
                style={{ opacity }}
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
            >
                <div className="w-full py-16 lg:py-0">
                    {/* Mobile: Conversation Bubbles Grid - staggered reveal on load */}
                    <motion.div
                        className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {conversationBubbles.map((bubble, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className={`p-4 rounded-2xl border-2 ${darkMode
                                    ? 'bg-dark-secondary-bg border-dark-secondary'
                                    : 'bg-secondary-bg border-secondary'
                                    } shadow-lg`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                                        {bubble.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{bubble.name}</p>
                                        <p className={`text-xs ${darkMode ? 'text-dark-secondary' : 'text-gray-500'}`}>{bubble.role}</p>
                                    </div>
                                </div>
                                <p className={`mt-3 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    "{bubble.quote}"
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Desktop: Floating Conversation Bubbles - reveal on load, no dance */}
                    <div className="hidden lg:block">
                        {conversationBubbles.map((bubble, index) => (
                            <motion.div
                                key={index}
                                custom={bubble.delay}
                                variants={bubbleVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ y: bubble.parallax }}
                                className={`${getPositionClasses(bubble.position)} z-10`}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className={`p-5 rounded-2xl border-2 ${darkMode
                                        ? 'bg-dark-secondary-bg border-dark-secondary'
                                        : 'bg-secondary-bg border-secondary'
                                        } shadow-xl`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                                            {bubble.avatar}
                                        </div>
                                        <div>
                                            <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{bubble.name}</p>
                                            <p className={`text-xs ${darkMode ? 'text-dark-secondary' : 'text-gray-500'}`}>{bubble.role}</p>
                                        </div>
                                    </div>
                                    <p className={`mt-3 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        "{bubble.quote}"
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Central Hero Content - staggered reveal */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-20 max-w-3xl mx-auto text-center lg:py-24"
                    >
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 mb-6 cursor-pointer ${darkMode
                                ? 'bg-dark-secondary-bg border-accent-3 text-accent-1'
                                : 'bg-secondary-bg border-primary text-primary'
                                }`}
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">AI-Powered Recruiting Platform</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                        >
                            Every Hire,{' '}
                            <span className="text-primary">Faster</span> and{' '}
                            <span className="text-accent-3">Better</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <motion.a
                                href="#cta"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Hiring Smarter
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="#solution"
                                className={`w-full sm:w-auto px-8 py-4 rounded-xl border-2 font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${darkMode
                                    ? 'border-dark-secondary text-white hover:bg-dark-secondary-bg'
                                    : 'border-secondary text-gray-700 hover:bg-secondary'
                                    }`}
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Play className="w-5 h-5" />
                                See How It Works
                            </motion.a>
                        </motion.div>

                        {/* Trust Indicators - staggered reveal */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
                        >
                            {[
                                'No credit card required',
                                'Free 14-day trial',
                                'Setup in 5 minutes'
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                >
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {text}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill={darkMode ? '#404040' : '#ffffff'}
                    />
                </svg>
            </div>
        </section>
    )
}

export default HeroSection
