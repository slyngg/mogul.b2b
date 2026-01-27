import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Cpu,
  Database,
  FileText,
  Sparkles,
  Bot,
  GraduationCap,
  BookOpen,
  Layers,
  Route,
  Shield
} from 'lucide-react';
import { MobileCaseStudiesExperience } from '../components/MobileCaseStudiesExperience';

// Student-OS Agent Swarm
const agentSwarm = [
  { name: 'Architect', role: 'Creates hierarchical outline with word count targets', model: 'DeepSeek Reasoner', icon: Layers },
  { name: 'Miner', role: 'Extracts facts and citations from source materials', model: 'Gemini Flash', icon: Database },
  { name: 'Analyst', role: 'Generates chart specifications from numerical data', model: 'Gemini Pro', icon: TrendingUp },
  { name: 'Ghostwriter', role: "Writes prose matching user's style fingerprint", model: 'Gemini Pro', icon: FileText },
  { name: 'Professor', role: 'Grades report against rubric, suggests fixes', model: 'DeepSeek V3', icon: GraduationCap },
  { name: 'Style Analyzer', role: "Analyzes user's writing sample to extract style guide", model: 'Gemini Flash', icon: Sparkles },
];

// Intent Router mapping
const intentRoutes = [
  { queryType: 'Math/Logic', model: 'DeepSeek R1', reason: 'Chain-of-thought reasoning' },
  { queryType: 'Video/Visual', model: 'Gemini 1.5 Pro Vision', reason: 'Multimodal understanding' },
  { queryType: 'Creative Writing', model: 'Gemini 1.5 Pro', reason: 'Best prose synthesis' },
  { queryType: 'Technical Writing', model: 'DeepSeek Reasoner', reason: 'Structured precision' },
  { queryType: 'Quick Facts', model: 'Gemini Flash', reason: 'Speed + low cost' },
];

const caseStudies = [
  {
    id: 'student-os',
    client: 'Student-OS',
    logo: null,
    industry: 'AI / EdTech / SaaS',
    url: 'https://student-os.app',
    tagline: 'The Open Source University',
    headline: 'AI-Powered Academic Operating System with Multi-Agent Report Generation',
    description: 'Student-OS is a Router-Centric RAG (Retrieval-Augmented Generation) system that transforms how students study. It ingests documents, creates a searchable "compressed brain" with vector embeddings, routes questions to optimal AI models, and generates study artifacts automatically—including entire academic reports via a 6-agent AI swarm.',
    challenge: 'Students waste countless hours re-reading textbooks without retention, creating study materials manually, writing reports from scratch, and managing materials across courses. No existing solution provides intelligent, personalized AI tutoring with automatic artifact generation.',
    solution: 'We built a complete AI-powered study platform featuring global SHA-256 deduplication (99% compute savings), Small-to-Big retrieval with cross-encoder reranking, intelligent intent routing across multiple LLMs, and a flagship 6-agent report builder that writes in the student\'s own voice.',
    results: [
      { metric: 'Compute Savings', value: '99%', icon: Zap },
      { metric: 'AI Agents', value: '6', icon: Bot },
      { metric: 'Public Library', value: '∞', icon: BookOpen },
      { metric: 'Pricing From', value: '$1.99', icon: TrendingUp },
    ],
    testimonial: {
      quote: "This is the future of education—AI that actually understands how you learn and adapts to your style.",
      author: 'Cayden Moretti',
      company: 'Founder, Mogul'
    },
    featured: true,
    isMogulVenture: true,
  },
  {
    id: 'respectmusictv',
    client: 'Respect Music TV',
    logo: '/rmtv-logo.png',
    industry: 'Music & Entertainment',
    url: 'https://respectmusictv.com',
    headline: 'From Vision to Reality: A Complete Digital Transformation',
    description: 'Respect Music TV came to us with a bold vision for a music platform that would stand out in a crowded market. We built their entire digital presence from the ground up—a cutting-edge web application that showcases artists, manages content, and delivers an immersive user experience.',
    challenge: 'The client needed a platform that could handle high-traffic streaming, artist management, and content curation while maintaining a premium aesthetic that reflects the brand\'s commitment to quality music.',
    solution: 'We engineered a full-stack solution with a custom CMS, optimized media delivery, and a sleek dark-mode interface that puts the music first. Every interaction was designed to feel premium.',
    results: [
      { metric: 'Launch Time', value: '6 weeks', icon: Clock },
      { metric: 'Performance Score', value: '98/100', icon: Zap },
      { metric: 'User Engagement', value: '+340%', icon: Users },
      { metric: 'Load Time', value: '<1.5s', icon: TrendingUp },
    ],
    testimonial: {
      quote: "Mogul didn't just build what we asked for, they understood our vision and 10x'd it. The platform exceeded every expectation.",
      author: 'Founder',
      company: 'Respect Music TV'
    },
    featured: false,
  },
  {
    id: 'leshore',
    client: 'Mike Leshore Audio Vault',
    logo: null,
    industry: 'Music & E-commerce',
    url: 'https://leshore.co',
    headline: 'Premium Beat Licensing Platform with WCAG AAA-Compliant Admin',
    description: 'We built the Mike Leshore Audio Vault—a premium beat-licensing platform featuring a sleek marketing storefront and "MikeOS" admin panel focused on accessibility and clarity. The platform includes a responsive BeatGrid with filtering, global audio player, 4-tier licensing system, and a signature 3-step upload wizard that auto-validates ZIP packages and extracts metadata.',
    challenge: 'The client needed a complete beat licensing ecosystem: a storefront for artists to discover and purchase beats with instant preview, plus a WCAG AAA-compliant admin panel that a non-technical producer could use to upload, validate, and manage beats with zero manual QA.',
    solution: 'We engineered a full-stack Next.js 16 application with TypeScript, Tailwind, MongoDB, AWS S3/Cloudflare R2 storage, Clerk auth, and Stripe payments. The 3-step upload wizard validates Master ZIP packages, auto-extracts BPM/key from filenames, and uploads to S3 with real-time progress. Zustand powers a persistent global audio player for uninterrupted browsing.',
    results: [
      { metric: 'Accessibility', value: 'AAA', icon: Zap },
      { metric: 'License Tiers', value: '4', icon: Users },
      { metric: 'Auto QA', value: '100%', icon: TrendingUp },
      { metric: 'Upload Steps', value: '3', icon: Clock },
    ],
    testimonial: {
      quote: "Go buy your beats now! The platform Mogul built makes selling beats effortless with zero manual work.",
      author: 'Mike Leshore',
      company: 'LeShore'
    },
    featured: false,
  },
];

