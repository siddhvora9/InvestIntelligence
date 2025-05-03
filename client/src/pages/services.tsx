import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedGradient from "@/components/ui/animated-gradient";
import { serviceData } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Services() {
  const [location] = useLocation();
  
  // Get hash from URL to activate corresponding tab
  const hash = typeof window !== 'undefined' 
    ? window.location.hash.replace('#', '') 
    : '';
  
  const defaultTab = hash && serviceData.some(s => s.id === hash) 
    ? hash 
    : serviceData[0]?.id || 'equity';
  
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    // Update URL hash without scrolling
    const scrollPosition = window.pageYOffset;
    window.location.hash = value;
    window.scrollTo(window.scrollX, scrollPosition);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-6">Our Services</h1>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-white/90 text-lg mb-8">
                Comprehensive financial solutions tailored to help your business achieve its growth objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={defaultTab} value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceData.map((service) => (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white px-8 py-3"
                  >
                    {service.shortTitle || service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceData.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-10"
                >
                  {/* Service Details - 3 columns */}
                  <div className="lg:col-span-3">
                    <h2 className="font-serif font-bold text-3xl text-primary mb-4">{service.title}</h2>
                    <AnimatedGradient className="w-20 mb-6" />
                    <p className="text-gray-700 text-lg mb-8">{service.fullDescription || service.description}</p>

                    <h3 className="font-serif font-semibold text-xl text-primary mb-4">Our Approach</h3>
                    <p className="text-gray-700 mb-6">{service.approach}</p>

                    <h3 className="font-serif font-semibold text-xl text-primary mb-4">Key Services</h3>
                    <ul className="space-y-4 mb-8">
                      {service.keyServices.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 mr-3 mt-1">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              <span className="font-semibold">{item.title}: </span>
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="bg-primary hover:bg-primary-light text-white">
                      <Link href="/contact">
                        <a>Discuss Your Requirements</a>
                      </Link>
                    </Button>
                  </div>

                  {/* Service Image and Benefits - 2 columns */}
                  <div className="lg:col-span-2">
                    <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h3 className="font-serif font-semibold text-xl text-primary mb-4">Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 mr-3 mt-1">
                              <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-gray-700">{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-3">
                Success Stories
              </h2>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how our services have helped businesses achieve their goals
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-xl text-primary">TechNova Growth</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We helped TechNova secure a ₹12 crore Series A funding round, enabling them to expand their product line and enter new markets.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Equity Solutions</span>
                <span>6 months</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-xl text-primary">Metro Logistics</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Structured a ₹25 crore debt package for Metro Logistics, allowing them to modernize their fleet without diluting ownership.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Debt Advisory</span>
                <span>4 months</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-xl text-primary">HealthCare Plus</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Advised HealthCare Plus on their strategic acquisition of a complementary healthcare provider, increasing market share by 35%.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>M&A Advisory</span>
                <span>9 months</span>
              </div>
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
                Ready to Take Your Business to the Next Level?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Our expert team is ready to discuss your financial needs and develop a tailored solution for your business.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark text-primary font-medium shadow-lg">
                <Link href="/contact">
                  <a>Get Started Today</a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
