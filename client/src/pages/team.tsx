import { motion } from "framer-motion";
import AnimatedGradient from "@/components/ui/animated-gradient";
import { Helmet } from 'react-helmet';

export default function Partners() {
  // Animation variants
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const partners = [
    { name: "Astrafin", category: "Finance", logo: "/assets/Astrafin.jpeg" },
    { name: "Finnup", category: "Finance", logo: "/assets/FinnUp.jpeg" },
    { name: "Recur Club", category: "Finance", logo: "/assets/Recur Club.jpeg" },
    { name: "Trove Capital", category: "Investment", logo: "/assets/Trove Capital.jpeg" },
    { name: "Lemon Fund", category: "Investment", logo: "/assets/Lemon Fund.jpeg" },
    { name: "Impactful Pitch", category: "Consulting", logo: "/assets/Impactful Pitch.jpeg" },
    { name: "Vyapaar Network", category: "Network", logo: "/assets/Vyapaar Network.jpeg" },
    { name: "Acme Group", category: "Business", logo: "/assets/Acme Group.jpeg" },
    { name: "Tax Diva Consulting", category: "Consulting", logo: "/assets/Tax Diva Consulting.jpeg" },
    { name: "Vetan Now", category: "HR", logo: "/assets/Vetan Now.jpeg" },
    { name: "Social Symphony", category: "Media", subtext: "Podcast", logo: "/assets/Social Symphony.jpeg" },
    { name: "Kapso", category: "Technology", logo: "/assets/Kapso.jpeg" },
    { name: "Enqube Collaboration", category: "Collaboration", logo: "/assets/Enqube.jpeg" },
    { name: "Fox Mandal", category: "Legal", logo: "/assets/Fox Mandal.jpeg" }
  ];

  return (
    <>
      <div style={{ color: 'red', fontWeight: 'bold' }}>TEST DIV</div>
      <img src="/assets/Astrafin.jpeg" alt="Test Astrafin" style={{ width: 100, border: '2px solid red' }} />
      <Helmet>
        <title>Our Partners | SHC GrowthPartners</title>
        <meta name="description" content="Meet our network of strategic partners who help us deliver comprehensive solutions to our clients." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-6">Our Partners</h1>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-white/90 text-lg mb-8">
                Strategic alliances that strengthen our ecosystem and enhance value for our clients
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section - Modern Glassmorphism Carousel/Grid */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            Our Partners
          </h2>
          <div className="overflow-x-auto">
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-8 min-w-[700px] md:min-w-0">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-64 h-64 md:w-auto md:h-auto bg-white/30 backdrop-blur-md rounded-3xl shadow-lg border border-white/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <div className="w-28 h-28 mb-4 rounded-2xl overflow-hidden bg-white/60 border border-gray-200 shadow group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name + ' logo'}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md rounded-b-3xl px-4 py-3 text-center">
                      <h3 className="font-serif font-semibold text-lg text-primary mb-1 group-hover:text-primary/80 transition-colors duration-300">
                        {partner.name}
                      </h3>
                      {partner.subtext && (
                        <p className="text-secondary text-xs mb-1">{partner.subtext}</p>
                      )}
                      <p className="text-gray-500 text-xs font-medium">{partner.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-3">
                Partnership Benefits
              </h2>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our strategic partnerships create a powerful ecosystem that delivers comprehensive solutions
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="font-serif font-semibold text-xl text-primary mb-3">Comprehensive Solutions</h3>
              <p className="text-gray-600">
                Access to a wide range of services across finance, legal, HR, and technology through our partner network
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="font-serif font-semibold text-xl text-primary mb-3">Expert Knowledge</h3>
              <p className="text-gray-600">
                Leverage specialized expertise from industry leaders in their respective fields
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="font-serif font-semibold text-xl text-primary mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                Coordinated services and solutions that work together seamlessly for optimal results
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
