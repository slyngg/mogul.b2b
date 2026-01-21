import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Calendar,
  Clock,
  CheckCircle2,
  Zap,
  Shield,
  Users
} from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Identify Hidden Inefficiencies',
    description: 'We find the holes in your current system that are costing you time and money'
  },
  {
    icon: Shield,
    title: 'Unbiased Expert Advice',
    description: 'Get honest recommendations tailored to your specific business needs'
  },
  {
    icon: Users,
    title: 'Custom Solution Roadmap',
    description: 'Walk away with a clear action plan, whether fixing existing systems or building new'
  }
];

export const BookAudit = () => {
  const [calLoaded, setCalLoaded] = useState(false);

  // Load Cal.com embed script
  useEffect(() => {
    // Check if Cal is already loaded
    if ((window as any).Cal) {
      setCalLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      setCalLoaded(true);
      // Initialize Cal embed
      (window as any).Cal?.('init', { origin: 'https://cal.com' });
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full px-4 py-2 mb-6"
          >
            <Calendar className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-neon-blue">100% Free • No Obligation</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Book Your <span className="text-neon-blue">FREE</span> Audit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Let's identify the holes in your business and build a roadmap to fix them—or
            create something entirely new from scratch.
          </motion.p>
        </div>
        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">What You'll Get</h2>

            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What We Do */}
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">We Accommodate Your Vision</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                  <span>Fix holes in your existing business systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                  <span>Build something entirely new from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                  <span>Provide unbiased, honest advice tailored to you</span>
                </li>
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-blue" />
                <span>30-minute call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-blue" />
                <span>No obligation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Cal.com Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-mogul-card border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h2 className="text-xl font-bold mb-6 text-center">Select a Time</h2>

            {/* Cal.com Embed Container */}
            <div
              className="min-h-[500px] rounded-xl overflow-hidden"
              style={{ backgroundColor: '#0a0a0f' }}
            >
              {/* 
                Cal.com Inline Embed
                Replace 'YOUR_CAL_USERNAME/YOUR_EVENT' with your actual Cal.com link
                Example: 'mogul/free-audit'
              */}
              <div
                data-cal-link="mogulb2b/free-audit"
                data-cal-config='{"theme":"dark"}'
                style={{ width: '100%', height: '100%', minHeight: '500px' }}
              />

              {!calLoaded && (
                <div className="flex items-center justify-center h-[500px]">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-400 text-sm">Loading calendar...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Fallback Link */}
            <p className="text-center text-gray-500 text-sm mt-4">
              Having trouble?{' '}
              <a
                href="https://cal.com/mogulb2b/free-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-blue hover:text-neon-cyan transition-colors"
              >
                Open calendar in new tab
                <ArrowRight className="w-3 h-3 inline ml-1" />
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
