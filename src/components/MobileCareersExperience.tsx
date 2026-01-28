import { useState } from 'react';
import { 
  ArrowRight, 
  DollarSign,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Zap,
  TrendingUp,
  Target,
  Shield,
  Trophy,
  Flame,
  ChevronRight,
  Check
} from 'lucide-react';

const SnapSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <section className={`h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

const compensation = [
  {
    title: 'Base Commission',
    value: '$500',
    subtitle: 'per closed deal',
    color: 'from-neon-blue to-neon-cyan'
  },
  {
    title: 'Monthly Bonus',
    value: '$2,000',
    subtitle: 'The Hunter (20 deals)',
    color: 'from-neon-purple to-pink-500'
  },
  {
    title: 'Quarterly Bonus',
    value: '$10,000',
    subtitle: 'The Juggernaut (60 deals)',
    color: 'from-orange-500 to-red-500'
  },
];

const requirements = [
  '1+ year high-ticket B2B sales',
  'Proven track record with metrics',
  'Comfortable selling on pain points',
  'Results-driven mindset',
  'Commission-only experience preferred'
];

const roleDetails = [
  '2-hour minimum daily prospecting',
  'Mandatory daily KPI reporting',
  'Full sales cycle ownership',
  'Radical accountability culture'
];

interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  proofOfPerformance: string;
}

export const MobileCareersExperience = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ApplicationData>({
    fullName: '',
    email: '',
    phone: '',
    proofOfPerformance: ''
  });

  const updateFormData = (field: keyof ApplicationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`MOGUL - E-CAS Application - ${formData.fullName}`);
    const body = encodeURIComponent(`
MOGUL E-CAS Application

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Proof of Performance:
${formData.proofOfPerformance}
    `);

    window.location.href = `mailto:mogulmoretti@gmail.com?subject=${subject}&body=${body}`;
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="h-[100dvh] w-full flex items-center justify-center bg-mogul-dark text-white p-6 md:hidden">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-3">Application Sent!</h1>
          <p className="text-gray-400 text-sm mb-6">
            Your email client should have opened. Send the email to complete your submission.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-xl"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory overscroll-none bg-mogul-dark text-white md:hidden">
      
      {/* SECTION 1: HERO */}
      <SnapSection className="bg-mogul-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
        <div className="relative z-10 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-orange-500">Recruiting 4-8 Top Performers</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight mb-4">
            We Don't Hire.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
              We Partner.
            </span>
          </h1>
          
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            We're hunting for <span className="text-white font-semibold">Proven Closers</span> tired of low commission rates.
          </p>

          <div className="bg-mogul-card border border-white/10 rounded-xl p-4 mb-6">
            <div className="text-neon-blue text-xs font-medium tracking-wider uppercase mb-1">E-CAS</div>
            <h2 className="text-lg font-bold mb-2">Elite Client Acquisition Specialist</h2>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full text-gray-300">
                <MapPin className="w-3 h-3" />
                Remote
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full text-gray-300">
                <Clock className="w-3 h-3" />
                Flexible
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-green-500/10 rounded-full text-green-400">
                <DollarSign className="w-3 h-3" />
                $11k-$20k+/mo
              </span>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 mx-auto transform rotate-90 text-orange-500" />
          </div>
        </div>
      </SnapSection>

      {/* SECTION 2: COMPENSATION */}
      <SnapSection className="bg-mogul-navy">
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-bold">Elite Rewards</h2>
          </div>

          <div className="space-y-3 mb-6">
            {compensation.map((comp, i) => (
              <div
                key={i}
                className="bg-mogul-card border border-white/10 rounded-xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">{comp.title}</div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${comp.color} bg-clip-text text-transparent`}>
                      {comp.value}
                    </div>
                    <div className="text-xs text-gray-500">{comp.subtitle}</div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${comp.color} opacity-20`} />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
              <div className="text-sm">
                <span className="text-green-400 font-semibold">UNCAPPED:</span>
                <span className="text-gray-300 ml-1">Top performers clear $15k+/mo</span>
              </div>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 3: ROLE & REQUIREMENTS */}
      <SnapSection>
        <div className="w-full">
          <h2 className="text-xl font-bold text-center mb-6">What We Expect</h2>

          <div className="space-y-3">
            {/* Role */}
            <div>
              <button
                onClick={() => setExpandedSection(expandedSection === 'role' ? null : 'role')}
                className="w-full bg-mogul-card border border-white/10 rounded-xl p-4 flex items-center gap-4 active:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                  <Target className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-sm">Your Role</h4>
                  <p className="text-xs text-gray-400">Daily responsibilities</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedSection === 'role' ? 'rotate-90' : ''}`} />
              </button>
              {expandedSection === 'role' && (
                <div className="bg-neon-blue/5 border border-neon-blue/20 rounded-xl p-4 mt-2 space-y-2">
                  {roleDetails.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-neon-blue flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Requirements */}
            <div>
              <button
                onClick={() => setExpandedSection(expandedSection === 'requirements' ? null : 'requirements')}
                className="w-full bg-mogul-card border border-white/10 rounded-xl p-4 flex items-center gap-4 active:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-sm">Non-Negotiables</h4>
                  <p className="text-xs text-gray-400">Must-have qualifications</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedSection === 'requirements' ? 'rotate-90' : ''}`} />
              </button>
              {expandedSection === 'requirements' && (
                <div className="bg-neon-purple/5 border border-neon-purple/20 rounded-xl p-4 mt-2 space-y-2">
                  {requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-neon-purple flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs mt-6">
            This role is exclusive. We only partner with proven top performers.
          </p>
        </div>
      </SnapSection>

      {/* SECTION 4: APPLICATION */}
      <SnapSection className="bg-mogul-navy">
        <div className="w-full">
          {!showForm ? (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                <Send className="w-8 h-8 text-neon-purple" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Ready to Apply?</h2>
              <p className="text-gray-400 text-sm mb-6">
                We require proof of performance. Don't waste our time, and we won't waste yours.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2"
              >
                Start Application
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-gray-500 text-xs mt-4">
                Questions? <a href="mailto:mogulmoretti@gmail.com" className="text-neon-purple">mogulmoretti@gmail.com</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Application Form</h2>
              
              <div>
                <label className="block text-xs font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  className="w-full bg-mogul-card border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neon-purple focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full bg-mogul-card border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neon-purple focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full bg-mogul-card border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neon-purple focus:outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">Proof of Performance *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.proofOfPerformance}
                  onChange={(e) => updateFormData('proofOfPerformance', e.target.value)}
                  className="w-full bg-mogul-card border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neon-purple focus:outline-none resize-none"
                  placeholder='e.g., "18 closed deals/month average"'
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="w-full text-gray-400 text-sm py-2"
              >
                ← Back
              </button>
            </form>
          )}
        </div>
      </SnapSection>
    </div>
  );
};
