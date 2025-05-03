// Service categories
export const SERVICES = {
  EQUITY: "equity",
  DEBT: "debt",
  STRATEGIC: "strategic",
  VALUATION: "valuation",
};

// Navigation
export const NAV_ITEMS = [
  { name: "Services", path: "/services", hash: "#services" },
  { name: "About Us", path: "/about", hash: "#about" },
  { name: "Team", path: "/team", hash: "#team" },
  { name: "Transactions", path: "/transactions", hash: "#transactions" },
  { name: "News & Insights", path: "/news", hash: "#news" },
  { name: "Contact Us", path: "/contact", hash: "#contact", isButton: true },
];

// Address Info
export const COMPANY_INFO = {
  name: "SHC Partners",
  address: "42 Corporate Avenue, Bandra Kurla Complex",
  city: "Mumbai 400051",
  country: "India",
  phone: "+91 22 4890 2200",
  mobile: "+91 98765 43210",
  email: {
    info: "info@shcpartners.com",
    deals: "deals@shcpartners.com",
  },
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

// Service descriptions
export const SERVICE_DETAILS = [
  {
    id: SERVICES.EQUITY,
    title: "Equity Solutions",
    description: "Raise capital that matches your stage and strategy.",
    features: [
      "Growth Equity: Attract institutional investors to scale operations",
      "Early-Stage Funding: Structure angel/VC rounds for startups",
      "Investor Positioning: Develop pitch decks and financial models that resonate",
      "Equity Structuring: Advise on ownership and governance frameworks",
    ],
  },
  {
    id: SERVICES.DEBT,
    title: "Debt Advisory",
    description: "Leverage capital without diluting ownership.",
    features: [
      "Loan Syndication & NBFC Tie-ups: Tap into our network for structured deals",
      "Co-lending & FLDG arrangement",
      "Term Loans / Project Finance: Long-term financing for major initiatives",
      "Working Capital Financing",
      "Venture Debt – Govt Grant & CGTMSE",
      "Export/Import Financing",
    ],
  },
  {
    id: SERVICES.STRATEGIC,
    title: "Strategic Advisory",
    description: "Go beyond numbers with high-level strategic input.",
    features: [
      "M&A Advisory: From target search to post-deal integration",
      "Financial Due Diligence: For investors or acquirers",
      "GTM Strategy & B2B Strategic Collaboration",
      "IPO Services & Pre IPO Funding",
      "NBFC Buying & selling & RBI Listing",
      "Domestic AIFs & Gift city AIFs formation",
    ],
  },
  {
    id: SERVICES.VALUATION,
    title: "Valuation",
    description: "Comprehensive valuation for all your assets.",
    features: [
      "Business Valuation",
      "Valuation of Brands, Intangible Assets & Intellectual Property",
      "Valuation of Financial Securities, Instruments & Derivatives",
      "Valuation of Industrial Assets, Plant & Machinery",
      "Valuation of Real Estate",
      "Valuation of Infrastructure Assets & Specialized Assets",
    ],
  },
];

// Core values
export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "We earn trust through transparency and ethical conduct",
  },
  {
    title: "Partnership",
    description: "We treat our clients' goals as our own",
  },
  {
    title: "Excellence",
    description: "We deliver insightful, accurate, and results-driven advice",
  },
  {
    title: "Innovation",
    description: "We stay ahead of the curve to bring you fresh perspectives",
  },
];

// Client types
export const CLIENT_TYPES = [
  {
    title: "Early-Stage Startups",
    description: "Guiding innovative ventures from concept to market leadership",
  },
  {
    title: "Family-Run Businesses",
    description: "Balancing tradition with growth strategies for legacy enterprises",
  },
  {
    title: "PE-backed Companies",
    description: "Maximizing value and preparing for next-stage growth or exit",
  },
  {
    title: "Sector-Focused Mid-Cap Firms",
    description: "Strategic solutions for established domain leaders",
  },
];
