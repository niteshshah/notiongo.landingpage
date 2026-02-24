import React from 'react';
import { ExternalLink, Home, Info, Shield, FileText, MessageSquare, Lock, Map } from 'lucide-react';
import { APP_NAME } from '../constants';
import { navigate } from '../App';

const SitemapPage: React.FC = () => {
  const sitePages = [
    {
      title: 'Home',
      url: '/',
      page: 'home',
      description: 'Main landing page with app overview and download options',
      icon: <Home size={20} />,
      priority: 'High'
    },
    {
      title: 'Features',
      url: '/features',
      page: 'features',
      description: 'Detailed overview of NotionGo features and capabilities',
      icon: <Info size={20} />,
      priority: 'High'
    },
    {
      title: 'How It Works',
      url: '/how-it-works',
      page: 'how-it-works',
      description: 'Step-by-step guide on how to use NotionGo',
      icon: <Info size={20} />,
      priority: 'High'
    },
    {
      title: 'Contact',
      url: '/contact',
      page: 'contact',
      description: 'Get in touch with our support team',
      icon: <MessageSquare size={20} />,
      priority: 'Medium'
    },
    {
      title: 'Data Security',
      url: '/data-security',
      page: 'data-security',
      description: 'Information about how we protect your data',
      icon: <Shield size={20} />,
      priority: 'Medium'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      page: 'privacy-policy',
      description: 'Our privacy policy and data handling practices',
      icon: <FileText size={20} />,
      priority: 'Low'
    },
    {
      title: 'Terms of Service',
      url: '/terms-of-service',
      page: 'terms-of-service',
      description: 'Terms and conditions for using NotionGo',
      icon: <FileText size={20} />,
      priority: 'Low'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Map size={16} />
            Site Navigation
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Sitemap</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find all pages and sections available on {APP_NAME}. Navigate easily to any part of our website.
          </p>
        </div>

        {/* Site Pages Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {sitePages.map((sPage, index) => (
            <a
              key={index}
              href={sPage.url}
              onClick={(e) => { e.preventDefault(); navigate(sPage.page); }}
              className="block bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                  {sPage.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {sPage.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(sPage.priority)}`}>
                      {sPage.priority}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-2">
                    {sPage.description}
                  </p>
                  <div className="flex items-center text-indigo-600 text-sm font-medium">
                    <span>Visit page</span>
                    <ExternalLink size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-slate-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Sitemap</h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-600">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">For Users</h3>
              <p className="text-sm leading-relaxed">
                This sitemap helps you navigate all available pages and sections on our website. 
                Click on any page above to jump directly to that section.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">For Search Engines</h3>
              <p className="text-sm leading-relaxed">
                We also maintain an <a href="/sitemap.xml" className="text-indigo-600 hover:underline">XML sitemap</a> that helps 
                search engines discover and index our content effectively.
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              <strong>Last Updated:</strong> December 23, 2025 | 
              <strong>Pages:</strong> {sitePages.length} total
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;