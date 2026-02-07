import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = ({ darkMode }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            name: 'Jim Corner',
            role: 'CEO',
            company: 'Victionary Co.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
            quote: 'I would like to say a big Thank you for your immense effort and support. In addition, I have feeling that our further events are going to be Great as well, good luck to the team.',
            highlight: 'Thank you'
        },
        {
            name: 'Sarah Mitchell',
            role: 'VP of People',
            company: 'GrowthStack',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
            quote: 'The AI screening is incredibly accurate. It identified patterns in successful hires that we had missed. Our retention rate improved by 40% in just 6 months.',
            highlight: 'incredible'
        },
        {
            name: 'Emily Chen',
            role: 'HR Director',
            company: 'TechVentures',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
            quote: 'RecruiterAI transformed our entire hiring process. We now handle 3x more applications with the same team size. The automation is seamless.',
            highlight: 'transformed'
        },
        {
            name: 'Michael Ross',
            role: 'CTO',
            company: 'InnovateTech',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
            quote: 'Finally, a recruiting tool that understands tech roles. The AI video interviews saved our engineering team 20 hours per week.',
            highlight: 'saved'
        },
        {
            name: 'David Park',
            role: 'Founder',
            company: 'StartupHub',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
            quote: 'Best investment we made for our HR team. The automated scheduling alone saved us countless hours. Great support from the team too!',
            highlight: 'Best investment'
        }
    ]

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [isAutoPlaying, testimonials.length])

    const nextTestimonial = () => {
        setIsAutoPlaying(false)
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setIsAutoPlaying(false)
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const selectTestimonial = (index) => {
        setIsAutoPlaying(false)
        setActiveIndex(index)
    }

    // Highlight text in quote
    const highlightQuote = (quote, highlight) => {
        const parts = quote.split(new RegExp(`(${highlight})`, 'gi'))
        return parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <em key={i} className="text-primary font-semibold not-italic">{part}</em>
            ) : (
                part
            )
        )
    }

    return (
        <section id="testimonials" className={`py-20 lg:py-28 relative overflow-hidden ${darkMode ? 'bg-dark-primary-bg' : 'bg-primary-bg'}`}>
            {/* Large Orange Quote Mark - Top Right */}
            <div className="absolute top-12 right-[12%] hidden lg:block">
                <span className="text-[160px] font-serif text-orange-500 leading-none select-none">"</span>
            </div>

            {/* Dotted Pattern - Top Right */}
            <div className="absolute top-8 right-8 hidden lg:block">
                <div className="grid grid-cols-8 gap-2">
                    {[...Array(48)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} opacity-50`}
                        />
                    ))}
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        What they say about us
                    </h2>
                </motion.div>

                {/* Main Layout - Photo Card + Quote + Thumbnails */}
                <div className="relative">
                    {/* Navigation Arrows - Top Left */}
                    <div className="flex gap-2 mb-4">
                        <motion.button
                            onClick={prevTestimonial}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border-2 ${darkMode
                                ? 'border-gray-600 text-gray-400 hover:border-primary hover:text-primary bg-dark-secondary-bg'
                                : 'border-accent-2 text-accent-3 hover:border-primary hover:text-primary bg-accent-2/20'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Side - Photo Card with Gradient Border */}
                        <div className="relative lg:w-[280px] flex-shrink-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative"
                                >
                                    {/* Gradient Border Effect */}
                                    <div className="absolute -left-2 -top-2 -bottom-2 w-3 rounded-l-3xl bg-gradient-to-b from-accent-2 via-accent-3 to-accent-2" />

                                    <div className={`relative p-4 rounded-2xl ml-1 ${darkMode
                                        ? 'bg-dark-secondary-bg border border-dark-secondary'
                                        : 'bg-white border border-gray-100 shadow-xl'
                                        }`}>
                                        {/* Photo - Normal color, no grayscale */}
                                        <div className="w-full aspect-square rounded-xl overflow-hidden mb-4">
                                            <img
                                                src={testimonials[activeIndex].image}
                                                alt={testimonials[activeIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Name and Role */}
                                        <div className="text-center pb-2">
                                            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {testimonials[activeIndex].name}
                                            </h3>
                                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Side - Quote Bubble + Thumbnails */}
                        <div className="flex-1 flex flex-col justify-between">
                            {/* Quote Bubble */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-8"
                                >
                                    <div className={`relative p-6 rounded-2xl ${darkMode
                                        ? 'bg-dark-secondary-bg'
                                        : 'bg-white shadow-lg'
                                        }`}>
                                        {/* Speech Bubble Arrow - Points Left */}
                                        <div className="absolute left-0 top-6 -translate-x-full hidden lg:block">
                                            <div className={`w-0 h-0 border-t-[12px] border-b-[12px] border-r-[16px] border-transparent ${darkMode ? 'border-r-dark-secondary-bg' : 'border-r-white'
                                                }`} style={{ filter: darkMode ? 'none' : 'drop-shadow(-2px 0 2px rgba(0,0,0,0.05))' }} />
                                        </div>

                                        <p className={`text-base lg:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            "{highlightQuote(testimonials[activeIndex].quote, testimonials[activeIndex].highlight)}"
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Counter Badge + Thumbnail Avatars */}
                            <div className="flex flex-col items-center lg:items-start gap-4">
                                {/* Counter Badge - Centered Above Thumbnails */}
                                <div className={`px-5 py-1.5 rounded-full text-sm font-medium ${darkMode
                                    ? 'bg-dark-secondary-bg text-gray-300 border border-dark-secondary'
                                    : 'bg-accent-1/30 text-primary border border-accent-1/50'
                                    }`}>
                                    {activeIndex + 1} / {testimonials.length}
                                </div>

                                {/* Thumbnail Avatars Row - Proper Spacing (no overlap) */}
                                <div className="flex gap-4">
                                    {testimonials.map((testimonial, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => selectTestimonial(index)}
                                            className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${index === activeIndex
                                                ? 'border-primary shadow-lg shadow-primary/30 scale-110'
                                                : darkMode
                                                    ? 'border-dark-secondary opacity-70 hover:opacity-100'
                                                    : 'border-gray-200 opacity-70 hover:opacity-100'
                                                }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
