import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'Services', path: '/services', hash: '#services' },
  { name: 'About Us', path: '/about', hash: '#about' },
  { name: 'Team', path: '/team', hash: '#team' },
  { name: 'Transactions', path: '/transactions', hash: '#transactions' },
  { name: 'News & Insights', path: '/news', hash: '#news' },
  { name: 'Contact Us', path: '/contact', hash: '#contact', isButton: true }
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

  const isHomePage = location === '/';

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? 'bg-white shadow-sm' : 'bg-white'} transition-all duration-300`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary font-playfair font-bold text-2xl tracking-tight">
                SHC <span className="text-secondary">Partners</span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isButton ? (
                <Button 
                  key={item.name} 
                  asChild 
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link href={item.path}>{item.name}</Link>
                </Button>
              ) : (
                <Link 
                  key={item.name} 
                  href={isHomePage ? item.hash : item.path}
                  className="text-gray-700 hover:text-primary font-montserrat text-sm font-medium transition duration-300"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <Button onClick={toggleMenu} variant="ghost" size="icon" aria-label="Menu">
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
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
            <div className="px-4 py-5 space-y-4 shadow-md">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-2 last:border-0">
                  {item.isButton ? (
                    <Button 
                      asChild 
                      className="bg-primary hover:bg-primary/90 text-white w-full"
                      onClick={closeMenu}
                    >
                      <Link href={item.path}>{item.name}</Link>
                    </Button>
                  ) : (
                    <Link 
                      href={isHomePage ? item.hash : item.path}
                      className="block py-2 text-gray-700 hover:text-primary font-medium"
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
