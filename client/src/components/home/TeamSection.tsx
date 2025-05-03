import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, MailIcon } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const teamMembers = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Rajiv Mehta',
    position: 'Managing Director',
    bio: '15+ years in investment banking with expertise in growth-stage funding and strategic M&A'
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Priya Sharma',
    position: 'Director, Debt Advisory',
    bio: 'Former banker with specialized knowledge in structured debt and working capital solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Aditya Kapoor',
    position: 'Vice President, Valuations',
    bio: 'Expert in business valuations and financial modeling with a focus on technology and SaaS'
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Neha Desai',
    position: 'Head of Strategic Advisory',
    bio: 'Specializes in M&A advisory and strategic growth for family-owned businesses'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Team</h2>
          <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet our experienced professionals dedicated to your success</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-72 object-cover object-center transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-secondary transition duration-300">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-secondary transition duration-300">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-secondary transition duration-300">
                      <MailIcon className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-playfair font-semibold text-xl text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-medium"
            size="lg"
          >
            <Link href="/team">Meet Our Full Team</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
