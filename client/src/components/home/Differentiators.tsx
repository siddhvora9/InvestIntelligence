import { motion } from 'framer-motion';
import { Lightbulb, Users, Target } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const differentiators = [
  {
    icon: <Lightbulb className="h-12 w-12" />,
    title: 'Deep Industry Experience',
    description: 'Our team brings decades of frontline deal-making and transaction experience, providing you with insights that go beyond textbook solutions.'
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: 'Extensive Network',
    description: 'Tap into our relationships with investors, financial institutions, and corporate leaders to unlock opportunities that others might miss.'
  },
  {
    icon: <Target className="h-12 w-12" />,
    title: 'Tailored Approach',
    description: 'Every solution we offer is shaped around your unique business challenges and goals, not forced into a one-size-fits-all template.'
  }
];

const Differentiators = () => {
  return (
    <section className="py-20 navy-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-3">What Sets Us Apart</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">Our distinctive approach to investment banking</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.1, 0.6)}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition duration-300"
            >
              <div className="text-secondary mb-4">
                {item.icon}
              </div>
              <h3 className="font-playfair font-semibold text-xl text-white mb-3">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiators;
