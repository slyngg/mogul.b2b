import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar,
  TrendingUp,
  Clock,
  Users,
  Zap
} from 'lucide-react';
import { MobileCaseStudiesExperience } from '../components/MobileCaseStudiesExperience';

const caseStudies = [
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
    featured: true,
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

        {/* Featured Case Study */}
        {caseStudies.filter(cs => cs.featured).map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-mogul-card border border-white/10 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="p-8 md:p-12 border-b border-white/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <span className="text-neon-blue text-sm font-medium tracking-wider uppercase mb-4 block">
                      Featured Case Study
                    </span>
                    {study.logo ? (
                      <img 
                        src={study.logo} 
                        alt={study.client} 
                        className="h-12 md:h-16 w-auto mb-3"
                      />
                    ) : (
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">{study.client}</h2>
                    )}
                    <p className="text-gray-400">{study.industry}</p>
                  </div>
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">{study.headline}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {study.description}
                </p>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-mogul-dark border border-white/5 rounded-xl p-6">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">The Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div className="bg-mogul-dark border border-white/5 rounded-xl p-6">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Our Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-12">
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Results</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.results.map((result, i) => (
                      <div 
                        key={i}
                        className="bg-mogul-dark border border-white/5 rounded-xl p-6 text-center hover:border-neon-blue/30 transition-colors"
                      >
                        <result.icon className="w-6 h-6 mx-auto mb-3 text-neon-blue" />
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-500">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-neon-blue/5 border border-neon-blue/20 rounded-xl p-8">
                  <blockquote className="text-xl md:text-2xl text-white font-medium mb-4 leading-relaxed">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div className="text-gray-400">
                    <span className="text-white">{study.testimonial.author}</span>
                    <span className="mx-2">·</span>
                    {study.testimonial.company}
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
