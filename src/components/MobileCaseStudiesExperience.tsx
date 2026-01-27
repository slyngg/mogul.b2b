import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar,
  TrendingUp,
  Zap,
  Star,
  Quote,
  CheckCircle2,
  Brain,
  Bot,
  GraduationCap,
  Database,
  Layers,
  FileText,
  Sparkles
} from 'lucide-react';

const SnapSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <section className={`min-h-screen w-full snap-start flex flex-col items-center justify-center p-6 pt-24 pb-12 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

const results = [
  { metric: 'Compute Savings', value: '99%', icon: Zap, color: 'text-blue-400' },
  { metric: 'AI Agents', value: '6', icon: Bot, color: 'text-purple-400' },
  { metric: 'LLM Models', value: '5+', icon: Brain, color: 'text-cyan-400' },
  { metric: 'Pricing From', value: '$1.99', icon: TrendingUp, color: 'text-green-400' },
];

const coreFeatures = [
  'Router-Centric RAG System',
  'Global SHA-256 Deduplication',
  'Small-to-Big Retrieval Pipeline',
  '6-Agent Report Builder Swarm',
  'Style Fingerprinting',
  'Intelligent Intent Routing'
];

const agentSwarm = [
  { name: 'Architect', model: 'DeepSeek', icon: Layers },
  { name: 'Miner', model: 'Gemini Flash', icon: Database },
  { name: 'Analyst', model: 'Gemini Pro', icon: TrendingUp },
  { name: 'Ghostwriter', model: 'Gemini Pro', icon: FileText },
  { name: 'Professor', model: 'DeepSeek V3', icon: GraduationCap },
  { name: 'Style Analyzer', model: 'Gemini Flash', icon: Sparkles },
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
      
      {/* SECTION 1: HEADER - Student-OS Hero */}
      <SnapSection className="bg-mogul-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-purple-600/10 to-transparent opacity-70" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center w-full"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-medium tracking-wider uppercase mb-4 block"
          >
            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
              Mogul's Flagship Venture
            </span>
          </motion.span>

          <h1 className="text-3xl font-bold leading-tight mb-2 mt-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Student-OS
          </h1>
          
          <p className="text-gray-400 mb-4 text-sm italic">
            "The Open Source University"
          </p>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            AI-powered academic operating system with multi-agent report generation.
          </p>

          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">AI / EdTech / SaaS</span>
            </div>
            <a
              href="https://student-os.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg"
            >
              Visit Live Site
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="w-6 h-6 mx-auto transform rotate-90 text-blue-400" />
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
              Students waste countless hours re-reading textbooks without retention, creating study materials manually, and writing reports from scratch.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Pain Points</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  No personalized AI tutoring
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Manual study material creation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Report writing is painful
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Materials scattered across courses
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
            A complete AI-powered study platform with intelligent routing and multi-agent report generation.
          </p>

          <div className="space-y-2">
            {coreFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SnapSection>

      {/* SECTION 4: AGENT SWARM */}
      <SnapSection className="bg-mogul-navy">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full"
        >
          <h2 className="text-xl font-bold text-center mb-2">6-Agent Report Builder</h2>
          <p className="text-gray-400 text-sm text-center mb-6">AI swarm that writes in your voice</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {agentSwarm.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-500/20 rounded-xl p-3 text-center"
              >
                <agent.icon className="w-5 h-5 mx-auto mb-1 text-orange-400" />
                <div className="text-white text-sm font-semibold">{agent.name}</div>
                <div className="text-orange-400 text-[10px]">{agent.model}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SnapSection>

      {/* SECTION 5: RESULTS */}
      <SnapSection>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full"
        >
          <h2 className="text-xl font-bold text-center mb-6">Key Metrics</h2>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-4 text-center"
              >
                <result.icon className={`w-6 h-6 mx-auto mb-2 ${result.color}`} />
                <div className={`text-2xl font-bold ${result.color}`}>{result.value}</div>
                <div className="text-xs text-gray-500">{result.metric}</div>
              </motion.div>
            ))}
          </div>

          <a
            href="https://student-os.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl py-3 text-sm font-medium"
          >
            Visit Live Site
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </SnapSection>

      {/* SECTION 6: TESTIMONIAL & CTA */}
      <SnapSection className="bg-gradient-to-b from-mogul-dark to-mogul-navy">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 mb-8">
            <Quote className="w-8 h-8 text-blue-400 mx-auto mb-4 opacity-50" />
            <blockquote className="text-lg text-white font-medium mb-4 leading-relaxed">
              "This is the future of education—AI that actually understands how you learn."
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <span className="text-white">Cayden Moretti</span> · Founder, Mogul
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">
            Ready to Build{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Vision</span>?
          </h2>
          
          <p className="text-gray-400 mb-6 text-sm">
            Whether you need to fix holes in your existing system or build something entirely new.
          </p>

          <Link
            to="/book-audit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl mb-4"
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
