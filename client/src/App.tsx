import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import TeamPage from "@/pages/TeamPage";
import TransactionsPage from "@/pages/TransactionsPage";
import ContactPage from "@/pages/ContactPage";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import BlogManagement from "@/pages/admin/blog";
import LiveDealsPage from "@/pages/LiveDealsPage";
import LiveDealsManagement from "@/pages/admin/live-deals";
import DealForm from "@/pages/admin/deal-form";
import PrivacyPolicy from "@/pages/privacy-policy";
import { useEffect } from "react";

// Improved ScrollToTop component
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [location]); // Re-run when location changes

  return null;
}

function Router() {
  const [location] = useLocation();
  
  // Check if current route is an admin route
  const isAdminRoute = location.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/transactions" component={TransactionsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/deals" component={LiveDealsPage} />
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/admin/blog" component={BlogManagement} />
          <Route path="/admin/deals" component={LiveDealsManagement} />
          <Route path="/admin/deals/new" component={DealForm} />
          <Route path="/admin/deals/edit/:id" component={DealForm} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
