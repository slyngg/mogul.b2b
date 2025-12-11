import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BookAudit } from './pages/BookAudit';
import { Careers } from './pages/Careers';
import { Core } from './pages/Core';
import { CaseStudies } from './pages/CaseStudies';
import { CustomCursor } from './components/CustomCursor';
import { useEffect } from 'react';

function App() {
  // Enable View Transitions API
  useEffect(() => {
    if ('startViewTransition' in document) {
      document.documentElement.classList.add('view-transitions-enabled');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-mogul-dark text-white selection:bg-neon-blue selection:text-black">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-audit" element={<BookAudit />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/core" element={<Core />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
