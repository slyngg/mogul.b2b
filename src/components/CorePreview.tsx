import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  MessageSquare, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  Bot
} from 'lucide-react';

const features = [
  { icon: Brain, label: 'AI Contexting', color: 'text-neon-blue' },
  { icon: MessageSquare, label: 'Smart Messaging', color: 'text-neon-purple' },
  { icon: BarChart3, label: 'Analytics', color: 'text-neon-cyan' },
  { icon: Zap, label: 'Automations', color: 'text-yellow-400' },
];

export const CorePreview = () => {
  return (
    <section className="py-24 bg-mogul-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-sm bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent font-medium">
                Introducing CORE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The AI-Native{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan">
                Business Manager
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-4">
              CORE combines CRM, ERP, and Project Management with native AI capabilities. 
              It knows what needs to be done before it ever even happens.
            </p>
            <p className="text-sm text-gray-500 mb-8 italic">
              * Concept preview — full product demo available during your audit call
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-mogul-card border border-white/5 rounded-full px-4 py-2"
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-sm text-gray-300">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/core"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon-blue text-black font-semibold rounded-xl hover:bg-neon-blue/90 transition-all"
              >
                Learn About CORE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/book-audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
              >
                See Live Demo
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan opacity-20" />
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">CORE Assistant</p>
                      <p className="text-xs text-gray-400">AI-Powered Insights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-500">Active</span>
                  </div>
                </div>

                {/* Chat Preview */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-mogul-dark rounded-xl rounded-tl-none p-4 max-w-[280px]">
                      <p className="text-sm text-gray-300">
                        Good morning! You have <span className="text-neon-blue font-semibold">3 high-priority</span> follow-ups today. 
                        I've prepared personalized messages for each.
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-mogul-dark rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Today's Priority Actions</span>
                      <span className="text-xs text-neon-blue">View all</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: 'Sarah Chen', action: 'Follow up', priority: 'High' },
                        { name: 'Marcus J.', action: 'Send proposal', priority: 'High' },
                        { name: 'Emily R.', action: 'Schedule call', priority: 'Medium' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-700" />
                            <span className="text-sm">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">{item.action}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              item.priority === 'High' 
                                ? 'bg-red-500/20 text-red-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {item.priority}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Leads', value: '842', change: '+12%' },
                    { label: 'Revenue', value: '$124k', change: '+8%' },
                    { label: 'Tasks', value: '23', change: '-5' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-mogul-dark rounded-lg p-3 text-center">
                      <p className="text-lg font-bold">{stat.value}</p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                      <p className="text-xs text-green-400">{stat.change}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-mogul-card border border-neon-blue/30 rounded-xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-neon-blue" />
                <span className="text-sm font-medium">35 Context Sources</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-mogul-card border border-neon-purple/30 rounded-xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-neon-purple" />
                <span className="text-sm font-medium">Voice Automations</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
