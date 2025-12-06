import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComingSoonPage from './pages/ComingSoonPage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DataSecurityPage from './pages/DataSecurityPage';
import ContactPage from './pages/ContactPage';
import { Analytics } from './utils/analytics';

const App: React.FC = () => {
  const [page, setPage] = useState<string>('home');

  // Initialize Analytics on mount
  useEffect(() => {
    Analytics.init();
  }, []);

  // Handle Routing and Page View Tracking
  useEffect(() => {
    const handleHashChange = () => {
      // Remove '#' and get the path
      const hash = window.location.hash.slice(1);
      const currentPage = hash || 'home';
      setPage(currentPage);
    };

    // Initialize state based on current hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track page views whenever 'page' state changes
  useEffect(() => {
    Analytics.trackPageView(page);
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case 'features':
        return <FeaturesPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms-of-service':
        return <TermsOfServicePage />;
      case 'data-security':
        return <DataSecurityPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <ComingSoonPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar activePage={page} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;