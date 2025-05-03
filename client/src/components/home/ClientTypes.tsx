import { motion } from 'framer-motion';
import { Zap, Building, DollarSign, BarChart2 } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const clientTypes = [
  {
    icon: <Zap className="h-10 w-10 text-secondary" />,
    title: 'Early-Stage Startups',
    description: 'Guiding innovative ventures from concept to market leadership'
  },
  {
    icon: <Building className="h-10 w-10 text-secondary" />,
    title: 'Family-Run Businesses',
    description: 'Balancing tradition with growth strategies for legacy enterprises'
  },
  {
    icon: <DollarSign className="h-10 w-10 text-secondary" />,
    title: 'PE-backed Companies',
    description: 'Maximizing value and preparing for next-stage growth or exit'
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-secondary" />,
    title: 'Sector-Focused Mid-Cap Firms',
    description: 'Strategic solutions for established domain leaders'
  }
];

const ClientTypes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Who We Serve</h2>
          <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Our expertise spans across various business stages and sectors</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.1, 0.6)}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                {client.icon}
              </div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">{client.title}</h3>
              <p className="text-gray-600">{client.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTypes;
