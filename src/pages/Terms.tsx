import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Handshake, Mail, Calendar } from 'lucide-react';

export const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-neon-purple/10 border border-neon-purple/20 rounded-full px-4 py-2 mb-6">
            <FileText className="w-4 h-4 text-neon-purple" />
            <span className="text-sm text-neon-purple">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of <span className="text-neon-purple">Service</span>
          </h1>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Last updated: January 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <section className="bg-mogul-card border border-white/10 rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed">
              Welcome to Mogul LLC ("Mogul," "we," "us," or "our"). These Terms of Service ("Terms") 
              govern your access to and use of our website, services, and any related content or 
              materials. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Services */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                <Handshake className="w-5 h-5 text-neon-blue" />
              </div>
              <h2 className="text-2xl font-bold">Our Services</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8 space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Mogul provides full-stack development, business automation, and digital transformation 
                services. Our offerings include but are not limited to:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  Custom web application development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  CRM and business system implementations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  Business process automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  Consulting and strategy services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  The CORE platform (subject to additional terms)
                </li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-neon-purple" />
              </div>
              <h2 className="text-2xl font-bold">User Responsibilities</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  Provide accurate and complete information
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  Maintain the security of any account credentials
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  Use our services only for lawful purposes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  Respect intellectual property rights
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  Not attempt to interfere with or disrupt our services
                </li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold">Intellectual Property</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed">
                All content, features, and functionality of our website and services—including but 
                not limited to text, graphics, logos, icons, images, audio clips, digital downloads, 
                and software—are owned by Mogul LLC or its licensors and are protected by copyright, 
                trademark, and other intellectual property laws. Ownership of custom work products 
                will be specified in individual service agreements.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed">
                To the fullest extent permitted by applicable law, Mogul LLC shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, or any 
                loss of profits or revenues, whether incurred directly or indirectly, or any loss 
                of data, use, goodwill, or other intangible losses resulting from your use of our 
                services.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-neon-cyan" />
              </div>
              <h2 className="text-2xl font-bold">Changes to Terms</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of 
                any material changes by updating the "Last updated" date at the top of these Terms. 
                Your continued use of our services after such modifications constitutes your 
                acceptance of the updated Terms.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-neon-blue" />
              </div>
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <a 
                href="mailto:info@mogul.b2b" 
                className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@mogul.b2b
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
