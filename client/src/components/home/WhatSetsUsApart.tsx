import { motion } from 'framer-motion';
import { Briefcase, Users, Lightbulb, Award } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const features = [
  {
    icon: <Briefcase className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" strokeWidth={1.2} />,
    title: 'Professionalism',
    description: 'Our team brings together decades of experience in investment banking, private equity, and corporate finance.'
  },
  {
    icon: <Users className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" strokeWidth={1.2} />,
    title: 'Collaborative Network',
    description: 'Access to a vast network of investors, strategic partners, and industry experts worldwide.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" strokeWidth={1.2} />,
    title: 'Innovative Solutions',
    description: 'Customized financial strategies that align with your specific business goals and market position.'
  },
  {
    icon: <Award className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" strokeWidth={1.2} />,
    title: 'Recognized Excellence',
    description: 'Successful track record of helping businesses achieve their growth and financial objectives.'
  }
];

const WhatSetsUsApart = () => {
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
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">What Sets Us Apart</h2>
          <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Our unique approach combines expertise, innovation, and personalized service</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.1, 0.6)}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white bg-opacity-30 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  {feature.icon}
                </div>
                <h3 className="font-playfair font-semibold text-xl text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart; 