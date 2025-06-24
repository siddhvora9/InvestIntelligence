import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play, ChevronRight, Briefcase, TrendingUp, Handshake, Building2 } from 'lucide-react';
import financeIllustration from '@/assets/finance-illustration.svg';
import abstractPattern from '@/assets/abstract-pattern.svg';

const Hero = () => {
  // Transaction stats similar to fundgini.com
  const stats = [
    { 
      title: 'Debt Finance', 
      count: 20, 
      icon: <Briefcase className="w-8 h-8 text-white" />, 
      color: 'from-primary/20 to-primary/30' 
    },
    { 
      title: 'Equity Fundraise', 
      count: 15, 
      icon: <TrendingUp className="w-8 h-8 text-white" />, 
      color: 'from-secondary/20 to-secondary/30' 
    },
    { 
      title: 'Buy (M&A/JV)', 
      count: 20, 
      icon: <Handshake className="w-8 h-8 text-white" />, 
      color: 'from-primary/20 to-secondary/30' 
    },
    { 
      title: 'Sell', 
      count: 10, 
      icon: <Building2 className="w-8 h-8 text-white" />, 
      color: 'from-primary/20 to-secondary/30' 
    }
  ];

  return (
    <section className="relative bg-[#081f36] overflow-hidden min-h-screen flex items-center">
      {/* Dark background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={abstractPattern} alt="Background Pattern" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-5">
              <p className="text-white/90 text-sm font-medium tracking-wide">Financial Excellence Since 2025</p>
            </div>
            
            <h1 className="text-white font-playfair font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="text-[#793a99]">SHC</span> <span className="text-[#b62c7f]">Growth</span> <span className="text-[#ee3f37]">Partners</span>
            </h1>
            <p className="text-white/90 font-montserrat text-lg md:text-xl mb-8 max-w-xl">
              Global Ecosystem for Equity Funding | Debt Finance | Mergers and Acquisitions
            </p>
            
            {/* Commented out buttons for future use
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white flex items-center gap-2 rounded-full shadow-lg shadow-secondary/20 py-6 px-8 h-auto"
              >
                <Play size={18} />
                <span className="font-medium text-base">Watch Overview</span>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm py-6 px-8 h-auto group"
              >
                <Link href="/login" className="flex items-center gap-2">
                  <span className="font-medium text-base">Login to Portal</span>
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            */}
          </motion.div>
          
          <motion.div
            className="w-full lg:w-2/5 xl:w-1/3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl shadow-black/10">
              <img 
                src={financeIllustration} 
                alt="SHC Growth Partners Financial Services" 
                className="w-full h-auto rounded"
              />
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/80 text-sm">FINANCIAL EXCELLENCE</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Transaction Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl text-center backdrop-blur-sm hover:shadow-lg transition duration-300 border border-white/5 shadow shadow-black/5 group`}
            >
              <div className="mb-3 flex justify-center items-center">
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <p className="text-white font-montserrat text-sm mb-1 opacity-90">{stat.title}</p>
              <p className="text-white font-playfair font-bold text-2xl">{stat.count} <span className="text-sm opacity-80">Deals</span></p>
            </div>
          ))}
          
          <div className="col-span-2 md:col-span-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-5 mt-4 rounded-xl text-center backdrop-blur-sm border border-white/5 shadow shadow-black/5">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <p className="text-white/90 font-playfair text-3xl font-bold">416</p>
              <p className="text-white/80 text-sm font-medium">Total Deals</p>
              <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
