import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Partners', path: '/team' },
  { name: 'Transactions', path: '/transactions' },
  { name: 'Contact', path: '/contact', isButton: true }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? 'bg-white shadow-sm' : 'bg-white'} transition-all duration-300`}>
      <nav className="container mx-auto px-2">
        <div className="flex justify-between items-center h-24 overflow-visible">
          <div className="flex items-center -mt-2">
            <Link href="/">
              <span className="flex items-center">
                <img 
                  src="/assets/SHC_Growth_Partners_Logo-removebg-preview.png" 
                  alt="SHC Growth Partners" 
                  className="h-48 md:h-56 w-auto"
                />
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              item.isButton ? (
                <Button 
                  key={item.name} 
                  className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white rounded-sm ml-2"
                  onClick={() => window.location.href = item.path}
                >
                  {item.name}
                </Button>
              ) : (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className="text-gray-700 hover:text-[#793a99] px-3 py-2 font-montserrat text-sm transition duration-300"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <Button onClick={toggleMenu} variant="ghost" size="icon" aria-label="Menu">
              {isOpen ? <X className="h-6 w-6 text-[#793a99]" /> : <Menu className="h-6 w-6 text-[#793a99]" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white"
          >
            <div className="px-4 py-5 space-y-2 shadow-md">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-2 last:border-0">
                  {item.isButton ? (
                    <Button 
                      className="bg-[#ee3f37] hover:bg-[#ee3f37]/90 text-white w-full rounded-sm"
                      onClick={() => {
                        closeMenu();
                        window.location.href = item.path;
                      }}
                    >
                      {item.name}
                    </Button>
                  ) : (
                    <Link 
                      href={item.path}
                      className="block py-2 text-gray-700 hover:text-[#793a99] font-medium text-sm"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
