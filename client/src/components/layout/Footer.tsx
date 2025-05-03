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
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/">
                <span className="text-white font-playfair font-bold text-2xl">
                  SHC <span className="text-secondary">Partners</span>
                </span>
              </Link>
            </div>
            <p className="text-white/70 mb-6">
              SHC Partners delivers strategic investment banking solutions, designed for India's ambitious startups and growing enterprises.
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="text-white/70 hover:text-secondary transition duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-white/70 hover:text-secondary transition duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-white/70 hover:text-secondary transition duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-white/70 hover:text-secondary transition duration-300">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#equity" className="text-white/70 hover:text-secondary transition duration-300">
                  Equity Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#debt" className="text-white/70 hover:text-secondary transition duration-300">
                  Debt Advisory
                </Link>
              </li>
              <li>
                <Link href="/services#strategic" className="text-white/70 hover:text-secondary transition duration-300">
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link href="/services#valuation" className="text-white/70 hover:text-secondary transition duration-300">
                  Valuation Services
                </Link>
              </li>
              <li>
                <Link href="/services#ma" className="text-white/70 hover:text-secondary transition duration-300">
                  M&A Advisory
                </Link>
              </li>
              <li>
                <Link href="/services#financial" className="text-white/70 hover:text-secondary transition duration-300">
                  Financial Modeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-secondary transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-secondary transition duration-300">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="text-white/70 hover:text-secondary transition duration-300">
                  Transactions
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/70 hover:text-secondary transition duration-300">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-secondary transition duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-secondary transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive updates and insights.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-grow rounded-r-none focus:ring-secondary"
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-primary rounded-l-none">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SHC Partners. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-white/70 hover:text-secondary text-sm transition duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-secondary text-sm transition duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/70 hover:text-secondary text-sm transition duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
