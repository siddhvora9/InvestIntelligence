import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Linkedin, Twitter, MailIcon } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const leadershipTeam = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Rajiv Mehta',
    position: 'Managing Director',
    bio: '15+ years in investment banking with expertise in growth-stage funding and strategic M&A. Prior to founding SHC Partners, Rajiv held senior positions at global investment banks where he led numerous high-profile transactions.',
    linkedin: '#',
    twitter: '#',
    email: 'rajiv@shcpartners.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Priya Sharma',
    position: 'Director, Debt Advisory',
    bio: 'Former banker with specialized knowledge in structured debt and working capital solutions. Priya has facilitated over ₹500 crores in debt financing across various sectors, helping businesses optimize their capital structure.',
    linkedin: '#',
    twitter: '#',
    email: 'priya@shcpartners.com'
  }
];

const seniorTeam = [
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Aditya Kapoor',
    position: 'Vice President, Valuations',
    bio: 'Expert in business valuations and financial modeling with a focus on technology and SaaS companies. Certified valuation analyst with experience across multiple industries.',
    linkedin: '#',
    twitter: '#',
    email: 'aditya@shcpartners.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Neha Desai',
    position: 'Head of Strategic Advisory',
    bio: 'Specializes in M&A advisory and strategic growth for family-owned businesses. Extensive experience in cross-border transactions and business transformations.',
    linkedin: '#',
    twitter: '#',
    email: 'neha@shcpartners.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Vikram Singh',
    position: 'Senior Associate, Equity',
    bio: 'Focused on early-stage funding and venture capital relationships. Previously worked at a leading startup accelerator, guiding numerous companies through successful fundraising rounds.',
    linkedin: '#',
    twitter: '#',
    email: 'vikram@shcpartners.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Ananya Patel',
    position: 'Associate Director, Research',
    bio: 'Leads our market research and industry analysis team. MBA from a top-tier institution with background in economic research and financial analysis.',
    linkedin: '#',
    twitter: '#',
    email: 'ananya@shcpartners.com'
  }
];

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | SHC Partners</title>
        <meta name="description" content="Meet our experienced team of investment banking professionals dedicated to your business success." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
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
            <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl mb-6 text-shadow">Our Team</h1>
            <p className="text-white/90 text-lg md:text-xl">
              Meet the experienced professionals dedicated to your success. Our diverse team brings together expertise from across the financial industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Collective Expertise</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700">
              At SHC Partners, our team is our greatest asset. With backgrounds spanning global financial institutions, startups, and industry-specific expertise, we bring together diverse perspectives united by a common purpose: your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <motion.div 
              variants={fadeIn('up', 'spring', 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Trusted Experience</h3>
              <p className="text-gray-700">
                Our team brings over 75 years of combined experience across investment banking, corporate finance, and industry-specific expertise.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'spring', 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Execution Excellence</h3>
              <p className="text-gray-700">
                We've successfully executed over 100 transactions with a combined value exceeding ₹2000 crores across various sectors.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'spring', 0.3, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Client-First Approach</h3>
              <p className="text-gray-700">
                We maintain a boutique approach where senior team members are directly involved in every client engagement, ensuring personalized attention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Leadership Team</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in finance, strategy, and industry expertise to guide our clients toward success.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3 relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center md:h-full transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="font-playfair font-semibold text-2xl text-primary mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium mb-4">{member.position}</p>
                    <p className="text-gray-700 mb-6">{member.bio}</p>
                    <div className="flex items-center space-x-4">
                      <a href={member.linkedin} className="text-primary hover:text-secondary transition duration-300">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.twitter} className="text-primary hover:text-secondary transition duration-300">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-primary hover:text-secondary transition duration-300">
                        <MailIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Senior Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Senior Team</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our senior specialists bring deep domain expertise across various financial disciplines, ensuring comprehensive solutions for our clients.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {seniorTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <a href={member.linkedin} className="text-white hover:text-secondary transition duration-300">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href={member.twitter} className="text-white hover:text-secondary transition duration-300">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-white hover:text-secondary transition duration-300">
                        <MailIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-xl text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
