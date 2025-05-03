import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'Home', path: '/', hash: '#' },
  { name: 'Services', path: '/services', hash: '#services' },
  { name: 'About', path: '/about', hash: '#about' },
  { name: 'Transactions', path: '/transactions', hash: '#transactions' },
  { name: 'Deal Room', path: '/deal-room', hash: '#deal-room' },
  { name: 'Post Deal', path: '/post-deal', hash: '#post-deal', isButton: true }
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
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-playfair font-bold text-xl md:text-2xl tracking-tight">
                <span className="text-[#793a99]">SHC</span> <span className="text-[#b62c7f]">Partners</span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              item.isButton ? (
                <Button 
                  key={item.name} 
                  asChild 
                  className="bg-[#0442a0] hover:bg-[#0442a0]/90 text-white rounded-sm ml-2"
                >
                  <Link href={item.path}>{item.name}</Link>
                </Button>
              ) : (
                <Link 
                  key={item.name} 
                  href={isHomePage ? item.hash : item.path}
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
                      asChild 
                      className="bg-[#0442a0] hover:bg-[#0442a0]/90 text-white w-full rounded-sm"
                      onClick={closeMenu}
                    >
                      <Link href={item.path}>{item.name}</Link>
                    </Button>
                  ) : (
                    <Link 
                      href={isHomePage ? item.hash : item.path}
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
