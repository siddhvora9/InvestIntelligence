import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  // Transaction stats similar to fundgini.com
  const stats = [
    { title: 'Debt Finance', count: 172, icon: '💼' },
    { title: 'Equity Fundraise', count: 302, icon: '📈' },
    { title: 'Buy (M&A/JV)', count: 181, icon: '🤝' },
    { title: 'Sell', count: 194, icon: '🏢' },
  ];

  return (
    <section className="relative bg-[#081f36] overflow-hidden">
      {/* Dark background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white font-playfair font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              Welcome to <span className="text-accent">SHC Partners</span>
            </h1>
            <p className="text-white/90 font-montserrat text-lg mb-6">
              Global Ecosystem for Equity Funding | Debt Finance | Mergers and Acquisitions
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <Button
                className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2 rounded-full"
              >
                <Play size={16} />
                <span>Play Video</span>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                <Link href="#contact">Login to Post Deal</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary/30 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <img 
                src="https://placehold.co/400x300/793a99/ffffff?text=SHC+Partners" 
                alt="SHC Partners" 
                className="w-full h-auto rounded"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Transaction Stats Section */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 p-4 rounded-lg text-center backdrop-blur-sm hover:bg-white/10 transition duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-white font-montserrat text-sm mb-1">{stat.title}</p>
              <p className="text-white font-playfair font-bold text-xl">{stat.count} Deals</p>
            </div>
          ))}
          
          <div className="col-span-2 md:col-span-4 bg-white/5 p-4 mt-4 rounded-lg text-center backdrop-blur-sm">
            <p className="text-white/90 font-playfair text-2xl font-bold">416</p>
            <p className="text-white/80 text-sm">Total Deals</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
