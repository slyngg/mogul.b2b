import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Star,
  Quote,
  CheckCircle2
} from 'lucide-react';

const SnapSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <section className={`min-h-screen w-full snap-start flex flex-col items-center justify-center p-6 pt-24 pb-12 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

const results = [
  { metric: 'Launch Time', value: '6 weeks', icon: Clock, color: 'text-neon-blue' },
  { metric: 'Performance', value: '98/100', icon: Zap, color: 'text-neon-purple' },
  { metric: 'Engagement', value: '+340%', icon: Users, color: 'text-neon-cyan' },
  { metric: 'Load Time', value: '<1.5s', icon: TrendingUp, color: 'text-green-400' },
];

const deliverables = [
  'Custom CMS for content management',
  'Optimized media delivery system',
  'Premium dark-mode interface',
  'Mobile-responsive design',
  'SEO optimization',
  'Analytics integration'
];

export const MobileCaseStudiesExperience = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    const runTransition = () => navigate(path);
    if ('startViewTransition' in document) {
      (document as Document & { startViewTransition?: (cb: () => void) => void }).startViewTransition?.(runTransition);
    } else {
      runTransition();
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-mogul-dark text-white md:hidden">
      
      {/* SECTION 1: HEADER */}
      <SnapSection className="bg-mogul-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent opacity-50" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center w-full"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-blue text-xs font-medium tracking-wider uppercase mb-4 block"
          >
            Our Work
          </motion.span>

          <h1 className="text-3xl font-bold leading-tight mb-4">
            Visions Brought to{' '}
            <span className="text-neon-blue">Reality</span>
          </h1>
          
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            We don't just build websites. We engineer complete business systems that transform how our clients operate.
          </p>

          <div className="bg-mogul-card border border-white/10 rounded-xl p-4 mb-6">
            <div className="text-neon-blue text-xs font-medium tracking-wider uppercase mb-2">Featured Case Study</div>
            <img 
              src="/rmtv-logo.png" 
              alt="Respect Music TV" 
              className="h-10 mb-2"
            />
            <p className="text-xs text-gray-400">Music & Entertainment Platform</p>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="w-6 h-6 mx-auto transform rotate-90 text-neon-blue" />
          </motion.div>
        </motion.div>
      </SnapSection>

      {/* SECTION 2: THE CHALLENGE */}
      <SnapSection className="bg-mogul-navy">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full"
        >
          <h2 className="text-xl font-bold text-center mb-6">The Challenge</h2>

          <div className="bg-mogul-card border border-white/10 rounded-xl p-5 mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Respect Music TV came to us with a bold vision for a music platform that would stand out in a crowded market.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Requirements</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue">•</span>
                  High-traffic streaming capability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue">•</span>
                  Artist management system
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue">•</span>
                  Premium aesthetic design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue">•</span>
                  Content curation tools
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </SnapSection>

      {/* SECTION 3: THE SOLUTION */}
      <SnapSection>
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-full"
        >
          <h2 className="text-xl font-bold text-center mb-6">Our Solution</h2>

          <p className="text-gray-400 text-sm text-center mb-6">
            We engineered a full-stack solution with every interaction designed to feel premium.
          </p>

          <div className="space-y-2">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-mogul-card border border-white/10 rounded-lg p-3"
              >
                <CheckCircle2 className="w-5 h-5 text-neon-blue flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SnapSection>

      {/* SECTION 4: RESULTS */}
      <SnapSection className="bg-mogul-navy">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full"
        >
          <h2 className="text-xl font-bold text-center mb-6">The Results</h2>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-mogul-card border border-white/10 rounded-xl p-4 text-center"
              >
                <result.icon className={`w-6 h-6 mx-auto mb-2 ${result.color}`} />
                <div className={`text-2xl font-bold ${result.color}`}>{result.value}</div>
                <div className="text-xs text-gray-500">{result.metric}</div>
              </motion.div>
            ))}
          </div>

          <a
            href="https://respectmusictv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 text-sm hover:bg-white/10 transition-colors"
          >
            Visit Live Site
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </SnapSection>

      {/* SECTION 5: TESTIMONIAL & CTA */}
      <SnapSection className="bg-gradient-to-b from-mogul-dark to-mogul-navy">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full text-center"
        >
          <div className="bg-neon-blue/5 border border-neon-blue/20 rounded-xl p-6 mb-8">
            <Quote className="w-8 h-8 text-neon-blue mx-auto mb-4 opacity-50" />
            <blockquote className="text-lg text-white font-medium mb-4 leading-relaxed">
              "Mogul didn't just build what we asked for—they understood our vision and 10x'd it."
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <span className="text-white">Founder</span> · Respect Music TV
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">
            Ready to Build{' '}
            <span className="text-neon-blue">Your Vision</span>?
          </h2>
          
          <p className="text-gray-400 mb-6 text-sm">
            Whether you need to fix holes in your existing system or build something entirely new.
          </p>

          <Link
            to="/book-audit"
            className="w-full flex items-center justify-center gap-2 bg-neon-blue text-black font-bold py-4 rounded-xl mb-4"
          >
            <Calendar className="w-5 h-5" />
            Book FREE Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <button
            onClick={() => handleNavigate('/')}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </button>
        </motion.div>
      </SnapSection>
    </div>
  );
};
