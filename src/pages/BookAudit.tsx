import { useState } from 'react';
import {
  ArrowRight,
  Check,
  Calendar,
  Clock,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  ArrowDown
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

const MobileSnapSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 relative ${className}`}>
    {children}
  </section>
);

const MobileBookAudit = () => {
  const [calLoaded, setCalLoaded] = useState(false);

  return (
    <div className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory overscroll-none bg-mogul-dark text-white md:hidden">
      {/* Section 1: Hero */}
      <MobileSnapSection className="bg-mogul-dark">
        <div className="text-center w-full">
          <div className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-neon-blue">100% Free</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">
            Book Your <span className="text-neon-blue">FREE</span> Audit
          </h1>
          
          <p className="text-gray-400 text-sm mb-8">
            Let's identify the holes in your business and build a roadmap to fix them.
          </p>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-mogul-card border border-white/10 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-neon-blue" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm">{benefit.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 text-gray-500 text-xs mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-neon-blue" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neon-blue" />
              <span>No obligation</span>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-neon-blue" />
          </div>
        </div>
      </MobileSnapSection>

      {/* Section 2: Calendar */}
      <MobileSnapSection className="bg-mogul-navy">
        <div className="w-full h-full flex flex-col">
          <h2 className="text-xl font-bold text-center mb-4 pt-4">Select a Time</h2>
          
          <div className="flex-1 bg-mogul-card border border-white/10 rounded-2xl overflow-hidden relative">
            <iframe
              src="https://cal.com/mogulb2b/free-audit?embed=true&theme=dark"
              className="w-full h-full border-0"
              style={{ minHeight: '400px' }}
              onLoad={() => setCalLoaded(true)}
            />
            
            {!calLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-mogul-card">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-400 text-sm">Loading calendar...</p>
                </div>
              </div>
            )}
          </div>

          <a
            href="https://cal.com/mogulb2b/free-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-neon-blue text-sm py-4 active:text-neon-cyan"
          >
            Open in new tab <ArrowRight className="w-3 h-3 inline ml-1" />
          </a>
        </div>
      </MobileSnapSection>
    </div>
  );
};

const DesktopBookAudit = () => {
  const [calLoaded, setCalLoaded] = useState(false);

  return (
    <div className="hidden md:block min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-neon-blue">100% Free • No Obligation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Book Your <span className="text-neon-blue">FREE</span> Audit
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's identify the holes in your business and build a roadmap to fix them—or
            create something entirely new from scratch.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <div>
            <h2 className="text-2xl font-bold mb-8">What You'll Get</h2>

            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
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
          </div>

          {/* Right Column - Cal.com Embed */}
          <div className="bg-mogul-card border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 text-center">Select a Time</h2>

            <div
              className="min-h-[500px] rounded-xl overflow-hidden relative"
              style={{ backgroundColor: '#0a0a0f' }}
            >
              <iframe
                src="https://cal.com/mogulb2b/free-audit?embed=true&theme=dark"
                className="w-full h-full min-h-[500px] border-0"
                onLoad={() => setCalLoaded(true)}
              />

              {!calLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-400 text-sm">Loading calendar...</p>
                  </div>
                </div>
              )}
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export const BookAudit = () => {
  return (
    <>
      <MobileBookAudit />
      <DesktopBookAudit />
    </>
  );
};
