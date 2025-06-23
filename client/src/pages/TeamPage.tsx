import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Linkedin, Twitter, MailIcon, Building2, Mic, Network, Scale, Users } from 'lucide-react';
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
  { name: "Optimix Advisors", category: "Investment Banking & Consulting", logo: "/assets/Optimix_Advisors.png", website: "http://optimixadvisors.com/" },
  { name: "Enqube Collaboration", category: "Community Building", logo: "/assets/Enqube.jpeg", website: "https://enqube.in/" },
  { name: "Blueprint Legal", category: "Legal & Compliance", logo: "/assets/Blueprint Legal.jpeg", website: "http://blueprintlegal.org/" },
  { name: "Hobby Tribe", category: "Community Partner", logo: "/assets/Hobby Tribe.jpeg", website: "https://www.thehobbytribe.com/" },
  { name: "Ivy Growth Associates", category: "Investment", logo: "/assets/IVY Growth Associates.jpeg", website: "https://ivygrowth.co.in/" },
  { name: "Kennis Group", category: "IB & Consulting", logo: "/assets/Kennis Growth Limitless.jpeg", bg: "black", website: "https://www.kennis.in/" },
  { name: "Growth Cap Ventures", category: "Investment", logo: "/assets/GrowthCap VC.jpeg", bg: "black", website: "https://growthcap.vc/" },
  { name: "The Builder Club", category: "Community Partner", logo: "/assets/The Builders Club.jpeg", website: "https://thebuildersclub.me/" },
  { name: "Startupnews.fyi", category: "Media Partner", logo: "/assets/Startup FYI.jpeg", website: "https://startupnews.fyi/" },
];

const leadershipTeam = [
  {
    image: '/assets/Sudip_Mondal.jpeg',
    name: 'Sudip Mondal',
    position: 'Founder',
    bio: '*Sudip Mondal* is the Founder of *SHC Growth Partners* and *Startupholic Catalyst, a seasoned investment banker and fintech specialist with over a decade of experience in lending, credit risk, and startup ecosystems. An alumnus of **St. Xavier\'s College, Kolkata, and a management graduate with advanced credentials from **IIM Kozhikode*, he also serves as a visiting faculty at leading MBA institutes, bringing practical finance and entrepreneurship insights into the classroom. Sudip is a passionate community builder, mentor to early-stage startups, and host of engaging podcasts focused on innovation, capital, and ecosystem growth. His work bridges finance, education, and impact-driven entrepreneurship with a sharp focus on empowering founders and enabling sustainable growth.',
    linkedin: '#',
    twitter: '#',
    email: 'sudip@shcpartners.com'
  }
];

