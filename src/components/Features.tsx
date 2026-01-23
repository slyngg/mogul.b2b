import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Zap, 
  Bot, 
  BarChart3, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Check,
  Clock,
  Globe
} from 'lucide-react';
import { Spotlight } from './Spotlight';

const features = [
  {
    id: 'fullstack',
    title: 'Full-Stack Applications',
    description: 'State-of-the-art technology with innovative automations. We build complete systems that handle everything from frontend to backend.',
    icon: Zap,
    color: 'from-neon-blue to-neon-cyan',
    tags: ['SoTA tech', 'Custom builds'],
    cta: 'Learn more',
  },
  {
    id: 'automation',
    title: 'Revenue on Autopilot',
    description: 'Transform your manual business into a running engine. Generate revenue in your sleep with intelligent automation.',
    icon: Bot,
    color: 'from-neon-purple to-pink-500',
    tags: ['24/7 operations', 'Passive income'],
    cta: 'See how',
  },
  {
    id: 'flexible',
    title: 'Flexible Architecture',
    description: 'Leverage our CORE platform, custom backends, or bring your own CRM subscription—we handle the migration and integration.',
    icon: BarChart3,
    color: 'from-green-400 to-emerald-500',
    tags: ['CORE platform', 'BYO CRM'],
    cta: 'Explore options',
  },
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate cards
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextCard = () => setActiveIndex((prev) => (prev + 1) % features.length);
  const prevCard = () => setActiveIndex((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section id="services" className="py-24 bg-mogul-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neon-blue text-sm font-medium tracking-wider uppercase mb-4 block"
            >
              What We Build
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Your vision,<br />
              <span className="text-neon-blue">
                engineered to scale
              </span>
            </motion.h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevCard}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCard}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Spotlight
              key={feature.id}
              className={`group relative bg-mogul-card border rounded-2xl p-8 transition-all duration-500 ${
                index === activeIndex 
                  ? 'border-white/20 scale-[1.02] shadow-2xl' 
                  : 'border-white/5 hover:border-white/10'
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-mogul-card rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {feature.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400"
                    >
                      <Check className="w-3.5 h-3.5 text-neon-blue" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-neon-blue hover:text-neon-cyan transition-colors group/link"
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Active Indicator - subtle glow outline only, no fill */}
              {index === activeIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-2xl border-2 border-neon-blue/40 pointer-events-none"
                />
              )}
            </Spotlight>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-neon-blue' 
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '300%', label: 'Revenue Increase', icon: BarChart3 },
            { value: '40+', label: 'Hours Saved/Week', icon: Clock },
            { value: '3x', label: 'Lead Conversion', icon: Zap },
            { value: '99.9%', label: 'Uptime', icon: Globe },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-neon-blue" />
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
