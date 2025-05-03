import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

const transactions = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Series B Funding',
    company: 'TechInnovate Solutions',
    amount: '$12.5M',
    description: 'Led Series B round for an AI-powered SaaS platform, enabling international expansion and product development.',
    industry: 'AI & SaaS',
    date: 'March 2023'
  },
  {
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'M&A Advisory',
    company: 'GreenMobility Acquisition',
    amount: '$35M',
    description: 'Advised on the strategic acquisition of an electric vehicle infrastructure company by a market leader.',
    industry: 'Clean Energy',
    date: 'November 2022'
  },
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Debt Syndication',
    company: 'Metro Hospitality Group',
    amount: '$18M',
    description: 'Structured a debt package for a premium hospitality chain to fund expansion across three major cities.',
    industry: 'Hospitality',
    date: 'January 2023'
  }
];

const RecentTransactions = () => {
  return (
    <section id="transactions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Recent Transactions</h2>
          <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Our track record of successful deals across various sectors</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {transactions.map((transaction, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 bg-gray-50 relative overflow-hidden">
                <img 
                  src={transaction.image} 
                  alt={transaction.company} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white py-2 px-4">
                  <span className="text-sm font-medium">{transaction.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-playfair font-semibold text-lg text-primary">{transaction.company}</h3>
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
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-medium"
            size="lg"
          >
            <Link href="/transactions">View All Transactions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentTransactions;
