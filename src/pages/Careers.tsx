import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2,
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  Shield,
  Trophy,
  Flame
} from 'lucide-react';
import { MobileCareersExperience } from '../components/MobileCareersExperience';

interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  proofOfPerformance: string;
}

const compensation = [
  {
    title: 'Base Commission',
    value: '$500',
    subtitle: 'per closed deal',
    description: 'Paid immediately upon client payment',
    color: 'from-neon-blue to-neon-cyan'
  },
  {
    title: 'Monthly Bonus',
    value: '$2,000',
    subtitle: 'The Hunter',
    description: '20 closed deals in a calendar month',
    color: 'from-neon-purple to-pink-500'
  },
  {
    title: 'Quarterly Bonus',
    value: '$10,000',
    subtitle: 'The Juggernaut',
    description: '60 closed deals in a quarter',
    color: 'from-orange-500 to-red-500'
  },
];

const requirements = [
  'Minimum 1 year in high-ticket (>$2,500+) B2B sales',
  'Proven track record with metrics to back it up',
  'Comfortable calling out flaws and selling on pain points',
  'Thrives in transparent, results-driven culture',
  'Commission-only experience preferred'
];

export const Careers = () => {
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

    // Create mailto link for hr@mogul.b2b
    const subject = encodeURIComponent(`MOGUL - E-CAS Application - ${formData.fullName}`);
    const body = encodeURIComponent(`
MOGUL

E-CAS Elite Client Acquisition Specialist Application

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Proof of Performance:
${formData.proofOfPerformance}
    `);

    // Open email client
    window.location.href = `mailto:hr@mogul.b2b?subject=${subject}&body=${body}`;

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-lg mx-auto px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Application Received</h1>
          <p className="text-gray-400 text-lg mb-8">
            Your email client should have opened. Send the email to complete your submission.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            If you make the cut, we will contact you immediately.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <div className="md:hidden">
        <MobileCareersExperience />
      </div>
      <div className="hidden md:block min-h-screen pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-orange-500">Recruiting 4-8 Top Performers</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            We Don't Hire.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">We Partner.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We are not looking for entry-level reps. We are hunting for{' '}
            <span className="text-white font-semibold">Proven Closers</span>{' '}
            who are tired of low commission rates.
          </motion.p>
        </div>

        {/* Job Listing */}
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-mogul-card border border-white/10 rounded-3xl p-8 md:p-12 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 pb-8 border-b border-white/10">
              <div>
                <div className="text-neon-blue text-sm font-medium tracking-wider uppercase mb-2">E-CAS</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Elite Client Acquisition Specialist</h2>
                <p className="text-gray-400 text-sm mb-4">High-Ticket Automation Sales | Uncapped Commission + Performance Bonuses</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-gray-300">
                    <MapPin className="w-3.5 h-3.5" />
                    100% Remote
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-gray-300">
                    <Clock className="w-3.5 h-3.5" />
                    Flexible Schedule
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full text-green-400">
                    <DollarSign className="w-3.5 h-3.5" />
                    $11k-$20k+/mo
                  </span>
                </div>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-black font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* The Opportunity */}
            <div className="mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                Team Mogul builds the Business Operating Systems of the future—full-stack web apps and automations 
                that transform manual chaos into scalable enterprise. Our product delivers{' '}
                <span className="text-white font-semibold">immediate, quantifiable ROI</span>.
              </p>
              <p className="text-lg text-gray-400 mt-4">
                You are selling a <span className="text-neon-blue">guaranteed solution</span>, not a promise.
              </p>
            </div>

            {/* Compensation Grid */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Elite Rewards for Elite Performance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {compensation.map((comp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative bg-mogul-dark border border-white/5 rounded-xl p-6 overflow-hidden group hover:border-white/20 transition-all"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <div className="relative z-10">
                      <div className="text-sm text-gray-400 mb-1">{comp.title}</div>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${comp.color} bg-clip-text text-transparent mb-1`}>
                        {comp.value}
                      </div>
                      <div className="text-sm text-white font-medium mb-2">{comp.subtitle}</div>
                      <div className="text-xs text-gray-500">{comp.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="text-green-400 font-semibold">UNCAPPED Earning Potential:</span>
                    <span className="text-gray-300 ml-2">High performers quickly clear $15,000+ USD/month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Role & Requirements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-neon-blue" />
                  Your Role
                </h3>
                <p className="text-gray-400 mb-4">
                  Identify businesses actively wasting money due to system failures and position Mogul as the necessary fix.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3 text-gray-400">
                    <Zap className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                    <span><span className="text-white">2-hour minimum</span> daily commitment during prospecting hours</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <Zap className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                    <span>Mandatory daily KPI reporting—<span className="text-white">radical accountability</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <Zap className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                    <span>Full sales cycle ownership: first touch to signed contract</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-neon-purple" />
                  Non-Negotiables
                </h3>
                <p className="text-gray-500 text-sm mb-4">This role is exclusive. We only partner with proven top performers.</p>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-neon-purple flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            id="apply"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-mogul-card border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                <Send className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">How to Apply</h2>
                <p className="text-gray-400">We require proof of performance</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm mb-8">
              Don't waste our time, and we won't waste yours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => updateFormData('fullName', e.target.value)}
                    className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Proof of Performance *
                  <span className="text-gray-500 font-normal ml-2">One specific metric that proves you can close</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.proofOfPerformance}
                  onChange={(e) => updateFormData('proofOfPerformance', e.target.value)}
                  className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-purple focus:outline-none transition-colors resize-none"
                  placeholder='e.g., "I averaged 18 closed deals/month at my last role" or "I generated $X in revenue last quarter"'
                />
              </div>

              <div className="bg-mogul-dark border border-white/5 rounded-xl p-4">
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Important:</span> Start your message with "MOGUL" followed by your proof metric. 
                  If you make the cut, we will contact you immediately.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-black font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
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
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 text-gray-500 text-sm"
          >
            <p>
              Questions?{' '}
              <a href="mailto:hr@mogul.b2b" className="text-neon-purple hover:text-neon-blue transition-colors">
                hr@mogul.b2b
              </a>
            </p>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
};
