import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background with opacity */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-shadow">
            Empowering Businesses to Grow, Scale, and Succeed
          </h1>
          <p className="text-white/90 font-montserrat text-lg md:text-xl mb-8 max-w-2xl">
            SHC Partners delivers strategic investment banking solutions, designed for India's ambitious startups and growing enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              className="bg-secondary hover:bg-secondary/90 text-primary font-medium px-8 py-6 h-auto shadow-lg"
              size="lg"
            >
              <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 h-auto"
              size="lg"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
