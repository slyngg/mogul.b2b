import { Hero } from '../components/Hero';
import { LogoTicker } from '../components/LogoTicker';
import { ValueProp } from '../components/ValueProp';
import { Features } from '../components/Features';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';
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
        <LogoTicker />
        <ValueProp />
        <Features />
        <CaseStudies />
        <CorePreview />
        <Testimonials />
        <CTASection />
      </div>
    </>
  );
};
