import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { fadeIn, staggerContainer } from '@/lib/animations';
import aboutIllustration from '@/assets/about-illustration.svg';
import abstractPattern from '@/assets/abstract-pattern.svg';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SHC Partners</title>
        <meta name="description" content="Learn about SHC Partners, a boutique investment banking firm dedicated to helping businesses grow financially, strategically, and sustainably." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#081f36] to-[#0b2541] py-24 md:py-32 relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src={abstractPattern} 
            alt="Pattern Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Abstract elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <p className="text-white/90 text-sm font-medium tracking-wide">Empowering Financial Growth</p>
              </div>
              
              <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                About <span className="text-accent">SHC Partners</span>
              </h1>
              
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full my-8"></div>
              
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
                Our mission is to deliver sophisticated financial solutions that fuel sustainable growth for India's ambitious and emerging businesses.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-2/5 lg:w-1/3 mt-4 md:mt-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-xl transform rotate-6 scale-105"></div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl relative z-10">
                  <img 
                    src={aboutIllustration} 
                    alt="SHC Partners" 
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 hidden lg:block"></div>
        <div className="absolute bottom-20 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full filter blur-3xl translate-x-1/2 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-5">
                <p className="text-primary text-sm font-medium tracking-wide">Our Journey</p>
              </div>
              
              <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">Our Story</h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
              
              <p className="text-gray-700 text-lg mb-6">
                Founded in 2015, SHC Partners emerged from a vision to bridge the gap between traditional corporate finance and the unique needs of India's evolving business landscape. What started as a small advisory team has grown into a comprehensive investment banking firm with expertise spanning multiple industries and service domains.
              </p>
              
              <p className="text-gray-700 text-lg mb-6">
                Our founders, with backgrounds in global financial institutions, recognized that mid-market and emerging companies in India needed more than standardized financial services—they required strategic partners who understood their specific challenges and opportunities.
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/10 mb-8">
                <p className="text-gray-800 text-lg italic">
                  Today, SHC Partners stands as a testament to that founding vision, having facilitated over ₹2000 crores in transactions and guided numerous businesses through critical growth phases, market expansions, and strategic transformations.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">2015</div>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs font-bold">2018</div>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">2022</div>
                </div>
                <span className="text-gray-500 text-sm">Years of excellence</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="relative">
              {/* Image frame with effects */}
              <div className="relative">
                {/* Background blur effect */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 rounded-xl filter blur-xl opacity-70"></div>
                
                {/* Border card effect */}
                <div className="absolute inset-0 border-2 border-white/30 rounded-xl transform rotate-3 scale-105"></div>
                
                {/* Main image card */}
                <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Business meeting" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <p className="text-white/90 font-playfair text-lg">"Strategic financial solutions for forward-thinking businesses"</p>
                    <p className="text-white/70 text-sm mt-1">— SHC Partners Foundation</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-secondary/10 rounded-full z-0"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full z-0"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <p className="text-primary text-sm font-medium tracking-wide">Our Guiding Principles</p>
            </span>
            
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">Our Mission & Vision</h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-10"></div>
            
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              At the heart of SHC Partners are our clearly defined mission and vision statements that guide every decision we make and service we provide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <motion.div 
              variants={fadeIn('up', 'spring', 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="group hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-full relative overflow-hidden">
                {/* Decorative accent bar top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 5c.67 0 1.35.09 2 .26V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2.26c.65-.17 1.33-.26 2-.26"></path>
                      <path d="M19 5a2 2 0 0 0-2-2h-2c-.6 0-1.13.33-1.4.86A8.37 8.37 0 0 1 12 5a8.37 8.37 0 0 1-1.6-1.14C10.13 3.33 9.6 3 9 3H7a2 2 0 0 0-2 2c0 1.3.84 2.4 2 2.82v9.18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V7.82c1.16-.42 2-1.52 2-2.82"></path>
                    </svg>
                  </div>
                  
                  <h3 className="font-playfair font-bold text-2xl lg:text-3xl text-primary mb-4">Our Mission</h3>
                  
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    To empower businesses with strategic financial guidance that enables sustainable growth and meaningful impact. We strive to be more than advisors—we aim to be trusted partners in our clients' journeys toward success.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-gray-700 italic">
                      We believe in fostering long-term relationships built on integrity, transparency, and results-driven solutions tailored to each client's unique goals and challenges.
                    </p>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="group hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-full relative overflow-hidden">
                {/* Decorative accent bar top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-secondary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                  </div>
                  
                  <h3 className="font-playfair font-bold text-2xl lg:text-3xl text-secondary mb-4">Our Vision</h3>
                  
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    To be the most trusted investment banking partner for ambitious Indian businesses, recognized for our deep expertise, ethical approach, and commitment to client success.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-gray-700 italic">
                      We envision a business landscape where companies of all sizes have access to sophisticated financial strategies and capital structures that were once available only to the largest corporations.
                    </p>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3OTNhOTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0yVjZoMnY0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <p className="text-primary text-sm font-medium tracking-wide">Our Methodology</p>
            </span>
            
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">Our Approach</h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-10"></div>
            
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              We follow a systematic methodology designed to understand your business thoroughly, identify optimal solutions, and execute with precision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div 
              variants={fadeIn('up', 'spring', 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl transform translate-y-3 scale-[0.97] group-hover:scale-[0.94] transition duration-500"></div>
              
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg relative h-full border border-gray-100 group-hover:border-primary/20 transition duration-300">
                <div className="absolute right-6 top-6 text-7xl font-playfair text-primary/10 group-hover:text-primary/15 transition duration-300">1</div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.3-4.3"/>
                    </svg>
                  </div>
                  
                  <h3 className="font-playfair font-bold text-2xl text-primary mb-4 relative">Discovery & Analysis</h3>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We begin by deeply understanding your business, market position, financial situation, and goals. Our team conducts thorough research and analysis to identify key opportunities and challenges.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl transform translate-y-3 scale-[0.97] group-hover:scale-[0.94] transition duration-500"></div>
              
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg relative h-full border border-gray-100 group-hover:border-secondary/20 transition duration-300">
                <div className="absolute right-6 top-6 text-7xl font-playfair text-secondary/10 group-hover:text-secondary/15 transition duration-300">2</div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                      <path d="M9 18h6"/>
                      <path d="M10 22h4"/>
                    </svg>
                  </div>
                  
                  <h3 className="font-playfair font-bold text-2xl text-secondary mb-4 relative">Strategy Development</h3>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Based on our findings, we develop customized financial and strategic solutions tailored to your specific needs. We present clear options and recommendations to help you make informed decisions.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.3, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl transform translate-y-3 scale-[0.97] group-hover:scale-[0.94] transition duration-500"></div>
              
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg relative h-full border border-gray-100 group-hover:border-accent/20 transition duration-300">
                <div className="absolute right-6 top-6 text-7xl font-playfair text-accent/10 group-hover:text-accent/15 transition duration-300">3</div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                    </svg>
                  </div>
                  
                  <h3 className="font-playfair font-bold text-2xl text-accent mb-4 relative">Execution & Support</h3>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our team works diligently to implement the chosen strategy, whether that involves structuring deals, approaching investors, or guiding you through complex financial transactions. We remain by your side through completion and beyond.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Call-to-action */}
          <motion.div 
            variants={fadeIn('up', 'spring', 0.4, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-8 md:p-10 rounded-2xl border border-white/40 shadow-lg max-w-4xl mx-auto backdrop-blur-sm">
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-primary mb-4">Ready to Transform Your Financial Strategy?</h3>
              <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
                Contact us today to schedule a consultation and discover how our strategic approach can elevate your business's financial performance.
              </p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Start the Conversation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
