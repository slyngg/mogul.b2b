import { motion } from 'framer-motion';

const logos = [
  { name: 'TechFlow', industry: 'SaaS' },
  { name: 'Apex Real Estate', industry: 'Real Estate' },
  { name: 'HealthFirst', industry: 'Healthcare' },
  { name: 'Velocity Marketing', industry: 'Agency' },
  { name: 'CloudScale', industry: 'Technology' },
  { name: 'FinanceFlow', industry: 'Finance' },
  { name: 'DataPrime', industry: 'Analytics' },
  { name: 'ScaleUp', industry: 'Consulting' },
];

export const LogoTicker = () => {
  return (
    <div className="py-12 bg-mogul-dark border-y border-white/5 relative overflow-hidden">
      {/* Section Label */}
      <div className="text-center mb-8">
        <span className="text-sm text-gray-500 uppercase tracking-widest">Trusted by industry leaders</span>
      </div>
      
      {/* Marquee Container with Alpha Mask */}
      <div className="relative mask-fade-x">
        <motion.div 
          animate={{ x: [0, '-50%'] }}
          transition={{ 
            duration: 30, 
            ease: 'linear', 
            repeat: Infinity,
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-6 py-3 bg-white/[0.02] border border-white/5 rounded-xl hover:border-neon-blue/30 hover:bg-white/[0.05] transition-all group cursor-default"
            >
              {/* Logo Placeholder */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                <span className="text-lg font-bold text-neon-blue">{logo.name.charAt(0)}</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {logo.name}
                </div>
                <div className="text-xs text-gray-600">{logo.industry}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
