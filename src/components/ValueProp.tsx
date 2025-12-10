import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const mockups = [
  {
    title: "Financial Visibility",
    subtitle: "Total Revenue Generated",
    value: "$1,240,500",
    color: "from-neon-blue via-neon-purple to-neon-blue",
    content: (
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-mogul-navy rounded-lg p-4 h-32 border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/5 animate-pulse"></div>
                <div className="h-2 w-1/2 bg-gray-700 rounded mb-2"></div>
                <div className="h-8 w-full bg-gray-700/50 rounded mb-2"></div>
                <div className="h-2 w-1/3 bg-gray-700 rounded"></div>
            </div>
            <div className="bg-mogul-navy rounded-lg p-4 h-32 border border-white/5 flex items-end justify-between space-x-1">
                {[40, 70, 45, 90, 60, 80].map((h, i) => (
                    <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    className="w-full bg-neon-purple/50 rounded-t-sm"
                    />
                ))}
            </div>
        </div>
    )
  },
  {
    title: "Lead Management",
    subtitle: "Active Leads",
    value: "842",
    color: "from-neon-cyan via-green-400 to-neon-cyan",
    content: (
        <div className="space-y-3 mb-4">
             {[1, 2, 3].map((i) => (
                 <motion.div 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 bg-mogul-navy rounded-lg border border-white/5"
                 >
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                         <div className="space-y-1">
                             <div className="h-2 w-24 bg-gray-700 rounded"></div>
                             <div className="h-2 w-16 bg-gray-800 rounded"></div>
                         </div>
                     </div>
                     <div className="px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs">New</div>
                 </motion.div>
             ))}
        </div>
    )
  },
  {
    title: "System Health",
    subtitle: "Uptime",
    value: "99.99%",
    color: "from-orange-400 via-red-500 to-orange-400",
    content: (
        <div className="grid grid-cols-3 gap-3 mb-4">
             {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-mogul-navy p-3 rounded-lg border border-white/5 flex flex-col items-center justify-center gap-2">
                     <div className="w-8 h-8 rounded-full border-2 border-green-500/50 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     </div>
                     <div className="h-2 w-12 bg-gray-700 rounded"></div>
                 </div>
             ))}
             <div className="col-span-3 h-12 bg-mogul-navy rounded-lg border border-white/5 relative overflow-hidden">
                 <div className="absolute inset-y-0 left-0 bg-green-500/20 w-3/4"></div>
             </div>
        </div>
    )
  }
];

export const ValueProp = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setActiveTab((prev) => (prev + 1) % mockups.length);
      }, 5000);
      return () => clearInterval(timer);
  }, []);

  const nextTab = () => setActiveTab((prev) => (prev + 1) % mockups.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + mockups.length) % mockups.length);

  return (
    <section id="services" className="py-24 bg-mogul-navy relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Engineering Precision. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
                Designer Soul.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              We don't just build websites; we architect full-stack digital ecosystems. 
              From custom CRMs to automated client acquisition pipelines, we replace 
              guesswork with granular data.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: Monitor, title: "Custom Web Apps", desc: "Tailored dashboards and client portals." },
                { icon: Smartphone, title: "Mobile Optimized", desc: "Seamless experience across all devices." },
                { icon: Database, title: "Data Architecture", desc: "Scalable backend systems that grow with you." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition-colors cursor-default group"
                >
                  <div className="p-2 rounded-lg bg-neon-blue/10 text-neon-blue group-hover:bg-neon-blue/20 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-neon-blue transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full max-w-md lg:max-w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
               {/* Abstract Mockup Visualization */}
               <div className="bg-mogul-card border border-white/10 rounded-2xl p-4 shadow-2xl relative overflow-hidden group min-h-[400px] flex flex-col">
                  <AnimatePresence mode='wait'>
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${mockups[activeTab].color}`}
                    />
                  </AnimatePresence>
                  
                  {/* Fake UI Header */}
                  <div className="flex items-center justify-between mb-6 opacity-50 relative z-10 mt-2">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={prevTab} className="p-1 hover:bg-white/10 rounded transition-colors"><ChevronLeft size={16} /></button>
                        <button onClick={nextTab} className="p-1 hover:bg-white/10 rounded transition-colors"><ChevronRight size={16} /></button>
                    </div>
                  </div>

                  {/* Grid Content */}
                  <div className="flex-grow relative z-10">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-lg font-medium text-white mb-4">{mockups[activeTab].title}</h3>
                            {mockups[activeTab].content}
                        </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  <div className="bg-mogul-navy rounded-lg p-4 h-32 border border-white/5 flex items-center justify-center relative mt-auto z-10">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 to-transparent opacity-50"></div>
                     <div className="text-center">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-4xl font-bold text-white mb-2">{mockups[activeTab].value}</div>
                                <div className="text-sm text-gray-400">{mockups[activeTab].subtitle}</div>
                            </motion.div>
                        </AnimatePresence>
                     </div>
                  </div>
               </div>

               {/* Decorative floating elements */}
               <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-black border border-gray-800 p-4 rounded-xl shadow-xl z-20"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-xs font-mono text-green-500">System Optimized</span>
                 </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
