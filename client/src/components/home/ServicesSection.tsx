import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { BadgeDollarSign, Calculator, TrendingUp, BarChart3 } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const services = [
  {
    id: 'equity',
    icon: <BadgeDollarSign className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />,
    title: 'Equity Solutions',
    description: 'Raise capital that matches your stage and strategy.',
    items: [
      'Growth Equity: Attract institutional investors',
      'Early-Stage Funding: Structure angel/VC rounds',
      'Investor Positioning: Develop pitch decks',
      'Equity Structuring: Ownership frameworks'
    ]
  },
  {
    id: 'debt',
    icon: <Calculator className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />,
    title: 'Debt Advisory',
    description: 'Leverage capital without diluting ownership.',
    items: [
      'Loan Syndication & NBFC Tie-ups',
      'Co-lending & FLDG arrangement',
      'Term Loans / Project Finance',
      'Working Capital Financing'
    ]
  },
  {
    id: 'strategic',
    icon: <TrendingUp className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />,
    title: 'Strategic Advisory',
    description: 'Go beyond numbers with high-level strategic input.',
    items: [
      'M&A Advisory: From search to integration',
      'Financial Due Diligence',
      'GTM Strategy & B2B Strategic Collaboration',
      'IPO Services & Pre IPO Funding'
    ]
  },
  {
    id: 'valuation',
    icon: <BarChart3 className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />,
    title: 'Valuation',
    description: 'Comprehensive valuation for all your assets.',
    items: [
      'Business Valuation',
      'Brands, Intangible Assets & IP Valuation',
      'Financial Securities & Instruments',
      'Real Estate & Infrastructure Assets'
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Services</h2>
          <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive financial solutions tailored to your business needs</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn('up', 'spring', index * 0.1, 0.6)}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                  {service.icon}
                </div>
                
                <h3 className="font-playfair font-semibold text-xl text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 bg-secondary/60 group-hover:bg-secondary rounded-full transition-colors duration-300"></div>
                      </div>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item}</p>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/services#${service.id}`} 
                  className="inline-flex items-center text-primary hover:text-secondary font-medium transition duration-300"
                >
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