export const CaseStudies = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileCaseStudiesExperience />
      </div>
      <div className="hidden md:block min-h-screen pt-24 pb-16">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neon-blue text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Visions Brought to{' '}
            <span className="text-neon-blue">Reality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We don't just build websites. We engineer complete business systems 
            that transform how our clients operate and scale.
          </motion.p>
        </div>

        {/* Featured Case Study - Student-OS Hero */}
        {caseStudies.filter(cs => cs.featured).map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            {/* Hero Card with Gradient Border */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-30 animate-pulse" />
              <div className="relative bg-mogul-card border border-white/10 rounded-3xl overflow-hidden">
                {/* Hero Header with Gradient */}
                <div className="relative p-8 md:p-12 border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent" />
                  <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold tracking-wider uppercase rounded-full">
                          Mogul's Flagship Venture
                        </span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium tracking-wider uppercase rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                        {study.client}
                      </h2>
                      {'tagline' in study && (
                        <p className="text-xl text-gray-400 italic">"{study.tagline}"</p>
                      )}
                    </div>
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all group shadow-lg shadow-blue-500/25"
                    >
                      <GraduationCap className="w-5 h-5" />
                      Visit Live Site
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.headline}</h3>
                  <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-4xl">
                    {study.description}
                  </p>

                  {/* Results Grid */}
                  <div className="mb-12">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-500" />
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-all group"
                        >
                          <result.icon className="w-6 h-6 mx-auto mb-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-500">{result.metric}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-mogul-dark border border-white/5 rounded-xl p-6">
                      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-red-400" />
                        The Challenge
                      </h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div className="bg-mogul-dark border border-white/5 rounded-xl p-6">
                      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-green-400" />
                        Our Solution
                      </h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  {/* Intent Router */}
                  <div className="mb-12">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                      <Route className="w-4 h-4 text-cyan-500" />
                      Intelligent Intent Router
                    </h4>
                    <p className="text-gray-400 mb-6">
                      Every query is analyzed and routed to the optimal AI model based on query type:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {intentRoutes.map((route, i) => (
                        <motion.div
                          key={route.queryType}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.05 }}
                          className="bg-mogul-dark border border-white/5 rounded-xl p-4 hover:border-cyan-500/30 transition-colors"
                        >
                          <div className="text-cyan-400 font-semibold mb-1">{route.queryType}</div>
                          <div className="text-white text-sm font-medium mb-1">{route.model}</div>
                          <div className="text-gray-500 text-xs">{route.reason}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Agent Swarm */}
                  <div className="mb-12">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                      <Bot className="w-4 h-4 text-orange-500" />
                      6-Agent Report Builder Swarm
                    </h4>
                    <p className="text-gray-400 mb-6">
                      A multi-agent AI system that writes academic reports matching the student's writing style:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {agentSwarm.map((agent, i) => (
                        <motion.div
                          key={agent.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.05 }}
                          className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-500/20 rounded-xl p-5 hover:border-orange-500/40 transition-all group"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                              <agent.icon className="w-5 h-5 text-orange-400" />
                            </div>
                            <div>
                              <div className="text-white font-semibold">{agent.name}</div>
                              <div className="text-orange-400 text-xs">{agent.model}</div>
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm">{agent.role}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-12">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-green-500" />
                      Core Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-mogul-dark border border-white/5 rounded-xl p-5">
                        <h5 className="text-white font-semibold mb-2">Global Deduplication Engine</h5>
                        <p className="text-gray-400 text-sm">SHA-256 hash-based deduplication at the asset level. If 500 students upload the same textbook, we process it once and link instantly—99% compute savings.</p>
                      </div>
                      <div className="bg-mogul-dark border border-white/5 rounded-xl p-5">
                        <h5 className="text-white font-semibold mb-2">Small-to-Big Retrieval</h5>
                        <p className="text-gray-400 text-sm">Hybrid BM25 + Vector search, cross-encoder reranking (Top 20 → Top 5), and context expansion to retrieve parent chunks for fuller context.</p>
                      </div>
                      <div className="bg-mogul-dark border border-white/5 rounded-xl p-5">
                        <h5 className="text-white font-semibold mb-2">Study Space Architecture</h5>
                        <p className="text-gray-400 text-sm">Courses isolated in rigid containers—biology notes never mix with calculus. Each space has materials, artifacts, and calendar events.</p>
                      </div>
                      <div className="bg-mogul-dark border border-white/5 rounded-xl p-5">
                        <h5 className="text-white font-semibold mb-2">Style Fingerprinting</h5>
                        <p className="text-gray-400 text-sm">Analyzes sentence length, vocabulary complexity, patterns to replicate, and banned words for AI detection avoidance.</p>
                      </div>
                    </div>
                  </div>

                  {/* Self-Sustaining Ecosystem */}
                  <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-8">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-green-500" />
                      Self-Sustaining Knowledge Ecosystem
                    </h4>
                    <p className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                      Paying subscribers generate study artifacts that fuel a <span className="text-green-400">free public library</span> for all students.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">Study Guides</div>
                        <div className="text-xs text-gray-500">AI-generated summaries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">Flashcards</div>
                        <div className="text-xs text-gray-500">Spaced repetition ready</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">Practice Tests</div>
                        <div className="text-xs text-gray-500">Auto-graded quizzes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">Full Reports</div>
                        <div className="text-xs text-gray-500">Academic papers</div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      The more students subscribe, the richer the public library becomes. Free users discover value, convert to paid, and contribute back—creating an ever-growing flywheel of educational content that benefits everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Additional Case Studies */}
        {caseStudies.filter(cs => !cs.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.filter(cs => !cs.featured).map((study) => (
                <div 
                  key={study.id}
                  className="bg-mogul-card border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {study.logo ? (
                          <img src={study.logo} alt={study.client} className="h-8 mb-2" />
                        ) : (
                          <h3 className="text-xl font-bold group-hover:text-neon-blue transition-colors">{study.client}</h3>
                        )}
                        <p className="text-sm text-gray-400">{study.industry}</p>
                      </div>
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3">{study.headline}</h4>
                    <p className="text-gray-400 text-sm mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-4 gap-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <result.icon className="w-4 h-4 mx-auto mb-1 text-neon-blue" />
                          <div className="text-sm font-bold text-white">{result.value}</div>
                          <div className="text-[10px] text-gray-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-mogul-card border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Vision?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need to fix holes in your existing system or build something 
            entirely new from scratch, we're here to make it happen.
          </p>
          <Link
            to="/book-audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neon-blue text-black font-semibold rounded-xl hover:bg-neon-blue/90 transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Book FREE Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      </div>
    </>
  );
};
