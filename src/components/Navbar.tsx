import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Briefcase, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Case Studies', href: '/#case-studies' },
  { name: 'CORE', href: '/core', highlight: true },
  { name: 'Careers', href: '/careers' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on home page, navigate there first
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        // Scroll to section
        const sectionId = href.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-mogul-dark/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="mogul-watermark inline-flex items-baseline no-underline transition-all hover:opacity-80 group"
        >
          <span className="mogul-text text-2xl font-bold tracking-tighter text-mogul-blue group-hover:text-neon-blue transition-colors">
            mogul
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.startsWith('/#') ? (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-sm transition-colors rounded-lg ${
                  link.highlight 
                    ? 'text-neon-blue hover:text-neon-cyan' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                } ${
                  location.pathname === link.href ? 'text-white' : ''
                }`}
              >
                {link.highlight && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
                  </span>
                )}
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-lg"
              >
                {link.name}
              </button>
            )
          ))}
          
          {/* CTA Button */}
          <Link
            to="/book-audit"
            className="group relative ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-blue to-neon-purple text-black text-sm font-semibold rounded-xl overflow-hidden transition-all hover:scale-105"
          >
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-gradient-conic from-transparent via-white/20 to-transparent" />
            </span>
            <span className="relative flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book Audit
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-mogul-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                        link.highlight 
                          ? 'bg-neon-blue/10 text-neon-blue' 
                          : 'hover:bg-white/5 text-gray-300'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {link.name === 'CORE' && <Sparkles className="w-5 h-5" />}
                        {link.name === 'Careers' && <Briefcase className="w-5 h-5" />}
                        {link.name}
                      </span>
                      <ChevronRight className="w-5 h-5 opacity-50" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-white/5 text-gray-300 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-50" />
                    </button>
                  )}
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  to="/book-audit"
                  className="flex items-center justify-center gap-2 w-full p-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Book FREE Audit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
