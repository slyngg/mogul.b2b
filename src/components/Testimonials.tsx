import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechFlow SaaS',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'Mogul transformed our entire operation. We went from drowning in spreadsheets to having a crystal-clear view of every lead and deal. The ROI was visible within the first month.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Founder',
    company: 'Apex Real Estate',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'The custom CRM they built for us is exactly what we needed. Our agents close deals 60% faster now. Best investment we\'ve made.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    company: 'HealthFirst Clinic',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'Patient no-shows dropped by 75% after implementing their automated reminder system. The team at Mogul truly understands healthcare workflows.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Managing Partner',
    company: 'Velocity Marketing',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    content: 'Managing 200+ client accounts used to be a nightmare. Now our entire team operates from one dashboard. Game changer.',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'VP of Sales',
    company: 'CloudScale Inc',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    content: 'The AI-powered lead scoring alone has increased our conversion rate by 3x. Mogul doesn\'t just build software, they build growth engines.',
    rating: 5
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'CTO',
    company: 'FinanceFlow',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    content: 'Their technical expertise is unmatched. They integrated with our existing systems seamlessly and the performance is incredible.',
    rating: 5
  },
];

// Duplicate for infinite scroll
const allTestimonials = [...testimonials, ...testimonials];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-mogul-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-neon-purple text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Mogul.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative mb-6">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-6"
        >
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
        
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-mogul-navy to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-mogul-navy to-transparent pointer-events-none z-10" />
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="relative">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="flex gap-6"
        >
          {[...allTestimonials].reverse().map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
        
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-mogul-navy to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-mogul-navy to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="flex-shrink-0 w-[400px] bg-mogul-card border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-neon-purple/30 mb-4" />
      
      {/* Content */}
      <p className="text-gray-300 mb-6 line-clamp-4">
        "{testimonial.content}"
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
        />
        <div>
          <p className="font-semibold text-white group-hover:text-neon-blue transition-colors">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};
