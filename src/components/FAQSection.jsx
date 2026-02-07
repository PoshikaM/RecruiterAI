import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQSection = ({ darkMode }) => {
    const [openIndex, setOpenIndex] = useState(0)

    const faqs = [
        {
            question: 'How does AI screening work?',
            answer: 'Our AI analyzes resumes using natural language processing to identify relevant skills, experience, and qualifications. It scores candidates based on your custom criteria and job requirements, ranking the top candidates automatically. The AI learns from your hiring decisions to improve accuracy over time.'
        },
        {
            question: 'Does RecruiterAI integrate with our existing ATS?',
            answer: 'Yes! RecruiterAI integrates seamlessly with popular ATS platforms including Greenhouse, Lever, Workday, BambooHR, and more. We also provide a robust API for custom integrations. Data syncs in real-time, so your existing workflows remain intact.'
        },
        {
            question: "What's the pricing structure?",
            answer: 'We offer flexible pricing based on your hiring volume. Plans start at $199/month for startups (up to 50 applications/month) and scale to enterprise plans for high-volume hiring. All plans include AI screening, automated scheduling, and basic integrations. Contact us for custom enterprise pricing.'
        },
        {
            question: 'How long does setup take?',
            answer: 'Most customers are up and running within 30 minutes! Simply connect your job boards, configure your screening criteria, and start receiving AI-ranked candidates. Our onboarding team provides personalized setup assistance for enterprise customers.'
        },
        {
            question: 'Is candidate data secure?',
            answer: 'Absolutely. We are SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit. We never share candidate information with third parties, and you maintain full ownership and control over your data. Regular security audits ensure ongoing protection.'
        }
    ]

    return (
        <section id="faq" className={`py-20 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-dark-primary-bg' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
            {/* Simple decorative objects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-16 w-40 h-40 rounded-full bg-accent-1 opacity-15"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-16 w-48 h-48 rounded-full bg-accent-3 opacity-10"
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 mb-6 ${darkMode
                        ? 'bg-dark-secondary-bg border-accent-3'
                        : 'bg-secondary-bg border-primary'
                        }`}>
                        <HelpCircle className={`w-4 h-4 ${darkMode ? 'text-accent-3' : 'text-primary'}`} />
                        <span className={`text-sm font-medium ${darkMode ? 'text-accent-1' : 'text-primary'}`}>Got Questions?</span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Everything you need to know about RecruiterAI
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`rounded-2xl border-2 overflow-hidden ${darkMode
                                ? 'bg-dark-secondary-bg border-dark-secondary'
                                : 'bg-secondary-bg border-secondary'
                                }`}
                        >
                            <motion.button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openIndex === index
                                    ? darkMode ? 'bg-dark-primary-bg' : 'bg-primary-bg'
                                    : ''
                                    }`}
                                whileHover={{ backgroundColor: darkMode ? '#000000' : '#EFF6FF' }}
                            >
                                <span className={`text-lg font-semibold pr-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index
                                        ? 'bg-primary text-white'
                                        : darkMode ? 'bg-dark-primary-bg text-gray-400' : 'bg-secondary text-gray-500'
                                        }`}
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className={`px-6 pb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <div className={`h-px mb-4 ${darkMode ? 'bg-dark-secondary' : 'bg-secondary'}`} />
                                            <p className="leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Still have questions?
                    </p>
                    <motion.a
                        href="mailto:support@recruiterai.com"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${darkMode
                            ? 'bg-dark-secondary-bg border-2 border-dark-secondary text-white hover:border-primary'
                            : 'bg-secondary-bg border-2 border-secondary text-gray-900 hover:border-primary'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact our team →
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQSection
