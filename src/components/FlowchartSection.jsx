import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
    FileText, Brain, Mail, HelpCircle, Calendar, Clock, Bell,
    Video, Target, CheckCircle, XCircle, Gift, Users, Database,
    Timer, Sparkles, ArrowRight, Zap, TrendingUp, RefreshCw
} from 'lucide-react'

const FlowchartSection = ({ darkMode }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [activeFlow, setActiveFlow] = useState(0)

    const flowcharts = [
        {
            id: 0,
            title: 'Automated Candidate Screening',
            subtitle: 'Interview Scheduling',
            icon: Zap,
            color: '#FF6B35',
            benefit: 'Screen 250+ applications in minutes vs. 8 hours manually',
            nodes: [
                { id: 1, type: 'start', label: 'New Application', sublabel: 'submitted', icon: FileText },
                { id: 2, type: 'process', label: 'AI Resume Screening', sublabel: 'Ranks top 20%', icon: Brain },
                { id: 3, type: 'process', label: 'Auto-send Questions', sublabel: 'via email', icon: Mail },
                { id: 4, type: 'decision', label: 'Score > 75%?', icon: HelpCircle },
                { id: 5, type: 'yes', label: 'Auto-schedule Interview', sublabel: 'via calendar', icon: Calendar },
                { id: 6, type: 'no', label: 'Thank You Email', sublabel: '+ talent pool', icon: Mail },
                { id: 7, type: 'end', label: 'Send Reminder', sublabel: '24h before', icon: Bell }
            ]
        },
        {
            id: 1,
            title: 'Multi-Stage Interview',
            subtitle: 'Process Automation',
            icon: TrendingUp,
            color: '#7CB518',
            benefit: 'Reduce time-to-hire from 42 days to 12 days',
            nodes: [
                { id: 1, type: 'start', label: 'Interview Accepted', sublabel: 'by candidate', icon: CheckCircle },
                { id: 2, type: 'process', label: 'AI Video Interview', sublabel: 'technical screening', icon: Video },
                { id: 3, type: 'process', label: 'AI Scores Responses', sublabel: 'custom rubric', icon: Target },
                { id: 4, type: 'decision', label: 'Score > 80%?', icon: HelpCircle },
                { id: 5, type: 'yes', label: 'Schedule Round 2', sublabel: 'hiring manager', icon: Calendar },
                { id: 6, type: 'no', label: 'Auto-rejection', sublabel: 'with feedback', icon: XCircle },
                { id: 7, type: 'end', label: 'Send Offer Letter', sublabel: '+ welcome kit', icon: Gift }
            ]
        },
        {
            id: 2,
            title: 'Passive Candidate',
            subtitle: 'Re-engagement System',
            icon: RefreshCw,
            color: '#9B5DE5',
            benefit: 'Build a qualified talent pipeline automatically',
            nodes: [
                { id: 1, type: 'start', label: 'Candidate Rejected', sublabel: 'scored 60-74%', icon: Users },
                { id: 2, type: 'process', label: 'Add to Future Talent', sublabel: 'database', icon: Database },
                { id: 3, type: 'process', label: 'Wait 3 Months', sublabel: 'nurturing period', icon: Timer },
                { id: 4, type: 'decision', label: 'New Position?', icon: HelpCircle },
                { id: 5, type: 'yes', label: 'Re-engagement Email', sublabel: 'personalized', icon: Sparkles },
                { id: 6, type: 'no', label: 'Check Next Quarter', sublabel: 'automatically', icon: RefreshCw },
                { id: 7, type: 'end', label: 'Fast-track Interview', sublabel: 'skip screening', icon: Zap }
            ]
        }
    ]

    return (
        <section id="flowchart" className={`py-20 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-dark-secondary-bg' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]'}`} />
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        HOW IT WORKS
                    </p>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        AI Recruiting Software That Works
                        <br />
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Like Your Own HR Team
                        </span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Build custom hiring workflows in minutes. No coding required.
                    </p>
                </motion.div>

                {/* Flowchart Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {flowcharts.map((flow, index) => (
                        <button
                            key={flow.id}
                            onClick={() => setActiveFlow(index)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${activeFlow === index
                                ? 'shadow-lg scale-105'
                                : darkMode
                                    ? 'bg-gray-800/50 hover:bg-gray-800'
                                    : 'bg-white/50 hover:bg-white'
                                }`}
                            style={{
                                backgroundColor: activeFlow === index ? `${flow.color}15` : undefined,
                                borderWidth: '2px',
                                borderColor: activeFlow === index ? flow.color : 'transparent'
                            }}
                        >
                            <div
                                className="p-2 rounded-lg"
                                style={{ backgroundColor: `${flow.color}20` }}
                            >
                                <flow.icon
                                    className="w-5 h-5"
                                    style={{ color: flow.color }}
                                />
                            </div>
                            <div className="text-left">
                                <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {flow.title}
                                </p>
                                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {flow.subtitle}
                                </p>
                            </div>
                        </button>
                    ))}
                </motion.div>

                {/* Active Flowchart */}
                <motion.div
                    key={activeFlow}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`rounded-3xl p-8 lg:p-12 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm shadow-2xl`}
                    style={{
                        boxShadow: `0 25px 80px ${flowcharts[activeFlow].color}20`
                    }}
                >
                    {/* Flowchart Visualization */}
                    <FlowchartVisualization
                        nodes={flowcharts[activeFlow].nodes}
                        color={flowcharts[activeFlow].color}
                        darkMode={darkMode}
                        isInView={isInView}
                    />

                    {/* Benefit Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-10 flex justify-center"
                    >
                        <div
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                            style={{
                                backgroundColor: `${flowcharts[activeFlow].color}15`,
                                border: `2px solid ${flowcharts[activeFlow].color}40`
                            }}
                        >
                            <Sparkles
                                className="w-5 h-5"
                                style={{ color: flowcharts[activeFlow].color }}
                            />
                            <span
                                className="font-semibold"
                                style={{ color: flowcharts[activeFlow].color }}
                            >
                                {flowcharts[activeFlow].benefit}
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

// Flowchart Visualization Component
const FlowchartVisualization = ({ nodes, color, darkMode, isInView }) => {
    return (
        <div className="relative">
            {/* Desktop: Horizontal Flow */}
            <div className="hidden lg:flex items-start justify-between gap-4 overflow-x-auto pb-4">
                {nodes.map((node, index) => (
                    <FlowNode
                        key={node.id}
                        node={node}
                        index={index}
                        color={color}
                        darkMode={darkMode}
                        isInView={isInView}
                        isLast={index === nodes.length - 1}
                        totalNodes={nodes.length}
                    />
                ))}
            </div>

            {/* Mobile: Vertical Flow */}
            <div className="lg:hidden flex flex-col items-center gap-2">
                {nodes.map((node, index) => (
                    <FlowNodeMobile
                        key={node.id}
                        node={node}
                        index={index}
                        color={color}
                        darkMode={darkMode}
                        isInView={isInView}
                        isLast={index === nodes.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}

// Individual Flow Node for Desktop
const FlowNode = ({ node, index, color, darkMode, isInView, isLast, totalNodes }) => {
    const getNodeStyle = () => {
        switch (node.type) {
            case 'start':
                return {
                    shape: 'rounded-2xl',
                    bgColor: darkMode ? 'bg-green-900/30' : 'bg-green-50',
                    borderColor: 'border-green-500',
                    iconBg: 'bg-green-500'
                }
            case 'end':
                return {
                    shape: 'rounded-2xl',
                    bgColor: darkMode ? 'bg-blue-900/30' : 'bg-blue-50',
                    borderColor: 'border-blue-500',
                    iconBg: 'bg-blue-500'
                }
            case 'decision':
                return {
                    shape: 'rotate-45',
                    bgColor: darkMode ? 'bg-amber-900/30' : 'bg-amber-50',
                    borderColor: 'border-amber-500',
                    iconBg: 'bg-amber-500'
                }
            case 'yes':
                return {
                    shape: 'rounded-2xl',
                    bgColor: darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50',
                    borderColor: 'border-emerald-500',
                    iconBg: 'bg-emerald-500'
                }
            case 'no':
                return {
                    shape: 'rounded-2xl',
                    bgColor: darkMode ? 'bg-rose-900/30' : 'bg-rose-50',
                    borderColor: 'border-rose-500',
                    iconBg: 'bg-rose-500'
                }
            default:
                return {
                    shape: 'rounded-2xl',
                    bgColor: darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50',
                    borderColor: 'border-indigo-500',
                    iconBg: 'bg-indigo-500'
                }
        }
    }

    const style = getNodeStyle()
    const Icon = node.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center flex-shrink-0"
        >
            {/* Node */}
            <div className="relative group">
                {/* Decision diamond or regular box */}
                {node.type === 'decision' ? (
                    <div className={`w-24 h-24 ${style.bgColor} border-2 ${style.borderColor} transform rotate-45 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="-rotate-45 text-center">
                            <Icon className="w-5 h-5 mx-auto mb-1 text-amber-500" />
                            <p className={`text-[10px] font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {node.label}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className={`w-28 min-h-[90px] ${style.bgColor} border-2 ${style.borderColor} ${style.shape} p-3 flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                        <div className={`w-8 h-8 ${style.iconBg} rounded-lg flex items-center justify-center mb-2`}>
                            <Icon className="w-4 h-4 text-white" />
                        </div>
                        <p className={`text-xs font-bold text-center leading-tight ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {node.label}
                        </p>
                        {node.sublabel && (
                            <p className={`text-[10px] text-center mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {node.sublabel}
                            </p>
                        )}
                    </div>
                )}

                {/* Yes/No labels for branches */}
                {node.type === 'yes' && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded">
                        YES
                    </span>
                )}
                {node.type === 'no' && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded">
                        NO
                    </span>
                )}
            </div>

            {/* Connector Arrow */}
            {!isLast && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="flex items-center mx-2"
                    style={{ originX: 0 }}
                >
                    <div
                        className="w-8 h-0.5"
                        style={{ backgroundColor: color }}
                    />
                    <ArrowRight
                        className="w-4 h-4 -ml-1"
                        style={{ color }}
                    />
                </motion.div>
            )}
        </motion.div>
    )
}

// Individual Flow Node for Mobile
const FlowNodeMobile = ({ node, index, color, darkMode, isInView, isLast }) => {
    const getNodeStyle = () => {
        switch (node.type) {
            case 'start':
                return { bgColor: darkMode ? 'bg-green-900/30' : 'bg-green-50', borderColor: 'border-green-500', iconBg: 'bg-green-500' }
            case 'end':
                return { bgColor: darkMode ? 'bg-blue-900/30' : 'bg-blue-50', borderColor: 'border-blue-500', iconBg: 'bg-blue-500' }
            case 'decision':
                return { bgColor: darkMode ? 'bg-amber-900/30' : 'bg-amber-50', borderColor: 'border-amber-500', iconBg: 'bg-amber-500' }
            case 'yes':
                return { bgColor: darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50', borderColor: 'border-emerald-500', iconBg: 'bg-emerald-500' }
            case 'no':
                return { bgColor: darkMode ? 'bg-rose-900/30' : 'bg-rose-50', borderColor: 'border-rose-500', iconBg: 'bg-rose-500' }
            default:
                return { bgColor: darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50', borderColor: 'border-indigo-500', iconBg: 'bg-indigo-500' }
        }
    }

    const style = getNodeStyle()
    const Icon = node.icon

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex flex-col items-center"
        >
            {/* Type Label */}
            {(node.type === 'yes' || node.type === 'no') && (
                <span className={`text-xs font-bold mb-1 px-2 py-0.5 rounded ${node.type === 'yes'
                    ? 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/50'
                    : 'text-rose-500 bg-rose-100 dark:bg-rose-900/50'
                    }`}>
                    {node.type.toUpperCase()}
                </span>
            )}

            {/* Node Box */}
            <div className={`w-full max-w-xs ${style.bgColor} border-2 ${style.borderColor} ${node.type === 'decision' ? 'rounded-xl' : 'rounded-2xl'} p-4 flex items-center gap-3 shadow-md`}>
                <div className={`w-10 h-10 ${style.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                    <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {node.label}
                    </p>
                    {node.sublabel && (
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {node.sublabel}
                        </p>
                    )}
                </div>
            </div>

            {/* Connector Line */}
            {!isLast && (
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.2, delay: index * 0.08 + 0.1 }}
                    className="w-0.5 h-4 my-1"
                    style={{ backgroundColor: color, originY: 0 }}
                />
            )}
        </motion.div>
    )
}

export default FlowchartSection
