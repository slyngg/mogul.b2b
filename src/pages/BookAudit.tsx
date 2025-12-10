import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Building2, 
  Users, 
  Target, 
  Zap,
  Calendar,
  Mail,
  Phone,
  User,
  Briefcase,
  DollarSign,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface FormData {
  // Step 1: Business Info
  companyName: string;
  industry: string;
  companySize: string;
  website: string;
  // Step 2: Goals
  primaryGoal: string;
  currentChallenges: string[];
  timeline: string;
  budget: string;
  // Step 3: Contact
  fullName: string;
  email: string;
  phone: string;
  role: string;
  preferredTime: string;
  additionalNotes: string;
}

const industries = [
  'SaaS / Technology',
  'E-commerce',
  'Professional Services',
  'Healthcare',
  'Finance',
  'Real Estate',
  'Marketing Agency',
  'Other'
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees'
];

const goals = [
  { id: 'automation', label: 'Automate Operations', icon: Zap },
  { id: 'crm', label: 'CRM Implementation', icon: Users },
  { id: 'scaling', label: 'Scale Business', icon: Target },
  { id: 'efficiency', label: 'Increase Efficiency', icon: Clock },
];

const challenges = [
  'Manual data entry consuming too much time',
  'Leads falling through the cracks',
  'No visibility into business metrics',
  'Disconnected tools and systems',
  'Difficulty managing team workflows',
  'Customer communication gaps',
  'Revenue forecasting challenges',
  'Scaling bottlenecks'
];

const timelines = [
  'Immediately',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  'Just exploring'
];

const budgets = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
  'Not sure yet'
];

