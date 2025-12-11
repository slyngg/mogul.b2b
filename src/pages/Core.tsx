import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, 
  MessageSquare, 
  Phone, 
  BarChart3, 
  Zap, 
  Clock, 
  Users,
  Sparkles,
  Bot,
  Mic,
  FileText,
  Activity,
  ArrowRight,
  Check,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileExperience } from '../components/MobileExperience';

const features = [
  {
    icon: Brain,
    title: 'Intuitive AI Contexting Engine',
    description: 'Uses 35 categories of data to have true intuition. Understands user profile context, list context, and lead context.',
    color: 'from-neon-blue to-neon-cyan'
  },
  {
    icon: MessageSquare,
    title: 'Smart Message Management',
    description: 'Ask CORE about your unanswered Instagram messages. Get priority breakdowns and preloaded ready-to-go responses.',
    color: 'from-neon-purple to-pink-500'
  },
  {
    icon: Phone,
    title: 'Live Calling Mode',
    description: 'Focused calling interface with fresh hot tips for each lead. AI-transcribed call logs and playback recordings.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Voice Command Automations',
    description: '"Hey CORE, make sure when leads come in from our live website they instantly get messaged by an AI appointment setter."',
    color: 'from-orange-400 to-red-500'
  },
  {
    icon: FileText,
    title: 'Intelligent Note Taking',
    description: 'Manual notes with AI refine button. Suggested automated notes using transcribed call logs.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Activity,
    title: 'Activity Timeline',
    description: 'Detailed activity timeline for each lead. Call recordings displayed for playback alongside all other activity.',
    color: 'from-violet-400 to-purple-500'
  }
];

const contextSources = [
  'User profile context',
  'List context', 
  'Lead context',
  'Historical interactions',
  'Business metrics',
  'Industry benchmarks'
];

