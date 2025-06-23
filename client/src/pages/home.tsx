import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import AnimatedGradient from "@/components/ui/animated-gradient";
import { DollarSign, BarChart3, PieChart } from "lucide-react";
import { transactionData } from "@/data/transactions";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import PartnersSection from "@/components/home/TeamSection";

export default function Home() {
  // Container animation
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Item animation
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary min-h-screen flex items-center">
        {/* Background overlay gradient */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-shadow">
              Empowering Businesses to Grow, Scale, and Succeed
            </h1>
            <p className="text-white/90 font-sans text-lg md:text-xl mb-8 max-w-2xl">
              SHC Growth Partners delivers strategic investment banking solutions, designed for India's ambitious startups and growing enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark text-primary font-medium shadow-lg">
                <Link href="/services">
                  <a>Explore Our Services</a>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent hover:bg-white/10 text-white border-white">
                <Link href="/contact">
                  <a>Get in Touch</a>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 navy-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3">
                What Sets Us Apart
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our distinctive approach to investment banking
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-secondary mb-4">
                <DollarSign size={48} />
              </div>
              <h3 className="font-serif font-semibold text-xl text-white mb-3">
                Deep Industry Experience
              </h3>
              <p className="text-white/80">
                Our team brings decades of frontline deal-making and transaction experience, providing you with insights that go beyond textbook solutions.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-secondary mb-4">
                <BarChart3 size={48} />
              </div>
              <h3 className="font-serif font-semibold text-xl text-white mb-3">
                Extensive Network
              </h3>
              <p className="text-white/80">
                Tap into our relationships with investors, financial institutions, and corporate leaders to unlock opportunities that others might miss.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-secondary mb-4">
                <PieChart size={48} />
              </div>
              <h3 className="font-serif font-semibold text-xl text-white mb-3">
                Tailored Approach
              </h3>
              <p className="text-white/80">
                Every solution we offer is shaped around your unique business challenges and goals, not forced into a one-size-fits-all template.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Recent Transactions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-3">
                Recent Transactions
              </h2>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our track record of successful deals across various sectors
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {transactionData.slice(0, 3).map((transaction, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                variants={itemAnimation}
              >
                <div className="h-48 bg-gray-50 relative overflow-hidden">
                  <div className="w-full h-full">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={transaction.image} 
                        alt={transaction.company} 
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white py-2 px-4">
                    <span className="text-sm font-medium">{transaction.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-serif font-semibold text-lg text-primary">
                      {transaction.company}
                    </h3>
                    <span className="text-secondary font-medium">{transaction.amount}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{transaction.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{transaction.industry}</span>
                    <span className="text-sm text-gray-500">{transaction.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary-light text-white">
              <Link href="/transactions">
                <a>View All Transactions</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-6">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Schedule a consultation with our expert team today and discover how SHC Growth Partners can help your business achieve its financial goals.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark text-primary font-medium shadow-lg">
                <Link href="/contact">
                  <a>Contact Us Now</a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
