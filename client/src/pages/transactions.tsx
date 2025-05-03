import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedGradient from "@/components/ui/animated-gradient";
import { transactionData } from "@/data/transactions";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Get unique industries from transaction data
const industries = [...new Set(transactionData.map(t => t.industry))];
// Get unique transaction types
const transactionTypes = [...new Set(transactionData.map(t => t.type))];

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 6;

  // Filter transactions based on search and filters
  const filteredTransactions = transactionData.filter(transaction => {
    const matchesSearch = transaction.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "" || transaction.industry === selectedIndustry;
    const matchesType = selectedType === "" || transaction.type === selectedType;
    
    return matchesSearch && matchesIndustry && matchesType;
  });

  // Calculate pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  // Change page
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-6">
                Our Transactions
              </h1>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-white/90 text-lg mb-8">
                Explore our track record of successful deals across various sectors
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page on search
                  }}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              <Select 
                value={selectedIndustry}
                onValueChange={(value) => {
                  setSelectedIndustry(value);
                  setCurrentPage(1); // Reset to first page on filter change
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Industries</SelectItem>
                  {industries.map((industry, index) => (
                    <SelectItem key={index} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={selectedType}
                onValueChange={(value) => {
                  setSelectedType(value);
                  setCurrentPage(1); // Reset to first page on filter change
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by transaction type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  {transactionTypes.map((type, index) => (
                    <SelectItem key={index} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Transaction Results */}
          {currentTransactions.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerAnimation}
              initial="hidden"
              animate="show"
              key={`page-${currentPage}-industry-${selectedIndustry}-type-${selectedType}-search-${searchTerm}`}
            >
              {currentTransactions.map((transaction, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                  variants={itemAnimation}
                >
                  <div className="h-48 bg-gray-50 relative overflow-hidden">
                    <img 
                      src={transaction.image} 
                      alt={transaction.company} 
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No transactions found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedIndustry("");
                  setSelectedType("");
                  setCurrentPage(1);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredTransactions.length > transactionsPerPage && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft size={16} />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => paginate(i + 1)}
                  className={`h-8 w-8 p-0 ${currentPage === i + 1 ? 'bg-primary text-white' : ''}`}
                >
                  {i + 1}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Transaction Highlights */}
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
                Transaction Highlights
              </h2>
              <AnimatedGradient className="w-24 mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key achievements from our most impactful deals
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary"
            >
              <div className="text-4xl font-serif font-bold text-primary mb-3">₹250Cr+</div>
              <h3 className="text-lg font-semibold mb-4">Equity Capital Raised</h3>
              <p className="text-gray-600">We've helped our clients raise over ₹250 crores in equity capital across various growth stages.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary"
            >
              <div className="text-4xl font-serif font-bold text-primary mb-3">15+</div>
              <h3 className="text-lg font-semibold mb-4">Successful M&A Deals</h3>
              <p className="text-gray-600">We've advised on over 15 successful mergers and acquisitions across multiple sectors.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary"
            >
              <div className="text-4xl font-serif font-bold text-primary mb-3">₹500Cr+</div>
              <h3 className="text-lg font-semibold mb-4">Debt Financing Arranged</h3>
              <p className="text-gray-600">We've structured and arranged over ₹500 crores in debt financing for our clients.</p>
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
                Ready to Discuss Your Transaction?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Our team has the expertise to guide you through your next financial milestone. Let's start the conversation today.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark text-primary font-medium shadow-lg">
                <Link href="/contact">
                  <a>Contact Our Team</a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
