import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { BadgeDollarSign, Calculator, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Link } from 'wouter';

const services = [
  {
    id: 'equity',
    title: 'Equity Solutions',
    icon: <BadgeDollarSign className="h-12 w-12" />,
    description: 'We help businesses raise capital that matches their stage and growth strategy, connecting them with the right investors and structuring deals that create long-term value.',
    features: [
      'Growth Equity: Attract institutional investors to scale operations',
      'Early-Stage Funding: Structure angel/VC rounds for startups',
      'Investor Positioning: Develop pitch decks and financial models that resonate',
      'Equity Structuring: Advise on ownership and governance frameworks'
    ],
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'debt',
    title: 'Debt Advisory',
    icon: <Calculator className="h-12 w-12" />,
    description: 'Our debt advisory services help businesses leverage capital without diluting ownership, providing flexible funding solutions tailored to your specific requirements.',
    features: [
      'Loan Syndication & NBFC Tie-ups: Tap into our network for structured deals',
      'Co-lending & FLDG arrangement',
      'Term Loans / Project Finance: Long-term financing for major initiatives',
      'Working Capital Financing',
      'Venture Debt – Govt Grant & CGTMSE',
      'Export/Import Financing'
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'strategic',
    title: 'Strategic Advisory',
    icon: <TrendingUp className="h-12 w-12" />,
    description: 'We provide high-level strategic input that goes beyond numbers, helping businesses navigate complex decisions and position themselves for sustainable growth.',
    features: [
      'M&A Advisory: From target search to post-deal integration',
      'Financial Due Diligence: For investors or acquirers',
      'Consulting: Market entry, business strategy, financial re-engineering',
      'GTM Strategy & B2B Strategic Collaboration',
      'NBFC Buying & selling & RBI Listing',
      'IPO Services & Pre IPO Funding'
    ],
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'valuation',
    title: 'Valuation',
    icon: <BarChart3 className="h-12 w-12" />,
    description: 'Our comprehensive valuation services provide businesses with accurate, defensible assessments of their worth, assets, and investments.',
    features: [
      'Business Valuation',
      'Valuation of Brands, Intangible Assets & Intellectual Property',
      'Valuation of Financial Securities, Instruments & Derivatives',
      'Valuation of Industrial Assets, Plant & Machinery',
      'Valuation of Real Estate',
      'Valuation of Infrastructure Assets & Specialized Assets'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | SHC Partners</title>
        <meta name="description" content="Comprehensive financial solutions tailored to your business needs - Equity, Debt, Strategic Advisory, and Valuation services." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl mb-6 text-shadow">Our Services</h1>
            <p className="text-white/90 text-lg md:text-xl">
              Comprehensive financial solutions tailored to your business needs. From raising capital to strategic guidance, we're your partner at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Financial Solutions for Every Need</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At SHC Partners, we provide a comprehensive suite of investment banking and financial advisory services designed to meet the diverse needs of growing businesses.
            </p>
          </motion.div>

          {/* Service Items */}
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.id}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div 
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 'tween', 0.2, 1)}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center mb-4">
                  <div className="text-secondary mr-4">{service.icon}</div>
                  <h3 className="font-playfair font-bold text-2xl md:text-3xl text-primary">{service.title}</h3>
                </div>
                <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                
                <h4 className="font-playfair font-semibold text-xl text-primary mb-4">Key Features</h4>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link href="/contact">Discuss Your Requirements</Link>
                </Button>
              </motion.div>
              
              <motion.div 
                variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 'tween', 0.2, 1)}
                className="order-1 lg:order-2"
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={service.image}
                    alt={service.title} 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-6">Ready to Take Your Business Forward?</h2>
            <p className="text-gray-700 mb-8">
              Let's discuss how our services can help you achieve your financial and strategic goals. Our team is ready to provide expert guidance tailored to your specific needs.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto"
              size="lg"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
