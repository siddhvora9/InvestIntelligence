import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import AnimatedGradient from "@/components/ui/animated-gradient";

// Mock data - Replace with API calls
const mockDeals = [
  {
    id: 1,
    title: "Series A Funding - Tech Startup",
    company: "InnovateX Solutions",
    amount: "$5M - $8M",
    status: "Active",
    type: "Equity Funding",
    deadline: "2024-04-30",
    progress: 65,
    description: "Seeking Series A funding for AI-powered supply chain optimization platform.",
    highlights: [
      "Revenue growth of 300% YoY",
      "Enterprise clients including Fortune 500 companies",
      "Patent-pending technology",
    ],
  },
  {
    id: 2,
    title: "Debt Financing Round",
    company: "GreenEnergy Corp",
    amount: "$10M",
    status: "Closing Soon",
    type: "Debt Financing",
    deadline: "2024-04-15",
    progress: 85,
    description: "Debt financing round for expansion of solar energy projects.",
    highlights: [
      "Profitable for last 3 years",
      "Government contracts secured",
      "Strong asset backing",
    ],
  },
  {
    id: 3,
    title: "Pre-IPO Investment Round",
    company: "HealthTech Innovations",
    amount: "$15M - $20M",
    status: "New",
    type: "Pre-IPO",
    deadline: "2024-05-30",
    progress: 25,
    description: "Final investment round before planned IPO in healthcare technology sector.",
    highlights: [
      "Market leader in telemedicine",
      "50M+ active users",
      "FDA approval received",
    ],
  },
];

export default function LiveDealsPage() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "closing soon":
        return "bg-yellow-100 text-yellow-800";
      case "new":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case "closing soon":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "new":
        return <AlertCircle className="w-4 h-4 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Live Investment Opportunities
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Explore current deals and investment opportunities across various sectors
              </p>
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search opportunities..."
                    className="w-full pl-10 py-3 text-gray-900"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Opportunities
            </h2>
            <AnimatedGradient className="w-24 mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {deal.title}
                      </h3>
                      <p className="text-gray-600">{deal.company}</p>
                    </div>
                    <span
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        deal.status
                      )}`}
                    >
                      {getStatusIcon(deal.status)}
                      {deal.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{deal.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Investment Range</p>
                      <p className="font-semibold text-gray-900">{deal.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <p className="font-semibold text-gray-900">{deal.type}</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">Funding Progress</span>
                        <span className="font-semibold">{deal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all duration-500"
                          style={{ width: `${deal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="font-semibold text-gray-900">Highlights:</p>
                    {deal.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-primary text-white hover:bg-primary-dark">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Explore Investment Opportunities?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our network of investors and get early access to exclusive deals
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 