import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles,
  Bot,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Code2,
  Layers,
  Rocket,
  ChevronRight,
  Check,
  Star,
  Building2
} from 'lucide-react';

const SnapSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <section className={`h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

const stats = [
  { value: '300%', label: 'Revenue Increase', icon: TrendingUp, color: 'text-neon-blue' },
  { value: '40+', label: 'Hours Saved/Wk', icon: Clock, color: 'text-neon-purple' },
  { value: '3x', label: 'Lead Conversion', icon: Users, color: 'text-neon-cyan' },
];

const services = [
  {
    id: 'fullstack',
    title: 'Full-Stack Applications',
    description: 'State-of-the-art technology with innovative automations',
    icon: Code2,
    color: 'from-neon-blue to-neon-cyan',
    features: ['Custom web applications', 'Mobile-responsive design', 'API integrations', 'Real-time features']
  },
  {
    id: 'automation',
    title: 'Revenue on Autopilot',
    description: 'Transform manual business into automated revenue engines',
    icon: Zap,
    color: 'from-neon-purple to-pink-500',
    features: ['Lead automation', 'Email sequences', 'CRM workflows', 'Payment processing']
  },
  {
    id: 'architecture',
    title: 'Flexible Architecture',
    description: 'CORE platform, custom backends, or BYO CRM',
    icon: Layers,
    color: 'from-green-400 to-emerald-500',
    features: ['Migration support', 'Integration handling', 'Scalable infrastructure', 'Data portability']
  },
];


export const MobileLandingExperience = () => {
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    const runTransition = () => navigate(path);
    if ('startViewTransition' in document) {
      (document as Document & { startViewTransition?: (cb: () => void) => void }).startViewTransition?.(runTransition);
    } else {
      runTransition();
    }
  };

  return (
    <div className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory overscroll-none bg-mogul-dark text-white md:hidden">
      
      {/* SECTION 1: HERO */}
      <SnapSection className="bg-mogul-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-transparent" />
        <div className="relative z-10 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-xs text-gray-300">Full-Stack Development Agency</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-4">
            Build.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Automate.
            </span>{' '}
            Scale.
          </h1>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            We turn founder visions into reality. Custom systems that generate revenue while you sleep.
          </p>

          <button
            onClick={() => handleNavigate('/book-audit')}
            className="w-full block bg-neon-blue text-black font-bold py-4 rounded-xl mb-4 active:scale-95 transition-transform"
          >
            Book FREE Audit
          </button>

          <div className="mt-6 animate-bounce">
            <ArrowRight className="w-6 h-6 mx-auto transform rotate-90 text-neon-blue" />
          </div>
        </div>
      </SnapSection>

      {/* SECTION 2: STATS */}
      <SnapSection className="bg-mogul-navy">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-2">Real Results</h2>
          <p className="text-gray-400 text-center text-sm mb-8">What our clients experience</p>

          <div className="space-y-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-mogul-card border border-white/10 rounded-xl p-5 flex items-center gap-4"
              >
                <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SnapSection>

      {/* SECTION 3: SERVICES */}
      <SnapSection>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-2">What We Build</h2>
          <p className="text-gray-400 text-center text-sm mb-6">Tap to explore each service</p>

          <div className="space-y-3">
            {services.map((service) => (
              <div key={service.id}>
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full bg-mogul-card border border-white/10 rounded-xl p-4 flex items-center gap-4 active:bg-white/5 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full bg-mogul-card rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-bold text-sm">{service.title}</h4>
                    <p className="text-xs text-gray-400">{service.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedService === service.id ? 'rotate-90' : ''}`} />
                </button>
                {expandedService === service.id && (
                  <div className={`bg-white/5 border border-white/10 rounded-xl p-4 mt-2 space-y-2`}>
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-neon-blue flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SnapSection>

      {/* SECTION 4: CORE PREVIEW */}
      <SnapSection className="bg-mogul-navy">
        <div className="w-full text-center">
          <div className="inline-flex items-center gap-2 bg-neon-purple/10 border border-neon-purple/20 rounded-full px-3 py-1 mb-4">
            <Bot className="w-4 h-4 text-neon-purple" />
            <span className="text-xs text-neon-purple">Coming Soon</span>
          </div>

          <h2 className="text-3xl font-bold mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">CORE</span>
          </h2>
          
          <p className="text-gray-400 mb-6 text-sm">
            Our AI-native business management platform. CRM, ERP, and PM—unified with intelligence.
          </p>

          <div className="bg-mogul-card border border-white/10 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg p-3 text-left">
                <p className="text-xs text-gray-300">
                  "You have 3 high-priority leads. Sarah Chen is most likely to convert this week."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/5 rounded-lg p-2 text-center">
                <div className="text-neon-blue font-bold">98%</div>
                <div className="text-[10px] text-gray-500">Accuracy</div>
              </div>
              <div className="bg-white/5 rounded-lg p-2 text-center">
                <div className="text-neon-purple font-bold">40h</div>
                <div className="text-[10px] text-gray-500">Saved/wk</div>
              </div>
              <div className="bg-white/5 rounded-lg p-2 text-center">
                <div className="text-neon-cyan font-bold">3x</div>
                <div className="text-[10px] text-gray-500">Conversion</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNavigate('/core')}
            className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            Explore CORE
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </SnapSection>

      {/* SECTION 5: SOCIAL PROOF */}
      <SnapSection>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Trusted By Founders</h2>

          <button
            onClick={() => handleNavigate('/case-studies')}
            className="w-full bg-mogul-card border border-white/10 rounded-xl p-6 mb-6 text-left group hover:border-neon-blue/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500" />
            </div>
            <img 
              src="/rmtv-logo.png" 
              alt="Respect Music TV" 
              className="h-8 mb-4 opacity-80"
            />
            <p className="text-sm text-gray-400 italic mb-4">
              "Mogul didn't just build what we asked for, they understood our vision and 10x'd it."
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Respect Music TV</span>
              <div className="flex items-center gap-1 text-neon-blue text-xs">
                <span>View Case Study</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-mogul-card border border-white/5 rounded-lg p-3 text-center">
              <Building2 className="w-5 h-5 mx-auto mb-1 text-gray-400" />
              <div className="text-xs text-gray-500">50+ Projects</div>
            </div>
            <div className="bg-mogul-card border border-white/5 rounded-lg p-3 text-center">
              <Rocket className="w-5 h-5 mx-auto mb-1 text-gray-400" />
              <div className="text-xs text-gray-500">6wk Avg Launch</div>
            </div>
            <div className="bg-mogul-card border border-white/5 rounded-lg p-3 text-center">
              <TrendingUp className="w-5 h-5 mx-auto mb-1 text-gray-400" />
              <div className="text-xs text-gray-500">300% ROI</div>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 6: CTA */}
      <SnapSection className="bg-mogul-navy">
        <div className="text-center w-full">
          <h2 className="text-3xl font-bold mb-4">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Transform
            </span>
            ?
          </h2>
          
          <p className="text-gray-400 mb-8 text-sm">
            Book a free audit and discover where you're losing money. No commitment, just insights.
          </p>

          <button
            onClick={() => handleNavigate('/book-audit')}
            className="w-full block bg-neon-blue text-black font-bold text-lg py-4 rounded-xl mb-4 active:scale-95 transition-transform"
          >
            Book FREE Audit
          </button>
          
          <button
            onClick={() => handleNavigate('/careers')}
            className="text-sm text-gray-400 active:text-white transition-colors"
          >
            We're hiring closers →
          </button>
        </div>
      </SnapSection>
    </div>
  );
};
