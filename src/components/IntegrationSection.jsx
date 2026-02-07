import { motion } from 'framer-motion'

const IntegrationsSection = ({ darkMode }) => {
    const platforms = [
        {
            name: 'LinkedIn',
            color: '#0077B5',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Indeed',
            color: '#2164F3',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M11.566 21.5622v-8.9493c.3679.0527.7449.0878 1.1394.0878 1.1571 0 2.2437-.2639 3.225-.7274v9.5889c0 .7977-.6396 1.4373-1.4285 1.4373h-.5177c-.7889 0-1.4182-.6484-1.4182-1.4373zm4.3645-14.742c0 1.9825-1.607 3.5896-3.5896 3.5896-1.9825 0-3.5896-1.607-3.5896-3.5896S10.3584 3.227 12.3409 3.227c1.9826 0 3.5802 1.607 3.5802 3.5932z" />
                </svg>
            )
        },
        {
            name: 'Glassdoor',
            color: '#0CAA41',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M17.144 20.572H6.865A2.862 2.862 0 014 17.707v-.85h13.135a.86.86 0 00.859-.858V4.857h.862a2.862 2.862 0 012.857 2.857v10.001a2.862 2.862 0 01-2.857 2.857h-.712zM6.856 3.428h10.287a2.862 2.862 0 012.857 2.857v.85H6.856a.86.86 0 00-.857.858v11.142H5.14A2.862 2.862 0 012.283 16.28V6.285a2.862 2.862 0 012.857-2.857h1.716z" />
                </svg>
            )
        },
        {
            name: 'Monster',
            color: '#6E45A5',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l7 4.5-7 4.5z" />
                </svg>
            )
        },
        {
            name: 'Naukri',
            color: '#0098DA',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            name: 'AngelList',
            color: '#000000',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M12.072.729C7.338.729 3.412 3.819 2.072 8.029l5.025 3.155c.263-.72.615-1.393 1.047-2.009-.857-.606-1.416-1.594-1.416-2.716 0-1.853 1.499-3.352 3.352-3.352s3.352 1.499 3.352 3.352c0 1.122-.559 2.11-1.416 2.716.432.616.784 1.289 1.047 2.009l5.025-3.155C17.946 3.819 14.02.729 12.072.729zm0 8.744c-1.147 0-2.076.929-2.076 2.076 0 .587.243 1.117.633 1.494L12.072 24l1.443-10.957c.39-.377.633-.907.633-1.494 0-1.147-.929-2.076-2.076-2.076z" />
                </svg>
            )
        },
        {
            name: 'ZipRecruiter',
            color: '#219653',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h4v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" />
                </svg>
            )
        },
        {
            name: 'Hired',
            color: '#F26722',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" />
                </svg>
            )
        },
        {
            name: 'WorkDay',
            color: '#F4811F',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" />
                </svg>
            )
        },
        {
            name: 'Lever',
            color: '#295BDC',
            logo: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M4 4h16v16H4V4zm14 14V6H6v12h12zM8 8h8v2H8V8zm0 4h8v2H8v-2z" />
                </svg>
            )
        }
    ]

    // Double the platforms array for infinite scroll
    const allPlatforms = [...platforms, ...platforms]

    return (
        <section className={`py-20 lg:py-32 overflow-hidden ${darkMode ? 'bg-dark-secondary-bg' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Hire From <span className="text-primary">Anywhere</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        RecruiterAI automatically syncs your job postings across all major platforms
                    </p>
                </motion.div>

                {/* Logo Slider */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r ${darkMode ? 'from-dark-secondary-bg' : 'from-white'} to-transparent`} />
                    <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l ${darkMode ? 'from-dark-secondary-bg' : 'from-white'} to-transparent`} />

                    {/* Scrolling Container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-8 py-8"
                            animate={{
                                x: [0, -180 * platforms.length]
                            }}
                            transition={{
                                x: {
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: 'linear'
                                }
                            }}
                            style={{ width: 'max-content' }}
                        >
                            {allPlatforms.map((platform, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex-shrink-0 w-44 h-28 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-500 group cursor-pointer ${darkMode
                                        ? 'bg-dark-primary-bg border-gray-700 hover:border-primary'
                                        : 'bg-white border-gray-200 hover:border-primary shadow-sm hover:shadow-lg'
                                        }`}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                >
                                    {/* Logo - Grayscale by default, color on hover */}
                                    <div
                                        className="transition-all duration-500 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                                        style={{
                                            color: platform.color
                                        }}
                                    >
                                        {platform.logo}
                                    </div>
                                    <span className={`text-sm font-semibold transition-all duration-300 ${darkMode
                                        ? 'text-gray-500 group-hover:text-white'
                                        : 'text-gray-400 group-hover:text-gray-900'
                                        }`}>
                                        {platform.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Integration Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
                >
                    <div className={`p-6 rounded-2xl ${darkMode ? 'bg-dark-primary-bg' : 'bg-primary-bg'}`}>
                        <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>10+</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Job Boards Connected</p>
                    </div>
                    <div className={`p-6 rounded-2xl ${darkMode ? 'bg-dark-primary-bg' : 'bg-primary-bg'}`}>
                        <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>1-Click</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Multi-Platform Posting</p>
                    </div>
                    <div className={`p-6 rounded-2xl ${darkMode ? 'bg-dark-primary-bg' : 'bg-primary-bg'}`}>
                        <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Real-time</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Application Syncing</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default IntegrationsSection
