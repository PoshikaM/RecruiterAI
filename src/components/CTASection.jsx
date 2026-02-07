import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const CTASection = ({ darkMode }) => {
    return (
        <section id="cta" className={`py-20 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-dark-secondary-bg' : 'bg-white'}`}>
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary opacity-5 blur-3xl" />
                <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent-2 opacity-10 blur-2xl" />
                <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent-1 opacity-10 blur-2xl" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
                        <Sparkles className="w-4 h-4" />
                        Start Your Free Trial Today
                    </div>

                    {/* Headline */}
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Ready to Transform <br />
                        <span className="text-primary">Your Hiring Process?</span>
                    </h2>

                    {/* Subtext */}
                    <p className={`text-lg lg:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Join 500+ companies already using RecruiterAI to hire faster, smarter, and more efficiently.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-lg shadow-primary/30 transition-all"
                        >
                            Get Started Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all ${darkMode
                                ? 'border-dark-secondary text-white hover:border-primary hover:text-primary'
                                : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                                }`}
                        >
                            Schedule Demo
                        </motion.button>
                    </div>

                    {/* Trust indicators */}
                    <div className={`mt-12 flex flex-wrap items-center justify-center gap-6 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            14-day free trial
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            No credit card required
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Cancel anytime
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTASection
