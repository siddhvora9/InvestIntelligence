import { motion } from "framer-motion";
import AnimatedGradient from "@/components/ui/animated-gradient";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function About() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-6">About SHC Growth Partners</h1>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-white/90 text-lg mb-8">
                A boutique investment banking firm dedicated to helping businesses grow financially, strategically, and sustainably.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-2">Who We Are</h2>
                <AnimatedGradient className="w-20 mb-6" />
              </div>
              <p className="text-gray-700 mb-6">
                SHC Growth Partners is a boutique investment banking firm dedicated to helping businesses grow- financially, strategically, and sustainably. With our roots in India's dynamic market and a team of seasoned professionals, we guide clients through transformative financial decisions.
              </p>
              <p className="text-gray-700 mb-8">
                From raising capital to navigating complex mergers, we are committed to building long-term value for our clients.
              </p>
              <div className="mb-10">
                <h3 className="font-serif font-semibold text-2xl text-primary mb-4">Our Philosophy</h3>
                <p className="text-gray-700">
                  At SHC Growth Partners, we believe in growth with purpose. We are more than bankers—we are partners in your journey. Our mission is to deliver financial solutions that fuel sustainable growth for India's emerging businesses. Whether you're securing funding, acquiring a competitor, or exploring your valuation, we're here to ensure that every step forward is strategic and successful.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573497491765-55b568cea7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Investment professionals in a meeting" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 rounded-lg overflow-hidden shadow-xl hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern office space" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-secondary/20 w-48 h-48 rounded-full hidden lg:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-3">Our Core Values</h2>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our approach to investment banking
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-xl text-primary mb-3">Integrity</h3>
              <p className="text-gray-600">We earn trust through transparency and ethical conduct in every transaction and relationship.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-xl text-primary mb-3">Partnership</h3>
              <p className="text-gray-600">We treat our clients' goals as our own, working together as true partners in achieving success.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-xl text-primary mb-3">Excellence</h3>
              <p className="text-gray-600">We deliver insightful, accurate, and results-driven advice that meets the highest standards.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-xl text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">We stay ahead of the curve to bring you fresh perspectives and innovative financial solutions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern office building" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-3">Our Approach</h2>
              <AnimatedGradient className="w-20 mb-6" />
              <p className="text-gray-700 mb-6">
                We believe that successful investment banking is about more than just transactions—it's about building relationships and understanding the unique needs of each client.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">In-depth analysis:</span> We thoroughly analyze your business, market, and growth potential
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Tailored strategies:</span> We develop customized solutions that align with your goals
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Strategic execution:</span> We implement with precision and adapt as needed
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Long-term partnership:</span> We continue to provide support beyond the transaction
                    </p>
                  </div>
                </li>
              </ul>

              <p className="text-gray-700 mb-8">
                Our client-centered approach ensures that we deliver not just financial results, but true strategic value that positions your business for long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 navy-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-6">
                Partner With Us for Your Financial Success
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Experience the SHC Growth Partners difference. Let's work together to achieve your financial goals and build lasting value.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark text-primary font-medium shadow-lg">
                <Link href="/contact">
                  <a>Schedule a Consultation</a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
