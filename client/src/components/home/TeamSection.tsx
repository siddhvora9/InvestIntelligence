import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Building2, Mic, Network, Scale, Users } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const partners = [
  { name: "Astrafin", category: "Lending & Asset Leasing", logo: "/assets/Astrafin.jpeg", website: "https://astrafin.org/" },
  { name: "FinnUp", category: "Lending & Debt Marketplace", logo: "/assets/FinnUp.jpeg", website: "https://finnup.in/" },
  { name: "Recur Club", category: "Lending", logo: "/assets/Recur.jpeg", bg: "black", website: "https://www.recurclub.com/" },
  { name: "Trove Capital", category: "NBFC & Account Aggregator (AA) Consulting", logo: "/assets/Trove Capital.jpeg", website: "https://www.trovecapital.in/" },
  { name: "Lemon Fund", category: "Investment", logo: "/assets/Lemon Fundz.jpeg", bg: "black", website: "" },
  { name: "Impactful Pitch", category: "Consulting & Investment Banking", logo: "/assets/Impactful Pitch.jpg", website: "https://www.impactfulpitch.com/" },
  { name: "Vyapaar Network", category: "Business & Marketing", logo: "/assets/Vyapaar Network.jpeg", website: "https://vyapaar.net/" },
  { name: "Acme Group", category: "Venture Capital & Private Equity", logo: "/assets/Acme Group.jpeg", website: "https://acmegroup.co.in/" },
  { name: "Tax Diva Consulting", category: "Consulting & Auditing", logo: "/assets/TaxDiva.jpeg", website: "https://www.taxdiva.co.in/" },
  { name: "Vetan Now", category: "Fintech & Lending", logo: "/assets/VetanNow.jpeg", website: "" },
  { name: "Social Symphony", category: "Podcast & Media", logo: "/assets/Social Symphony.jpeg", subtext: "Podcast", website: "https://www.soccialsymphony.com/" },
  { name: "Optimix Advisors", category: "Investment Banking & Consulting", logo: "/assets/placeholder.png", website: "http://optimixadvisors.com/" },
  { name: "Enqube Collaboration", category: "Community Building", logo: "/assets/Enqube.jpeg", website: "https://enqube.in/" },
  { name: "Blueprint Legal", category: "Legal & Compliance", logo: "/assets/Blueprint Legal.jpeg", website: "http://blueprintlegal.org/" },
  { name: "Hobby Tribe", category: "Community Partner", logo: "/assets/Hobby Tribe.jpeg", website: "https://www.thehobbytribe.com/" },
  { name: "Ivy Growth Associates", category: "Investment", logo: "/assets/IVY Growth Associates.jpeg", website: "https://ivygrowth.co.in/" },
  { name: "Kennis Group", category: "IB & Consulting", logo: "/assets/Kennis Growth Limitless.jpeg", bg: "black", website: "https://www.kennis.in/" },
  { name: "Growth Cap Ventures", category: "Investment", logo: "/assets/GrowthCap VC.jpeg", bg: "black", website: "https://growthcap.vc/" },
  { name: "The Builder Club", category: "Community Partner", logo: "/assets/The Builders Club.jpeg", website: "https://thebuildersclub.me/" },
  { name: "Startupnews.fyi", category: "Media Partner", logo: "/assets/Startup FYI.jpeg", website: "https://startupnews.fyi/" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-primary/10 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Partners</h2>
          <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">Strategic alliances that strengthen our ecosystem and enhance value for our clients</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.slice(0, 8).map((partner, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              onClick={() => window.open(partner.website, '_blank')}
            >
              <div className={`w-24 h-24 mb-4 flex items-center justify-center rounded-full overflow-hidden border border-gray-200 transition-colors duration-300 ${partner.bg === 'black' ? 'bg-black' : 'bg-gray-50'}`}> 
                <img
                  src={partner.logo}
                  alt={partner.name + ' logo'}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <h3 className="font-playfair font-semibold text-lg text-primary text-center mb-1 group-hover:text-primary/80 transition-colors duration-300">
                  {partner.name}
                </h3>
                {partner.subtext && (
                  <p className="text-secondary text-center text-xs mb-1">{partner.subtext}</p>
                )}
                <p className="text-gray-500 text-center text-xs font-medium">{partner.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-medium"
            size="lg"
          >
            <Link href="/team">View All Partners</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
