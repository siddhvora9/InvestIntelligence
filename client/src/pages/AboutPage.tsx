import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { fadeIn, staggerContainer } from '@/lib/animations';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SHC Partners</title>
        <meta name="description" content="Learn about SHC Partners, a boutique investment banking firm dedicated to helping businesses grow financially, strategically, and sustainably." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
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
            <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl mb-6 text-shadow">About SHC Partners</h1>
            <p className="text-white/90 text-lg md:text-xl">
              Our mission is to deliver financial solutions that fuel sustainable growth for India's emerging businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-4">Our Story</h2>
              <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
              <p className="text-gray-700 mb-6">
                Founded in 2015, SHC Partners emerged from a vision to bridge the gap between traditional corporate finance and the unique needs of India's evolving business landscape. What started as a small advisory team has grown into a comprehensive investment banking firm with expertise spanning multiple industries and service domains.
              </p>
              <p className="text-gray-700 mb-6">
                Our founders, with backgrounds in global financial institutions, recognized that mid-market and emerging companies in India needed more than standardized financial services—they required strategic partners who understood their specific challenges and opportunities.
              </p>
              <p className="text-gray-700">
                Today, SHC Partners stands as a testament to that founding vision, having facilitated over ₹2000 crores in transactions and guided numerous businesses through critical growth phases, market expansions, and strategic transformations.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Business meeting" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-secondary/20 w-64 h-64 rounded-full -z-10 hidden lg:block"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Mission & Vision</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              variants={fadeIn('up', 'spring', 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-playfair font-semibold text-2xl text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To empower businesses with strategic financial guidance that enables sustainable growth and meaningful impact. We strive to be more than advisors—we aim to be trusted partners in our clients' journeys toward success.
              </p>
              <p className="text-gray-700">
                We believe in fostering long-term relationships built on integrity, transparency, and results-driven solutions tailored to each client's unique goals and challenges.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-playfair font-semibold text-2xl text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be the most trusted investment banking partner for ambitious Indian businesses, recognized for our deep expertise, ethical approach, and commitment to client success.
              </p>
              <p className="text-gray-700">
                We envision a business landscape where companies of all sizes have access to sophisticated financial strategies and capital structures that were once available only to the largest corporations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Approach</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700">
              We follow a systematic methodology designed to understand your business thoroughly, identify optimal solutions, and execute with precision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              variants={fadeIn('up', 'spring', 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Discovery & Analysis</h3>
              <p className="text-gray-700">
                We begin by deeply understanding your business, market position, financial situation, and goals. Our team conducts thorough research and analysis to identify key opportunities and challenges.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Strategy Development</h3>
              <p className="text-gray-700">
                Based on our findings, we develop customized financial and strategic solutions tailored to your specific needs. We present clear options and recommendations to help you make informed decisions.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.3, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Execution & Support</h3>
              <p className="text-gray-700">
                Our team works diligently to implement the chosen strategy, whether that involves structuring deals, approaching investors, or guiding you through complex financial transactions. We remain by your side through completion and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