export const BookAudit = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    primaryGoal: '',
    currentChallenges: [],
    timeline: '',
    budget: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const totalSteps = 3;

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleChallenge = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      currentChallenges: prev.currentChallenges.includes(challenge)
        ? prev.currentChallenges.filter(c => c !== challenge)
        : [...prev.currentChallenges, challenge]
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.industry && formData.companySize;
      case 2:
        return formData.primaryGoal && formData.timeline;
      case 3:
        return formData.fullName && formData.email && formData.phone;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate webhook call - replace with actual webhook URL
    try {
      // This would be your actual webhook endpoint
      // await fetch('YOUR_WEBHOOK_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
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
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Audit Booked!</h1>
          <p className="text-gray-400 text-lg mb-8">
            Thank you, {formData.fullName}. We've received your audit request and will reach out within 24 hours to schedule your FREE strategy session.
          </p>
          <div className="bg-mogul-card border border-white/10 rounded-2xl p-6 text-left">
            <h3 className="font-semibold mb-4 text-neon-blue">What happens next?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-neon-blue/20 text-neon-blue flex items-center justify-center text-sm flex-shrink-0">1</span>
                <span>Our team reviews your business details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-neon-blue/20 text-neon-blue flex items-center justify-center text-sm flex-shrink-0">2</span>
                <span>We prepare a custom audit framework for your industry</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-neon-blue/20 text-neon-blue flex items-center justify-center text-sm flex-shrink-0">3</span>
                <span>You receive a calendar invite for your strategy call</span>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 mt-8 text-neon-blue hover:text-neon-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full px-4 py-2 mb-6"
          >
            <Calendar className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-neon-blue">100% Free • No Obligation</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">FREE</span> Audit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Discover hidden inefficiencies costing your business time and money. 
            Our experts will analyze your operations and deliver actionable insights.
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <motion.div
                  animate={{
                    scale: currentStep === step ? 1.1 : 1,
                    backgroundColor: currentStep >= step ? '#00f0ff' : 'rgba(255,255,255,0.1)'
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                  style={{ color: currentStep >= step ? '#0a0a0f' : '#fff' }}
                >
                  {currentStep > step ? <Check className="w-5 h-5" /> : step}
                </motion.div>
                {step < 3 && (
                  <div className="w-24 md:w-32 h-1 mx-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: currentStep > step ? '100%' : '0%' }}
                      className="h-full bg-neon-blue"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Business Info</span>
            <span>Goals & Challenges</span>
            <span>Contact Details</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-mogul-card border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="absolute inset-[-2px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-20 animate-border-beam" />
            </div>

            <AnimatePresence mode="wait" custom={currentStep}>
              {/* Step 1: Business Info */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={1}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Tell us about your business</h2>
                      <p className="text-gray-400">Help us understand your company</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => updateFormData('companyName', e.target.value)}
                        className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue focus:outline-none transition-colors"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Industry *</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {industries.map((industry) => (
                          <button
                            key={industry}
                            onClick={() => updateFormData('industry', industry)}
                            className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                              formData.industry === industry
                                ? 'bg-neon-blue text-black border-neon-blue'
                                : 'bg-mogul-dark border-white/10 hover:border-white/30'
                            }`}
                          >
                            {industry}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company Size *</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {companySizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => updateFormData('companySize', size)}
                            className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                              formData.companySize === size
                                ? 'bg-neon-blue text-black border-neon-blue'
                                : 'bg-mogul-dark border-white/10 hover:border-white/30'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Website (Optional)</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => updateFormData('website', e.target.value)}
                        className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue focus:outline-none transition-colors"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Goals & Challenges */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={1}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">What are your goals?</h2>
                      <p className="text-gray-400">Help us tailor the audit to your needs</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-3">Primary Goal *</label>
                      <div className="grid grid-cols-2 gap-3">
                        {goals.map((goal) => (
                          <button
                            key={goal.id}
                            onClick={() => updateFormData('primaryGoal', goal.id)}
                            className={`p-4 rounded-xl border text-left transition-all ${
                              formData.primaryGoal === goal.id
                                ? 'bg-neon-purple/10 border-neon-purple'
                                : 'bg-mogul-dark border-white/10 hover:border-white/30'
                            }`}
                          >
                            <goal.icon className={`w-6 h-6 mb-2 ${formData.primaryGoal === goal.id ? 'text-neon-purple' : 'text-gray-400'}`} />
                            <span className="font-medium">{goal.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3">Current Challenges (Select all that apply)</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {challenges.map((challenge) => (
                          <button
                            key={challenge}
                            onClick={() => toggleChallenge(challenge)}
                            className={`px-4 py-3 rounded-lg text-sm border text-left transition-all flex items-center gap-2 ${
                              formData.currentChallenges.includes(challenge)
                                ? 'bg-neon-blue/10 border-neon-blue'
                                : 'bg-mogul-dark border-white/10 hover:border-white/30'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                              formData.currentChallenges.includes(challenge)
                                ? 'bg-neon-blue border-neon-blue'
                                : 'border-white/30'
                            }`}>
                              {formData.currentChallenges.includes(challenge) && (
                                <Check className="w-3 h-3 text-black" />
                              )}
                            </div>
                            {challenge}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Timeline *</label>
                        <div className="space-y-2">
                          {timelines.map((timeline) => (
                            <button
                              key={timeline}
                              onClick={() => updateFormData('timeline', timeline)}
                              className={`w-full px-4 py-2 rounded-lg text-sm border text-left transition-all flex items-center gap-2 ${
                                formData.timeline === timeline
                                  ? 'bg-neon-blue text-black border-neon-blue'
                                  : 'bg-mogul-dark border-white/10 hover:border-white/30'
                              }`}
                            >
                              <Clock className="w-4 h-4" />
                              {timeline}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Budget Range</label>
                        <div className="space-y-2">
                          {budgets.map((budget) => (
                            <button
                              key={budget}
                              onClick={() => updateFormData('budget', budget)}
                              className={`w-full px-4 py-2 rounded-lg text-sm border text-left transition-all flex items-center gap-2 ${
                                formData.budget === budget
                                  ? 'bg-neon-purple text-white border-neon-purple'
                                  : 'bg-mogul-dark border-white/10 hover:border-white/30'
                              }`}
                            >
                              <DollarSign className="w-4 h-4" />
                              {budget}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Details */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={1}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">How can we reach you?</h2>
                      <p className="text-gray-400">We'll use this to schedule your audit</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateFormData('fullName', e.target.value)}
                        className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Briefcase className="w-4 h-4 inline mr-2" />
                        Your Role
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => updateFormData('role', e.target.value)}
                        className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue focus:outline-none transition-colors"
                        placeholder="CEO, Founder, Operations Manager..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Contact Time</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => updateFormData('preferredTime', e.target.value)}
                      className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue focus:outline-none transition-colors"
                    >
                      <option value="">Select a time preference</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="evening">Evening (5pm - 8pm)</option>
                      <option value="anytime">Anytime works</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Notes</label>
                    <textarea
                      value={formData.additionalNotes}
                      onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                      rows={4}
                      className="w-full bg-mogul-dark border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue focus:outline-none transition-colors resize-none"
                      placeholder="Anything else you'd like us to know before the audit?"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  currentStep === 1
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:bg-white/5'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {currentStep < totalSteps ? (
                <button
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                    canProceed()
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-black hover:opacity-90'
                      : 'bg-white/10 text-white/50 cursor-not-allowed'
                  }`}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                    canProceed() && !isSubmitting
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-black hover:opacity-90'
                      : 'bg-white/10 text-white/50 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      Book My FREE Audit
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-neon-blue" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-neon-blue" />
              <span>30-minute strategy session</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-neon-blue" />
              <span>Custom action plan included</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
