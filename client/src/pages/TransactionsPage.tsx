import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeIn, staggerContainer } from '@/lib/animations';

// Transaction data
const allTransactions = [
  {
    category: 'equity',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Series B Funding',
    company: 'TechInnovate Solutions',
    amount: '$12.5M',
    description: 'Led Series B round for an AI-powered SaaS platform, enabling international expansion and product development.',
    industry: 'AI & SaaS',
    date: 'March 2023'
  },
  {
    category: 'ma',
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'M&A Advisory',
    company: 'GreenMobility Acquisition',
    amount: '$35M',
    description: 'Advised on the strategic acquisition of an electric vehicle infrastructure company by a market leader.',
    industry: 'Clean Energy',
    date: 'November 2022'
  },
  {
    category: 'debt',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Debt Syndication',
    company: 'Metro Hospitality Group',
    amount: '$18M',
    description: 'Structured a debt package for a premium hospitality chain to fund expansion across three major cities.',
    industry: 'Hospitality',
    date: 'January 2023'
  },
  {
    category: 'equity',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Pre-Series A',
    company: 'HealthTech Innovations',
    amount: '$4.5M',
    description: 'Secured funding for a healthcare technology startup focused on remote patient monitoring solutions.',
    industry: 'Healthcare',
    date: 'May 2023'
  },
  {
    category: 'debt',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Working Capital Financing',
    company: 'Logistics Pro',
    amount: '$7.2M',
    description: 'Arranged working capital financing for a rapidly growing logistics company to support fleet expansion.',
    industry: 'Logistics',
    date: 'April 2023'
  },
  {
    category: 'ma',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Cross-Border Acquisition',
    company: 'EduTech Global',
    amount: '$28M',
    description: 'Facilitated the acquisition of a European online education platform by an Indian education technology leader.',
    industry: 'Education',
    date: 'February 2023'
  },
  {
    category: 'equity',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Growth Equity',
    company: 'AgriTech Solutions',
    amount: '$15M',
    description: 'Raised growth capital for an agricultural technology company revolutionizing farm management systems.',
    industry: 'Agriculture',
    date: 'June 2023'
  },
  {
    category: 'valuation',
    image: 'https://images.unsplash.com/photo-1520695625556-c2a7bcd4f8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Business Valuation',
    company: 'Manufacturing Excellence',
    amount: 'Confidential',
    description: 'Conducted comprehensive business valuation for a family-owned manufacturing business preparing for succession planning.',
    industry: 'Manufacturing',
    date: 'July 2023'
  }
];

const TransactionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Recent Transactions | SHC Partners</title>
        <meta name="description" content="Explore our portfolio of successful transactions across various industries. From equity funding to strategic acquisitions, view our track record." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
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
            <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl mb-6 text-shadow">Recent Transactions</h1>
            <p className="text-white/90 text-lg md:text-xl">
              Explore our portfolio of successful deals across various industries and transaction types, showcasing our expertise and track record.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Our Track Record</h2>
            <div className="w-24 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Browse through our successful transactions across various industries. Each deal represents our commitment to delivering exceptional results for our clients.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-10">
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="equity">Equity</TabsTrigger>
              <TabsTrigger value="debt">Debt</TabsTrigger>
              <TabsTrigger value="ma">M&A</TabsTrigger>
              <TabsTrigger value="valuation">Valuation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <TransactionGrid transactions={allTransactions} />
            </TabsContent>
            
            <TabsContent value="equity">
              <TransactionGrid transactions={allTransactions.filter(t => t.category === 'equity')} />
            </TabsContent>
            
            <TabsContent value="debt">
              <TransactionGrid transactions={allTransactions.filter(t => t.category === 'debt')} />
            </TabsContent>
            
            <TabsContent value="ma">
              <TransactionGrid transactions={allTransactions.filter(t => t.category === 'ma')} />
            </TabsContent>
            
            <TabsContent value="valuation">
              <TransactionGrid transactions={allTransactions.filter(t => t.category === 'valuation')} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            <motion.div 
              variants={fadeIn('up', 'spring', 0.1, 0.6)}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-secondary font-bold text-4xl mb-2">₹2000+</h3>
              <p className="text-primary font-playfair font-semibold text-xl mb-2">Crores</p>
              <p className="text-gray-600">Total transaction value facilitated</p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'spring', 0.2, 0.6)}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-secondary font-bold text-4xl mb-2">100+</h3>
              <p className="text-primary font-playfair font-semibold text-xl mb-2">Transactions</p>
              <p className="text-gray-600">Successfully completed deals</p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'spring', 0.3, 0.6)}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-secondary font-bold text-4xl mb-2">15+</h3>
              <p className="text-primary font-playfair font-semibold text-xl mb-2">Industries</p>
              <p className="text-gray-600">Sectors across our portfolio</p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'spring', 0.4, 0.6)}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-secondary font-bold text-4xl mb-2">92%</h3>
              <p className="text-primary font-playfair font-semibold text-xl mb-2">Retention</p>
              <p className="text-gray-600">Client retention rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const TransactionGrid = ({ transactions }) => {
  return (
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
              <span className="text-sm font-medium">{transaction.type}</span>
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
  );
};

export default TransactionsPage;
