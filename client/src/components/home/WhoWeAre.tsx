import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import teamMeetingImage from '@/assets/team-meeting.svg';
import officeSpaceImage from '@/assets/office-space.svg';

const coreValues = [
  {
    title: 'Integrity',
    description: 'We earn trust through transparency and ethical conduct'
  },
  {
    title: 'Partnership',
    description: 'We treat our clients\' goals as our own'
  },
  {
    title: 'Excellence',
    description: 'We deliver insightful, accurate, and results-driven advice'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve to bring you fresh perspectives'
  }
];

const WhoWeAre = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
            <div className="mb-6">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-2">Who We Are</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            
            <p className="text-gray-700 mb-6">
              SHC Growth Partners is a boutique investment banking firm dedicated to helping businesses grow- financially, strategically, and sustainably. With our roots in India's dynamic market and a team of seasoned professionals, we guide clients through transformative financial decisions.
            </p>
            
            <p className="text-gray-700 mb-8">
              From raising capital to navigating complex mergers, we are committed to building long-term value for our clients.
            </p>
            
            <div className="mb-10">
              <h3 className="font-playfair font-semibold text-2xl text-primary mb-4">Our Philosophy</h3>
              <p className="text-gray-700">
                At SHC GrowthPartners, we believe in growth with purpose. We are more than bankers—we are partners in your journey. Our mission is to deliver financial solutions that fuel sustainable growth for India's emerging businesses. Whether you're securing funding, acquiring a competitor, or exploring your valuation, we're here to ensure that every step forward is strategic and successful.
              </p>
            </div>
            
            <div>
              <h3 className="font-playfair font-semibold text-2xl text-primary mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold">{value.title}</p>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Images */}
          <motion.div 
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl bg-white">
              <img 
                src={teamMeetingImage} 
                alt="Investment professionals in a meeting" 
                className="w-full h-96 object-contain p-2"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-72 h-72 rounded-lg overflow-hidden shadow-xl hidden lg:block bg-white">
              <img 
                src={officeSpaceImage} 
                alt="Modern office space" 
                className="w-full h-full object-contain p-2"
              />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-secondary/20 w-48 h-48 rounded-full hidden lg:block"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
