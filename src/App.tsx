import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BookAudit } from './pages/BookAudit';
import { Careers } from './pages/Careers';
import { Core } from './pages/Core';
import { CaseStudies } from './pages/CaseStudies';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { CustomCursor } from './components/CustomCursor';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Enable View Transitions API
  useEffect(() => {
    if ('startViewTransition' in document) {
      document.documentElement.classList.add('view-transitions-enabled');
    }
  }, []);

  return (
    <div className="min-h-screen bg-mogul-dark text-white selection:bg-neon-blue selection:text-black">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-audit" element={<BookAudit />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/core" element={<Core />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      {/* Hide footer on mobile home page to prevent scroll issues */}
      <div className={isHomePage ? 'hidden md:block' : ''}>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
