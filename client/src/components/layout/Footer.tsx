import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  ArrowRight 
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    // Here we would typically submit to the server
    toast({
      title: "Thank you for subscribing!",
      description: "You will receive our newsletter soon.",
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-[#081f36] to-[#051425] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Abstract decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo and info section with special design element */}
        <div className="flex flex-col items-center text-center mb-16">
          <Link href="/" className="inline-block">
            <span className="text-white font-playfair font-bold text-3xl tracking-tight">
              SHC <span className="text-secondary">Partners</span>
            </span>
          </Link>
          <div className="h-0.5 w-20 bg-gradient-to-r from-primary to-secondary my-6 rounded-full"></div>
          <p className="text-white/80 max-w-xl text-center font-light mb-6">
            Empowering businesses through strategic investment banking solutions, designed for ambitious startups and growing enterprises.
          </p>
          <div className="flex space-x-6">
            <Link href="https://linkedin.com" className="text-white/70 hover:text-secondary transition-all duration-300 hover:scale-110">
              <div className="bg-white/10 p-2.5 rounded-full hover:bg-white/20">
                <Linkedin className="h-5 w-5" />
              </div>
            </Link>
            <Link href="https://twitter.com" className="text-white/70 hover:text-secondary transition-all duration-300 hover:scale-110">
              <div className="bg-white/10 p-2.5 rounded-full hover:bg-white/20">
                <Twitter className="h-5 w-5" />
              </div>
            </Link>
            <Link href="https://facebook.com" className="text-white/70 hover:text-secondary transition-all duration-300 hover:scale-110">
              <div className="bg-white/10 p-2.5 rounded-full hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </div>
            </Link>
            <Link href="https://instagram.com" className="text-white/70 hover:text-secondary transition-all duration-300 hover:scale-110">
              <div className="bg-white/10 p-2.5 rounded-full hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 mb-16">
          {/* Services Links */}
          <div className="lg:col-span-4 md:col-span-1">
            <h4 className="font-playfair font-semibold text-xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#equity" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Equity Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/services#debt" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Debt Advisory</span>
                </Link>
              </li>
              <li>
                <Link href="/services#strategic" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Strategic Advisory</span>
                </Link>
              </li>
              <li>
                <Link href="/services#valuation" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Valuation Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services#ma" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>M&A Advisory</span>
                </Link>
              </li>
              <li>
                <Link href="/services#financial" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Financial Modeling</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 md:col-span-1">
            <h4 className="font-playfair font-semibold text-xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Our Team</span>
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Transactions</span>
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>News & Insights</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-accent"></div>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 md:col-span-1">
            <h4 className="font-playfair font-semibold text-xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Newsletter</h4>
            <p className="text-white/70 mb-5">
              Subscribe to receive our latest insights on financial markets, M&A trends, and investment strategies.
            </p>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="bg-white/5 p-1 rounded-full flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow bg-transparent border-none focus:ring-0 text-white placeholder:text-white/50 rounded-l-full"
                />
                <Button type="submit" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full">
                  <span className="mr-2 text-sm font-medium">Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10">
              <p className="text-white/90 text-sm italic">
                "SHC Partners provided exceptional guidance throughout our fundraising journey, resulting in a successful Series B round."
              </p>
              <p className="text-white/70 text-xs mt-2">— CEO, Tech Startup</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SHC Partners. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link href="/privacy-policy" className="text-white/60 hover:text-secondary text-sm transition duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-secondary text-sm transition duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/60 hover:text-secondary text-sm transition duration-300">
                Sitemap
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-secondary text-sm transition duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
