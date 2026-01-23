import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Calendar } from 'lucide-react';

export const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-neon-blue">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-neon-blue">Policy</span>
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
              At Mogul LLC ("Mogul," "we," "us," or "our"), we respect your privacy and are committed 
              to protecting your personal information. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-neon-blue" />
              </div>
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                <p className="text-gray-400 leading-relaxed">
                  We may collect personal information that you voluntarily provide when you:
                </p>
                <ul className="mt-3 space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue mt-1">•</span>
                    Fill out our contact or audit booking forms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue mt-1">•</span>
                    Subscribe to our newsletter
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue mt-1">•</span>
                    Communicate with us via email or other channels
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue mt-1">•</span>
                    Apply for a position through our careers page
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Automatically Collected Information</h3>
                <p className="text-gray-400 leading-relaxed">
                  When you visit our website, we may automatically collect certain information including 
                  your IP address, browser type, operating system, referring URLs, and information about 
                  how you interact with our website.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-neon-purple" />
              </div>
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8">
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  To provide and maintain our services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  To respond to your inquiries and fulfill your requests
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  To send you marketing communications (with your consent)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  To improve our website and services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  To comply with legal obligations
                </li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold">Data Security</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the Internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-neon-cyan" />
              </div>
              <h2 className="text-2xl font-bold">Your Rights</h2>
            </div>
            <div className="bg-mogul-card border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">•</span>
                  Access and receive a copy of your personal data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">•</span>
                  Rectify inaccurate personal data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">•</span>
                  Request deletion of your personal data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">•</span>
                  Object to or restrict processing of your personal data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">•</span>
                  Withdraw consent at any time
                </li>
              </ul>
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
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
