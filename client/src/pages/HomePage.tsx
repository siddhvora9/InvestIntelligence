import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import ServicesSection from "@/components/home/ServicesSection";
import ClientTypes from "@/components/home/ClientTypes";
import Differentiators from "@/components/home/Differentiators";
import RecentTransactions from "@/components/home/RecentTransactions";
import TeamSection from "@/components/home/TeamSection";
import ContactSection from "@/components/home/ContactSection";
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>SHC Partners | Investment Banking Solutions</title>
        <meta name="description" content="SHC Partners delivers strategic investment banking solutions, designed for India's ambitious startups and growing enterprises." />
      </Helmet>
      <Hero />
      <WhoWeAre />
      <ServicesSection />
      <ClientTypes />
      <Differentiators />
      <RecentTransactions />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
