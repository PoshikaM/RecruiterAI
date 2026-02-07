import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Zap, Clock, Users, FileCheck, Target, DollarSign, ShieldCheck, TrendingUp, Timer, Sparkles, Brain } from 'lucide-react'

// Official Color Palette
const colors = {
    accent1: '#A5D8FF', // Light blue
    accent2: '#D0BCFF', // Light purple
    accent3: '#B197FC', // Purple
    primary: '#3B82F6', // Blue
    lightBg: '#FFFFFF',
    lightSecondary: '#F3F4F6',
    lightPrimaryBg: '#EFF6FF',
    darkBg: '#000000',
    darkSecondaryBg: '#404040',
    darkSecondary: '#737373'
}

const ImpactSection = ({ darkMode }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const metrics = [
        {
            icon: Zap,
            value: '10',
            suffix: 'x',
            label: 'Faster\nScreening',
            description: 'AI parses and ranks 250+ applications per day vs 25 manually',
            barHeight: 100,
            color: colors.primary // #3B82F6
        },
        {
            icon: Clock,
            value: '70',
            suffix: '%',
            label: 'Faster Time-\nto-Hire',
            description: 'Average hiring timeline drops from 42 days to just 12 days',
            barHeight: 85,
            color: colors.accent3 // #B197FC
        },
        {
            icon: Users,
            value: '25',
            suffix: 'x',
            label: 'More\nInterview\nCapacity',
            description: 'AI conducts 200+ automated screening interviews daily vs 8 manual calls',
            barHeight: 78,
            color: colors.accent2 // #D0BCFF
        },
        {
            icon: FileCheck,
            value: '95',
            suffix: '%',
            label: 'Application\nCompletion',
            description: 'Smart application forms reduce candidate drop-off dramatically',
            barHeight: 95,
            color: colors.accent1 // #A5D8FF
        },
        {
            icon: Target,
            value: '89',
            suffix: '%',
            label: 'More\nQualified\nApps',
            description: 'AI job description optimizer attracts higher-quality candidate pipelines',
            barHeight: 89,
            color: colors.primary // #3B82F6
        },
        {
            icon: DollarSign,
            value: '80',
            suffix: '%',
            label: 'Lower Costs',
            description: 'vs traditional recruiting agencies and multiple software subscriptions',
            barHeight: 80,
            color: colors.accent3 // #B197FC
        },
        {
            icon: ShieldCheck,
            value: '50',
            suffix: '%',
            label: 'Fewer Bad\nHires',
            description: 'AI skills assessment and matching improves hiring accuracy dramatically',
            barHeight: 50,
            color: colors.accent2 // #D0BCFF
        }
    ]

    const benefitCards = [
        { icon: TrendingUp, title: 'Scale Without Limits', desc: 'Handle 1000+ applications without adding headcount' },
        { icon: Timer, title: 'Reclaim Your Time', desc: 'Automate repetitive tasks and focus on decisions' },
        { icon: Sparkles, title: 'Better Experience', desc: 'Every applicant gets timely responses' },
        { icon: Brain, title: 'Data-Driven', desc: 'AI insights identify top performers early' }
    ]

    return (
        <section
            id="impact"
            className="py-16 lg:py-24 relative overflow-hidden"
            style={{
                backgroundColor: darkMode ? colors.darkBg : colors.lightBg
            }}
        >
            <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bar Chart Container - Clean white/dark card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl p-6 lg:p-8 relative"
                    style={{
                        backgroundColor: darkMode ? colors.darkSecondaryBg : colors.lightBg,
                        boxShadow: darkMode
                            ? '0 4px 30px rgba(0, 0, 0, 0.3)'
                            : '0 4px 30px rgba(0, 0, 0, 0.08)',
                        border: darkMode ? '1px solid #525252' : '1px solid #E5E7EB'
                    }}
                >
                    {/* Y-Axis */}
                    <div className="absolute left-4 lg:left-6 top-16 bottom-28 flex flex-col justify-between text-[10px] font-medium">
                        {[100, 80, 60, 40, 20, 0].map((val) => (
                            <span
                                key={val}
                                style={{ color: darkMode ? colors.darkSecondary : '#9CA3AF' }}
                            >
                                {val}
                            </span>
                        ))}
                    </div>

                    {/* Grid Lines */}
                    <div className="absolute left-10 lg:left-14 right-6 top-16 bottom-28 flex flex-col justify-between pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="h-px"
                                style={{ backgroundColor: darkMode ? '#525252' : '#E5E7EB' }}
                            />
                        ))}
                    </div>

                    {/* Bar Chart */}
                    <div className="flex items-end justify-center gap-6 lg:gap-10 h-[260px] lg:h-[300px] pt-4 pb-2 pl-10 lg:pl-14 pr-4 relative" style={{ zIndex: 1 }}>
                        {metrics.map((metric, index) => (
                            <BarItem
                                key={index}
                                metric={metric}
                                index={index}
                                darkMode={darkMode}
                                isInView={isInView}
                            />
                        ))}
                    </div>

                    {/* Hover Instructions */}
                    <p
                        className="text-center text-xs mt-6"
                        style={{ color: darkMode ? colors.darkSecondary : '#9CA3AF' }}
                    >
                        Hover over bars to see details
                    </p>
                </motion.div>

                {/* Benefit Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
                >
                    {benefitCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                            className="p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                backgroundColor: darkMode ? colors.darkSecondaryBg : colors.lightBg,
                                boxShadow: darkMode
                                    ? '0 2px 15px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 15px rgba(0, 0, 0, 0.06)',
                                border: darkMode ? '1px solid #525252' : '1px solid #E5E7EB'
                            }}
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                                style={{ backgroundColor: colors.primary }}
                            >
                                <card.icon className="w-5 h-5 text-white" />
                            </div>
                            <h3
                                className="font-bold text-base mb-1"
                                style={{ color: darkMode ? '#FFFFFF' : '#111827' }}
                            >
                                {card.title}
                            </h3>
                            <p
                                className="text-xs"
                                style={{ color: darkMode ? colors.darkSecondary : '#6B7280' }}
                            >
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

// Individual Bar Component
const BarItem = ({ metric, index, darkMode, isInView }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [count, setCount] = useState(0)
    const barRef = useRef(null)
    const barInView = useInView(barRef, { once: true })

    const numericValue = parseInt(metric.value)

    useEffect(() => {
        if (barInView) {
            const duration = 1200
            const steps = 30
            const increment = numericValue / steps
            let current = 0
            const timer = setInterval(() => {
                current += increment
                if (current >= numericValue) {
                    setCount(numericValue)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)
            return () => clearInterval(timer)
        }
    }, [barInView, numericValue])

    const barHeight = `${metric.barHeight * 2}px`

    // Determine text color based on bar color brightness
    const isLightBar = metric.color === colors.accent1 || metric.color === colors.accent2
    const textColor = isLightBar ? '#1F2937' : '#FFFFFF'

    return (
        <motion.div
            ref={barRef}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ zIndex: isHovered ? 100 : 1 }}
        >
            {/* Hover Popup Card */}
            <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={isHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-44 p-3 pointer-events-none"
                style={{
                    backgroundColor: darkMode ? colors.darkSecondaryBg : colors.lightBg,
                    border: `2px solid ${metric.color}`,
                    boxShadow: `0 8px 25px rgba(0, 0, 0, 0.15)`,
                    zIndex: 1000
                }}
            >
                <div className="flex items-center gap-1.5 mb-1.5">
                    <metric.icon className="w-3.5 h-3.5" style={{ color: metric.color }} />
                    <span
                        className="font-semibold text-xs"
                        style={{ color: darkMode ? '#FFFFFF' : '#111827' }}
                    >
                        {metric.label.replace(/\n/g, ' ')}
                    </span>
                </div>
                <p
                    className="text-[10px] leading-relaxed"
                    style={{ color: darkMode ? colors.darkSecondary : '#6B7280' }}
                >
                    {metric.description}
                </p>
                {/* Arrow */}
                <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                    style={{
                        backgroundColor: darkMode ? colors.darkSecondaryBg : colors.lightBg,
                        borderRight: `2px solid ${metric.color}`,
                        borderBottom: `2px solid ${metric.color}`
                    }}
                />
            </motion.div>

            {/* Icon Above Bar */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={barInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.06 + 0.2 }}
                className="mb-2 w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                    backgroundColor: metric.color,
                    boxShadow: `0 4px 12px ${metric.color}50`
                }}
            >
                <metric.icon className="w-4 h-4" style={{ color: textColor }} />
            </motion.div>

            {/* SHARP EDGE Bar with SHADOW */}
            <div
                className="relative cursor-pointer"
                style={{
                    width: '50px',
                    height: barHeight,
                    minHeight: '35px'
                }}
            >
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={barInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative h-full"
                    style={{ originY: 1 }}
                >
                    {/* Main Bar - Sharp edges */}
                    <div
                        className="absolute inset-0 transition-all duration-200"
                        style={{
                            backgroundColor: metric.color,
                            boxShadow: isHovered
                                ? `4px 4px 15px rgba(0, 0, 0, 0.2), 0 0 20px ${metric.color}40`
                                : `3px 3px 10px rgba(0, 0, 0, 0.12)`,
                            transform: isHovered ? 'scale(1.03)' : 'scale(1)'
                        }}
                    />

                    {/* Right shadow edge */}
                    <div
                        className="absolute -right-1 top-1 bottom-0 w-1"
                        style={{
                            backgroundColor: `${metric.color}60`,
                        }}
                    />

                    {/* Bottom shadow edge */}
                    <div
                        className="absolute left-1 -bottom-1 right-0 h-1"
                        style={{
                            backgroundColor: `${metric.color}40`,
                        }}
                    />

                    {/* Value on Bar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span
                            className="font-bold text-sm"
                            style={{
                                color: textColor,
                                textShadow: isLightBar ? 'none' : '0 1px 3px rgba(0,0,0,0.3)',
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)'
                            }}
                        >
                            {count}{metric.suffix}
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Label Below */}
            <div className="mt-3 text-center w-16">
                <span
                    className="text-[10px] font-medium leading-tight block whitespace-pre-line"
                    style={{ color: darkMode ? colors.darkSecondary : '#6B7280' }}
                >
                    {metric.label}
                </span>
            </div>
        </motion.div>
    )
}

export default ImpactSection