const contextTiers = [
  {
    title: 'TIER 1: FOUNDATIONAL CONTEXT',
    layers: ['Identity Context', 'Domain Context', 'Temporal Context', 'Behavioral Context', 'Data Context'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'TIER 2: COGNITIVE CONTEXT',
    layers: ['Intent Context', 'Environmental Context', 'Emotional Context', 'Relational Context', 'Predictive Context'],
    color: 'from-cyan-500 to-teal-500'
  },
  {
    title: 'TIER 3: STRATEGIC CONTEXT',
    layers: ['Historical Context', 'Competitive Context', 'Financial Context', 'Technical Context', 'Strategic Context'],
    color: 'from-teal-500 to-green-500'
  },
  {
    title: 'TIER 4: OPERATIONAL CONTEXT',
    layers: ['Cultural Context', 'Legal Context', 'Performance Context', 'Learning Context', 'Risk Context'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'TIER 5: ENTERPRISE INTELLIGENCE',
    layers: ['Hierarchical Context', 'Collaborative Context', 'Process Context', 'Stakeholder Context', 'Ecosystem Context'],
    color: 'from-emerald-500 to-yellow-500'
  },
  {
    title: 'TIER 6: ADVANCED INTELLIGENCE',
    layers: ['Account Hierarchy Context', 'Team Analytics Context', 'Calendar Intelligence Context', 'Project Management Context', 'Tax Intelligence Context'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'TIER 7: OPERATIONAL EXCELLENCE',
    layers: ['ERP Operations Context', 'Finance Management Context', 'Integration Health Context', 'Automation Intelligence Context', 'Compliance Monitoring Context'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'TIER 8: ADVANCED OPERATIONAL INTELLIGENCE',
    layers: ['Document Intelligence', 'Communication Intelligence', 'Automation Telemetry', 'Integration Observability', 'Executive Resilience & Wellbeing'],
    color: 'from-red-500 to-purple-500'
  }
];

export const Core = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <>
      <div className="md:hidden">
        <MobileExperience />
      </div>
      <div ref={containerRef} className="hidden md:block min-h-screen">
        {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
          <motion.div 
            style={{ y, opacity }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 rounded-full blur-[100px] animate-pulse" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-gray-300">AI-Native Business Management</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-white">MOGUL:</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan">
              CORE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6"
          >
            CRM • ERP • PM • AI-Native Business Manager
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12"
          >
            Has the day to day work of managing your business run you thin? 
            CORE will know what needs to be done before it ever even happens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/book-audit"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-mogul-navy relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              I know you are tired of having to remember which of your{' '}
              <span className="text-neon-blue">12 follow ups</span> are available today.
            </h2>
            <p className="text-xl text-gray-400">
              With perfect retention of data as it scales, CORE understands where your business is, 
              where it's been, and where it's going.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Extensive AI Integrations
            </h2>
            <p className="text-gray-400 text-lg">
              Focus on the leads, not tedious tasks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-mogul-card border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-mogul-card rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Context Engine */}
      <section className="py-24 bg-mogul-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-neon-purple/10 border border-neon-purple/20 rounded-full px-4 py-2 mb-6">
                <Brain className="w-4 h-4 text-neon-purple" />
                <span className="text-sm text-neon-purple">35 Categories of Data</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Intuitive AI{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
                  Contexting Engine
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                CORE doesn't just store data—it understands it. Our AI contexting engine 
                processes 35 categories of information to provide true business intuition.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Context Sources:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {contextSources.map((source, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Check className="w-4 h-4 text-neon-purple" />
                      {source}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Mockup UI */}
              <div className="bg-mogul-card border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Chat Interface */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-mogul-dark rounded-xl rounded-tl-none p-4 max-w-sm">
                      <p className="text-sm text-gray-300">
                        You have 3 high-priority leads that haven't been contacted in 48 hours. 
                        Based on their engagement patterns, I recommend reaching out to Sarah Chen first—
                        she's most likely to convert this week.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-neon-blue/10 border border-neon-blue/20 rounded-xl rounded-tr-none p-4 max-w-sm">
                      <p className="text-sm text-gray-300">
                        Draft a message for Sarah
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-mogul-dark rounded-xl rounded-tl-none p-4 max-w-sm">
                      <p className="text-sm text-gray-300 mb-3">
                        Based on her previous interactions and industry context, here's a personalized message:
                      </p>
                      <div className="bg-mogul-navy rounded-lg p-3 text-sm text-neon-blue border border-neon-blue/20">
                        "Hi Sarah, I noticed you were exploring our automation features last week..."
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 bg-mogul-dark rounded-xl px-4 py-3 flex items-center gap-3">
                    <Mic className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-500 text-sm">Ask CORE anything...</span>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-mogul-card border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-neon-blue" />
                  <span className="text-sm font-medium">98% Accuracy</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-mogul-card border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-neon-purple" />
                  <span className="text-sm font-medium">40+ hrs saved/week</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context System Tiers */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              CORE Context System
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A multi-layered intelligence framework that provides deep understanding across every dimension of your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contextTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-mogul-card border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all group"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${tier.color} rounded-full mb-4 opacity-50 group-hover:opacity-100 transition-opacity`} />
                <h3 className="text-sm font-bold text-gray-300 mb-4 tracking-wider uppercase">{tier.title}</h3>
                <ul className="space-y-2">
                  {tier.layers.map((layer, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tier.color} mt-1.5 flex-shrink-0`} />
                      {layer}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Commands */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Create Automations with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
                Voice Commands
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simply tell CORE what you need, and watch it build complex automations in seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Voice Command</p>
                    <p className="text-lg font-medium">Recording...</p>
                  </div>
                </div>

                <div className="bg-mogul-dark rounded-xl p-6 mb-6">
                  <p className="text-xl text-gray-300 italic">
                    "Hey CORE, make sure when leads come in from our live website they instantly 
                    get messaged by an AI appointment setter."
                  </p>
                </div>

                <div className="flex items-center gap-3 text-neon-blue">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm">Automation created: Website Lead → AI Appointment Setter</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-mogul-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                transform
              </span>{' '}
              your business?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Join the waitlist for early access to CORE and be among the first to experience 
              AI-native business management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-audit"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Book a FREE Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:info@mogul.b2b"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};
