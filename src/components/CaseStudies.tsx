import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Clock, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'TechFlow SaaS',
    industry: 'Software',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    title: 'Automated lead pipeline increased conversions by 340%',
    description: 'Implemented CORE CRM with AI-powered lead scoring and automated follow-up sequences.',
    stats: [
      { label: 'Conversion Rate', value: '+340%', icon: TrendingUp },
      { label: 'Time Saved', value: '35hrs/wk', icon: Clock },
      { label: 'Leads Processed', value: '10x', icon: Users },
    ],
    color: 'from-neon-blue to-neon-cyan'
  },
  {
    id: 2,
    client: 'Apex Real Estate',
    industry: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    title: 'Custom CRM reduced deal closing time by 60%',
    description: 'Built a tailored property management system with automated client communication.',
    stats: [
      { label: 'Closing Time', value: '-60%', icon: Clock },
      { label: 'Revenue', value: '+$2.4M', icon: TrendingUp },
      { label: 'Client Retention', value: '95%', icon: Users },
    ],
    color: 'from-neon-purple to-pink-500'
  },
  {
    id: 3,
    client: 'HealthFirst Clinic',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    title: 'Patient management system serving 50,000+ patients',
    description: 'Developed HIPAA-compliant scheduling and patient communication platform.',
    stats: [
      { label: 'Patients Served', value: '50k+', icon: Users },
      { label: 'No-Shows', value: '-75%', icon: TrendingUp },
      { label: 'Admin Time', value: '-40hrs', icon: Clock },
    ],
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 4,
    client: 'Velocity Marketing',
    industry: 'Agency',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    title: 'Agency dashboard managing $5M+ in ad spend',
    description: 'Created unified reporting dashboard with real-time campaign optimization.',
    stats: [
      { label: 'ROAS', value: '+180%', icon: TrendingUp },
      { label: 'Reporting Time', value: '-90%', icon: Clock },
      { label: 'Clients Managed', value: '200+', icon: Users },
    ],
    color: 'from-orange-400 to-red-500'
  },
];

export const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={containerRef} className="py-24 bg-mogul-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-neon-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Real Results.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Real Impact.
              </span>
            </h2>
          </div>
          <a 
            href="#" 
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative">
        <motion.div 
          style={{ x }}
          className="flex gap-6 pl-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex-shrink-0 w-[400px] md:w-[500px]"
            >
              <div className="relative bg-mogul-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mogul-card via-mogul-card/50 to-transparent" />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.color} text-black`}>
                      {study.industry}
                    </span>
                  </div>

                  {/* External Link */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-2">{study.client}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <stat.icon className="w-4 h-4 mx-auto mb-1 text-gray-500" />
                        <div className={`text-lg font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-mogul-dark to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-mogul-dark to-transparent pointer-events-none z-10" />
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === 0 ? 'w-8 bg-neon-blue' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
