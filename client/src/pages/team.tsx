import { motion } from "framer-motion";
import AnimatedGradient from "@/components/ui/animated-gradient";
import { teamData } from "@/data/team";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Team() {
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

  return (
    <>
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
              <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-6">Our Team</h1>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-white/90 text-lg mb-8">
                Meet our team of experienced professionals dedicated to your financial success
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-3">
                Leadership Team
              </h2>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our leadership brings decades of combined experience in investment banking, finance, and strategic advisory
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {teamData.filter(member => member.isLeadership).map((member, index) => (
              <motion.div 
                key={index}
                className="team-card bg-white rounded-lg shadow-lg overflow-hidden group"
                variants={itemAnimation}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="team-card-overlay">
                    <div className="flex space-x-4">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition duration-300">
                          <Linkedin size={24} />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition duration-300">
                          <Twitter size={24} />
                        </a>
                      )}
                      {member.facebook && (
                        <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition duration-300">
                          <Facebook size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif font-semibold text-xl text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
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
                Advisory Team
              </h2>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our advisory team brings specialized expertise across various sectors and financial disciplines
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {teamData.filter(member => !member.isLeadership).map((member, index) => (
              <motion.div 
                key={index}
                className="team-card bg-white rounded-lg shadow-md overflow-hidden group"
                variants={itemAnimation}
              >
                <div className="flex items-center p-6">
                  <div className="relative w-20 h-20 flex-shrink-0 mr-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-primary mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium mb-2 text-sm">{member.title}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                    <div className="flex space-x-3 mt-3">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary transition duration-300">
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary transition duration-300">
                          <Twitter size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-3">
                Join Our Team
              </h2>
              <AnimatedGradient className="w-20 mb-6" />
              <p className="text-gray-700 mb-6">
                At SHC Partners, we're always looking for talented professionals who are passionate about finance, investment banking, and helping businesses grow. We offer a collaborative culture where innovation is encouraged and excellence is rewarded.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-serif font-semibold text-xl text-primary mb-2">
                    Why Work With Us
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-gray-700">Challenging work with high-profile clients</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-gray-700">Opportunities for rapid professional growth</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-gray-700">Competitive compensation and benefits</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-gray-700">Collaborative and inclusive work environment</p>
                    </li>
                  </ul>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary-light text-white">
                <Link href="/careers">
                  <a>View Current Openings</a>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
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
                Work With Our Expert Team
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Let our experienced professionals guide your business through its next financial milestone.
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
