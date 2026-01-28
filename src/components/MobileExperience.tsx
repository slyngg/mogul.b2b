import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Phone, 
  Zap, 
  ArrowRight, 
  Sparkles,
  Bot,
  X,
  Send,
  Loader2,
  Check,
  Database,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  Globe,
  ChevronRight
} from 'lucide-react';

const SnapSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <section className={`h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

const GlassModal = ({ 
  isOpen, 
  onClose, 
  children, 
  title 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode; 
  title: string;
}) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-mogul-card border border-white/20 rounded-2xl p-6 shadow-2xl max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full active:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const dataSourceCategories = [
  { icon: Users, label: 'Identity Context', desc: 'User profiles, roles, permissions' },
  { icon: Database, label: 'Domain Context', desc: 'Industry, market, competitors' },
  { icon: Calendar, label: 'Temporal Context', desc: 'Schedules, deadlines, history' },
  { icon: TrendingUp, label: 'Behavioral Context', desc: 'Patterns, preferences, habits' },
  { icon: Shield, label: 'Risk Context', desc: 'Compliance, security, threats' },
  { icon: Globe, label: 'Ecosystem Context', desc: 'Integrations, partners, APIs' },
];

const contextEngineFeatures = [
  { title: 'Real-time Processing', desc: 'Analyzes data streams instantly' },
  { title: 'Predictive Intelligence', desc: 'Anticipates needs before they arise' },
  { title: 'Cross-reference Engine', desc: 'Connects dots across all data' },
  { title: 'Learning Adaptation', desc: 'Gets smarter with every interaction' },
];

const featureDetails = {
  calling: {
    title: 'Live Calling Mode',
    features: [
      'Real-time speech-to-text transcription',
      'AI-powered conversation tips',
      'Automatic call logging & summaries',
      'Sentiment analysis during calls',
      'One-click follow-up scheduling'
    ]
  },
  automations: {
    title: 'Voice Automations',
    features: [
      'Natural language automation builder',
      'Trigger-based workflow creation',
      'Multi-step automation chains',
      'Conditional logic support',
      'Integration with 100+ apps'
    ]
  },
  messaging: {
    title: 'Smart Messaging',
    features: [
      'Unified inbox across all channels',
      'AI-drafted personalized responses',
      'Priority sorting & categorization',
      'Template library with variables',
      'Scheduled message delivery'
    ]
  }
};


const demoChatResponses: Record<string, string> = {
  'default': "I'm CORE, your AI business manager. I can help you manage leads, automate tasks, and provide insights about your business. What would you like to know?",
  'leads': "Based on your current pipeline, you have 12 high-priority leads that need follow-up today. Sarah Chen and Mike Rodriguez show the highest conversion probability at 87% and 82% respectively.",
  'revenue': "Your projected revenue for this month is $124,000, up 23% from last month. The automation workflows have contributed to a 40-hour weekly time savings.",
  'help': "I can help you with: Lead management, Revenue tracking, Task automation, Calendar scheduling, Message drafting, and Business insights. Just ask!",
  'automate': "I can automate that for you! Just say something like 'When a new lead comes in, send them a welcome email and schedule a follow-up call for 2 days later.' I'll handle the rest.",
};

function getChatResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('lead')) return demoChatResponses.leads;
  if (lower.includes('revenue') || lower.includes('money') || lower.includes('sales')) return demoChatResponses.revenue;
  if (lower.includes('help') || lower.includes('what can')) return demoChatResponses.help;
  if (lower.includes('automate') || lower.includes('automation')) return demoChatResponses.automate;
  return demoChatResponses.default;
}

export const MobileExperience = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'assistant'; content: string}[]>([
    { role: 'assistant', content: "Hi! I'm CORE. Ask me anything about managing your business." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    const response = getChatResponse(userMessage);
    setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  const handleCaseStudyClick = () => {
    const runTransition = () => navigate('/case-studies');
    if ('startViewTransition' in document) {
      (document as Document & { startViewTransition?: (cb: () => void) => void }).startViewTransition?.(runTransition);
    } else {
      runTransition();
    }
  };

  return (
    <div className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory overscroll-none bg-mogul-dark text-white md:hidden">
      
      {/* SECTION 1: THE HOOK */}
      <SnapSection className="bg-mogul-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-transparent" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-bold leading-tight mb-6">
            I know you are tired of <br />
            <span className="text-gray-400">having to remember</span>
          </h1>
          <div className="bg-mogul-card border border-white/10 rounded-2xl p-6 mb-8 transform -rotate-2">
            <h2 className="text-2xl font-bold">
              which of your <span className="text-neon-blue text-4xl block mt-2">12 follow ups</span>
            </h2>
            <p className="text-gray-400 mt-2">are available today.</p>
          </div>
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            Scroll to Discover
          </p>
          <div className="mt-4 animate-bounce">
            <ArrowRight className="w-6 h-6 mx-auto transform rotate-90 text-neon-blue" />
          </div>
        </div>
      </SnapSection>

      {/* SECTION 2: MEET CORE - Interactive Cards */}
      <SnapSection className="bg-mogul-navy">
        <div className="relative z-10 w-full">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6">
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <span className="text-xs text-gray-300">AI-Native Business Manager</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">CORE</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            With perfect retention of data as it scales, CORE understands where your business is, where it's been, and where it's going.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setActiveModal('dataSources')}
              className="bg-mogul-card border border-white/10 p-4 rounded-xl text-center active:scale-95 transition-transform"
            >
              <Brain className="w-8 h-8 text-neon-blue mx-auto mb-2" />
              <span className="text-xs text-gray-400">35 Data Sources</span>
              <p className="text-[10px] text-neon-blue mt-1">Tap to explore →</p>
            </button>
            <button
              onClick={() => setActiveModal('contextEngine')}
              className="bg-mogul-card border border-white/10 p-4 rounded-xl text-center active:scale-95 transition-transform"
            >
              <Bot className="w-8 h-8 text-neon-purple mx-auto mb-2" />
              <span className="text-xs text-gray-400">Context Engine</span>
              <p className="text-[10px] text-neon-purple mt-1">Tap to explore →</p>
            </button>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 3: INTELLIGENCE - Chat Demo */}
      <SnapSection>
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4 text-center">Intuitive Intelligence</h3>
          <p className="text-xs text-gray-400 text-center mb-6">Try asking CORE a question below</p>
          
          {/* Chat Interface */}
          <div className="bg-mogul-card border border-white/10 rounded-xl overflow-hidden">
            {/* Chat Messages */}
            <div className="h-48 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-xl p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-neon-blue/20 border border-neon-blue/30 text-white' 
                      : 'bg-white/5 border border-white/10 text-gray-300'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <Loader2 className="w-4 h-4 animate-spin text-neon-purple" />
                  </div>
                </div>
              )}
            </div>
            
            {/* Chat Input */}
            <div className="border-t border-white/10 p-3 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask CORE anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50"
              />
              <button
                onClick={handleSendMessage}
                disabled={!chatInput.trim() || isTyping}
                className="p-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg disabled:opacity-50 transition-opacity"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { label: 'Leads', val: '842', color: 'text-neon-blue' },
              { label: 'Rev', val: '$124k', color: 'text-neon-purple' },
              { label: 'Saved', val: '40h', color: 'text-neon-cyan' }
            ].map((stat, i) => (
              <div key={i} className="bg-mogul-card border border-white/5 rounded-lg p-3 text-center">
                <div className={`font-bold ${stat.color}`}>{stat.val}</div>
                <div className="text-[10px] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SnapSection>

      {/* SECTION 4: FEATURES - Expandable Cards */}
      <SnapSection className="bg-mogul-navy">
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-2 text-center">Power Features</h3>
          <p className="text-xs text-gray-400 text-center mb-6">Tap each card to see details</p>
          
          <div className="space-y-3">
            {/* Live Calling */}
            <div>
              <button
                onClick={() => setExpandedFeature(expandedFeature === 'calling' ? null : 'calling')}
                className="w-full bg-mogul-card border border-white/10 rounded-xl p-4 flex items-center gap-4 active:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold">Live Calling Mode</h4>
                  <p className="text-xs text-gray-400">Real-time transcription & tips</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedFeature === 'calling' ? 'rotate-90' : ''}`} />
              </button>
              {expandedFeature === 'calling' && (
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 mt-2 space-y-2">
                  {featureDetails.calling.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Voice Automations */}
            <div>
              <button
                onClick={() => setExpandedFeature(expandedFeature === 'automations' ? null : 'automations')}
                className="w-full bg-mogul-card border border-white/10 rounded-xl p-4 flex items-center gap-4 active:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold">Voice Automations</h4>
                  <p className="text-xs text-gray-400">"Hey CORE, message all new leads..."</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedFeature === 'automations' ? 'rotate-90' : ''}`} />
              </button>
              {expandedFeature === 'automations' && (
                <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-4 mt-2 space-y-2">
                  {featureDetails.automations.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Smart Messaging */}
            <div>
              <button
                onClick={() => setExpandedFeature(expandedFeature === 'messaging' ? null : 'messaging')}
                className="w-full bg-mogul-card border border-white/10 rounded-xl p-4 flex items-center gap-4 active:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold">Smart Messaging</h4>
                  <p className="text-xs text-gray-400">Unified inbox with AI drafts</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedFeature === 'messaging' ? 'rotate-90' : ''}`} />
              </button>
              {expandedFeature === 'messaging' && (
                <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4 mt-2 space-y-2">
                  {featureDetails.messaging.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 5: PROOF & CTA */}
      <SnapSection className="bg-mogul-navy">
        <div className="text-center w-full">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Don't take our word for it</h3>
            <button
              onClick={handleCaseStudyClick}
              className="w-full bg-mogul-card border border-white/10 rounded-xl p-6 relative overflow-hidden active:scale-95 transition-transform"
            >
              <div className="absolute -top-3 -left-3 bg-neon-blue text-black text-xs font-bold px-3 py-1 rounded-full">
                CASE STUDY
              </div>
              <img 
                src="/rmtv-logo.png" 
                alt="Respect Music TV" 
                className="h-10 mx-auto mb-4 opacity-80"
              />
              <p className="text-sm text-gray-400 italic mb-4">
                "Mogul didn't just build what we asked for—they understood our vision and 10x'd it."
              </p>
              <div className="flex items-center justify-center gap-2 text-neon-blue text-sm font-medium">
                <span>View Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-neon-blue">Transform?</span>
          </h2>

          <button
            onClick={() => navigate('/book-audit')}
            className="w-full block bg-gradient-to-r from-neon-blue to-neon-purple text-black font-bold text-lg py-4 rounded-xl mb-4 active:scale-95 transition-transform"
          >
            Book FREE Audit
          </button>
          
          <button 
            onClick={() => navigate('/core')} 
            className="text-sm text-gray-400 active:text-white transition-colors"
          >
            Learn more about CORE →
          </button>
        </div>
      </SnapSection>

      {/* MODALS */}
      <GlassModal 
        isOpen={activeModal === 'dataSources'} 
        onClose={() => setActiveModal(null)}
        title="35 Data Sources"
      >
        <p className="text-sm text-gray-400 mb-4">
          CORE processes data across 8 intelligence tiers, from foundational identity to advanced operational intelligence.
        </p>
        <div className="space-y-3">
          {dataSourceCategories.map((cat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                <cat.icon className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">{cat.label}</h4>
                <p className="text-xs text-gray-500">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassModal>

      <GlassModal 
        isOpen={activeModal === 'contextEngine'} 
        onClose={() => setActiveModal(null)}
        title="Context Engine"
      >
        <p className="text-sm text-gray-400 mb-4">
          The brain behind CORE. Our AI contexting engine doesn't just store data—it understands it.
        </p>
        <div className="space-y-3">
          {contextEngineFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-3 bg-white/5 rounded-lg border border-white/10"
            >
              <h4 className="text-sm font-medium text-neon-purple mb-1">{feat.title}</h4>
              <p className="text-xs text-gray-400">{feat.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20">
          <div className="flex items-center gap-2 text-neon-purple text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>98% Accuracy Rate</span>
          </div>
        </div>
      </GlassModal>
    </div>
  );
};
