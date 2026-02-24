import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DataSecurityPage from './pages/DataSecurityPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';
import { Analytics } from './utils/analytics';

const PAGE_META: Record<string, { title: string; description: string }> = {
  home: {
    title: 'NotionGo - Calming Database Frontend for Notion',
    description: 'A calming database frontend that brings peace to your Notion workflow. Create custom forms, manage multiple databases, and capture ideas instantly with privacy-first design.',
  },
  features: {
    title: 'Features - NotionGo',
    description: 'Explore NotionGo features: custom forms, multi-database management, offline mode, and a distraction-free mobile experience for Notion.',
  },
  'how-it-works': {
    title: 'How It Works - NotionGo',
    description: 'Learn how NotionGo connects to your Notion databases and simplifies data entry on mobile in three easy steps.',
  },
  contact: {
    title: 'Contact - NotionGo',
    description: 'Get in touch with the NotionGo team. We\'d love to hear your feedback and answer your questions.',
  },
  'privacy-policy': {
    title: 'Privacy Policy - NotionGo',
    description: 'Read the NotionGo privacy policy. Learn how we handle your data with a privacy-first approach.',
  },
  'terms-of-service': {
    title: 'Terms of Service - NotionGo',
    description: 'Review the NotionGo terms of service and conditions for using our app.',
  },
  'data-security': {
    title: 'Data Security - NotionGo',
    description: 'Learn about NotionGo\'s data security practices and how we protect your information.',
  },
  sitemap: {
    title: 'Sitemap - NotionGo',
    description: 'Browse all pages on the NotionGo website.',
  },
};

function getPageFromPath(pathname: string): string {
  const path = pathname.replace(/^\//, '').replace(/\/$/, '');
  return path || 'home';
}

export function navigate(path: string) {
  const url = path === 'home' || path === '/' ? '/' : `/${path}`;
  window.history.pushState({}, '', url);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

const App: React.FC = () => {
  const [page, setPage] = useState<string>(() => getPageFromPath(window.location.pathname));

  // Initialize Analytics on mount
  useEffect(() => {
    Analytics.init();
  }, []);

  // Handle Routing
  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track page views & update <head> meta tags whenever 'page' state changes
  useEffect(() => {
    Analytics.trackPageView(page);
    window.scrollTo(0, 0);

    const meta = PAGE_META[page] || PAGE_META.home;

    // Update document title
    document.title = meta.title;

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const pageUrl = page === 'home' ? 'https://notiongo.app/' : `https://notiongo.app/${page}`;
    if (canonical) canonical.href = pageUrl;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) metaDesc.content = meta.description;

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.content = meta.title;
    if (ogDesc) ogDesc.content = meta.description;
    if (ogUrl) ogUrl.content = pageUrl;

    // Update Twitter tags
    const twUrl = document.querySelector('meta[property="twitter:url"]') as HTMLMetaElement | null;
    const twTitle = document.querySelector('meta[property="twitter:title"]') as HTMLMetaElement | null;
    const twDesc = document.querySelector('meta[property="twitter:description"]') as HTMLMetaElement | null;
    if (twUrl) twUrl.content = pageUrl;
    if (twTitle) twTitle.content = meta.title;
    if (twDesc) twDesc.content = meta.description;
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
      case 'sitemap':
        return <SitemapPage />;
      case 'home':
      default:
        return <HomePage />;
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
