import { motion } from 'framer-motion';
import { Button } from './Button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Foundation',
    price: 'Starting at $5k',
    description: 'Perfect for businesses ready to digitize operations.',
    features: ['Custom Web Application', 'Basic CRM Integration', 'Mobile Responsive', 'Analytics Setup'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'Starting at $15k',
    description: 'For scaling companies needing advanced automation.',
    features: ['Everything in Foundation', 'Advanced Automation Workflows', 'Client Portal', 'API Integrations', 'Priority Support'],
    highlight: true,
  },
  {
    name: 'Dominate',
    price: 'Custom',
    description: 'Full-scale digital transformation and partnership.',
    features: ['Full Stack Ecosystem', 'AI Implementation', 'Custom Mobile App', 'Dedicated Engineer Team', '24/7 Monitoring'],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-mogul-navy relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Investment</h2>
          <p className="text-gray-400">Transparent pricing for measurable results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${tier.highlight ? 'bg-white/5 border-neon-blue' : 'bg-mogul-card border-white/5'} flex flex-col`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{tier.price}</div>
                <p className="text-gray-400 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.highlight ? 'primary' : 'outline'} className="w-full">
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