const seniorTeam = [
  {
    image: '/assets/Dr Narendra Mairpady.jpeg',
    name: 'Dr. Narendra M. Maripady',
    position: 'Head of Advisors',
    subtitle: 'Former Chairman & Managing Director, Indian Overseas Bank',
    bio: 'Dr. Narendra M. Maripady is a seasoned banking professional with over four decades of distinguished leadership in the Indian financial sector. As the former Chairman & Managing Director of Indian Overseas Bank, he was instrumental in steering the bank through critical phases of growth, transformation, and regulatory alignment. His leadership focused on financial inclusion, institutional strengthening, and operational efficiency. Beyond his stellar banking career, Dr. Maripady serves as an Independent Director and Board Advisor to several leading corporations, where he brings deep expertise in governance, risk management, and financial strategy. His board associations include Man Industries (India) Ltd., Ipca Laboratories Ltd., Kesar Enterprises Ltd., and Equippp Social Impact Technologies Ltd. Known for his ethical governance and strategic foresight, Dr. Maripady continues to play a vital role in shaping the future of Indian enterprise through boardroom leadership and advisory excellence.',
    linkedin: '#',
    twitter: '#',
    email: 'narendra@shcpartners.com'
  },
  {
    image: '/assets/CA Parimal Seth.jpeg',
    name: 'CA Parimal Sheth',
    position: 'Senior Advisor',
    subtitle: 'Investment Banker & Strategic Management Advisor',
    quote: 'A true Entrepreneur is a go-getter and not a fantast……set your goals, have conviction in your business model and the best will follow you.',
    bio: 'Mr. Parimal Sheth is a Chartered Accountant & an Investment Banker with more than 30 years of experience in Corporate Finance & Investment Banking having executed many mid & large ticket transactions in Private Equity, VC funding & Debt across sectors. He also have extensive knowledge in International Finance and Cross Border M&A having spearheaded many M&A transactions of various corporate across sectors. He is well-networked with large number of Corporates, Institutional Funds, PE\'s, VC\'s & Family offices on a pan-India level having created a strong eco-system of providing various Financial & Investment Banking services to them. He also assists corporates in making them IPO ready and list them on SME or Main Board platforms. He also mentors & invests in Startups and SME companies and provides Management and Strategic Inputs to Start-ups and Mid-sized corporates including arranging growth capital for them. Has been part of many start-up forums and Angel Networks. Being a seasoned professional, Parimal brings with him excellent networking skills best suited to the financial services sector. He was titled as one of the "100 Top Most Influential BFSI Leaders" for past 3 years by ET Now and the World BFSI Congress. He has also been awarded the "Most Talented Marketing Professional in the Financial Services Sector" by World Marketing Congress & CMO Asia. He has been a regular participant at various business forums viz; CII, ASSOCHAM, FICCI, IMC, JITO, IACC, JCAF, Gitanjali Express, etc. He has also been associated with premier Education colleges such as Durga Devi Saraf Institute of Management Studies, NMIMS, MET in Mumbai. An avid learner, Parimal is also a speaker at various platforms, Business Forums and Educational Institutes.',
    linkedin: '#',
    twitter: '#',
    email: 'parimal@shcpartners.com'
  },
  {
    image: '/assets/CA_Dr_Das_Shyamsundar.jpeg',
    name: 'CA Dr. Das Shyamsundar',
    position: 'Senior Advisor',
    bio: 'Chartered Accountant, Registered Valuer, Social Auditor, Forensic Auditor, PhD (Economics), M Phil (Economics), MBA (Finance), MA (Economics), MA (Criminal Laws & Forensic Science) DISA (IIBF), FAFD (ICAI), IBBI RV - SFA. Has a diverse educational background in finance, economics and business management, having attained a Chartered Accountant qualification, a PhD in economics, an MBA in finance and an MPhil in economics. Moreover, he holds certifications in DISA and Insolvency and Bankruptcy Board of India (IBBI) Registered Valuer (SFA). He has gained extensive experience in academia, research and consulting in the areas of finance, accounting, economics and management. Currently, he holds the position of Director at MET Institute of PGDM, which ranks 4th among the top private institutes in Mumbai.',
    linkedin: '#',
    twitter: '#',
    email: 'dasshyamsundar@shcpartners.com'
  },
  {
    image: '/assets/Balakrishnan_Iyer.jpeg',
    name: 'Balakrishnan Iyer',
    position: 'Senior Advisor',
    bio: 'A Company Secretary with over 15 years of experience in the area of Investment Banking Fund Raising – Through Public Issues and Private Equity, Debt Syndication & Documentation for Debt Raising, Corporate Advisory, M&A, Open Offers and Buybacks, Joint Ventures, setting up AIFs- Domestic and Gift City. In addition to the above, also been quite active in Corporate Law and SEBI Related Due Diligences and have been a part of Valuation exercises for over 800 Companies across various sectors and geographies. With respect to Debt Syndication, have been part of transactions of raising debt of over 1000 Crores.',
    linkedin: '#',
    twitter: '#',
    email: 'balakrishnan@shcpartners.com'
  },
  {
    image: '/assets/Winston_Pinto.jpeg',
    name: 'Winston Pinto',
    position: 'Senior Advisor',
    bio: 'Brings over 14 years of experience across the Indian market. Known for his belief in value creation and transformative change, he has consistently driven business growth across sectors. His approach blends agility, customer-centricity, and sharp business problem-solving to deliver scalable outcomes often through innovative leasing, debt, and B2B financing structures. With a strong foundation in business and leadership from IIMA, Winston focuses on collaboration and long-term impact. He is widely regarded as a trusted advisor and thought leader in India\'s evolving financial landscape.',
    linkedin: '#',
    twitter: '#',
    email: 'winston@shcpartners.com'
  }
];

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | SHC Growth Partners</title>
        <meta name="description" content="Meet our experienced team of investment banking professionals dedicated to your business success." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl mb-6 text-shadow">Our Team</h1>
            <p className="text-white/90 text-lg md:text-xl">
              Meet the experienced professionals dedicated to your success. Our diverse team brings together expertise from across the financial industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Partners</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Strategic alliances that strengthen our ecosystem and enhance value for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
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
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Collective Expertise</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700">
              At SHC Growth Partners, our team is our greatest asset. With backgrounds spanning global financial institutions, startups, and industry-specific expertise, we bring together diverse perspectives united by a common purpose: your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <motion.div 
              variants={fadeIn('up', 'spring', 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Trusted Experience</h3>
              <p className="text-gray-700">
                Our team brings over 75 years of combined experience across investment banking, corporate finance, and industry-specific expertise.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'spring', 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Execution Excellence</h3>
              <p className="text-gray-700">
                We've successfully executed over 100 transactions with a combined value exceeding ₹2000 crores across various sectors.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'spring', 0.3, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-primary mb-3">Client-First Approach</h3>
              <p className="text-gray-700">
                We maintain a boutique approach where senior team members are directly involved in every client engagement, ensuring personalized attention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Leadership Team</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in finance, strategy, and industry expertise to guide our clients toward success.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                    className="w-full h-72 object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <a href={member.linkedin} className="text-white hover:text-secondary transition duration-300">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href={member.twitter} className="text-white hover:text-secondary transition duration-300">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-white hover:text-secondary transition duration-300">
                        <MailIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-xl text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Senior Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Senior Team</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our senior specialists bring deep domain expertise across various financial disciplines, ensuring comprehensive solutions for our clients.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {seniorTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <a href={member.linkedin} className="text-white hover:text-secondary transition duration-300">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href={member.twitter} className="text-white hover:text-secondary transition duration-300">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-white hover:text-secondary transition duration-300">
                        <MailIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-xl text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.position}</p>
                  {member.subtitle && (
                    <p className="text-gray-600 font-medium mb-3 italic text-sm">{member.subtitle}</p>
                  )}
                  {member.quote && (
                    <div className="bg-secondary/10 border-l-4 border-secondary p-3 mb-3 rounded-r-lg">
                      <p className="text-gray-700 italic text-xs">"{member.quote}"</p>
                    </div>
                  )}
                  <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
