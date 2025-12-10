import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 bg-mogul-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-mogul-card to-mogul-navy border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-50%] bg-gradient-conic from-neon-blue via-neon-purple via-neon-cyan to-neon-blue opacity-10"
              />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Start the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan italic">
                  revolution
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Stop managing chaos. Start engineering success. Book your free audit today 
                and discover how Mogul can transform your business operations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/book-audit"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-xl overflow-hidden"
                >
                  {/* Border Beam Animation */}
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-gradient-conic from-transparent via-white/30 to-transparent" />
                  </span>
                  <span className="relative flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book FREE Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <a
                  href="mailto:info@mogul.b2b"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Contact Sales
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
                {[
                  { value: '100+', label: 'Businesses Transformed' },
                  { value: '$50M+', label: 'Revenue Generated' },
                  { value: '99%', label: 'Client Satisfaction' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
