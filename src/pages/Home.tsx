import { Hero } from '../components/Hero';
// import { LogoTicker } from '../components/LogoTicker'; // Removed - mock data
import { ValueProp } from '../components/ValueProp';
import { Features } from '../components/Features';
// import { CaseStudies } from '../components/CaseStudies'; // Removed from landing - real case studies at /case-studies
// import { Testimonials } from '../components/Testimonials'; // Removed - mock data, keeping for future
import { CorePreview } from '../components/CorePreview';
import { CTASection } from '../components/CTASection';
import { MobileLandingExperience } from '../components/MobileLandingExperience';

export const Home = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileLandingExperience />
      </div>
      <div className="hidden md:block">
        <Hero />
        {/* LogoTicker removed - mock data */}
        <ValueProp />
        <Features />
        {/* CaseStudies removed from landing - real case studies at /case-studies */}
        <CorePreview />
        {/* Testimonials removed - mock data, keeping code for future use */}
        <CTASection />
      </div>
    </>
  );
};
