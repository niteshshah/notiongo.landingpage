import React from 'react';
import CtaSection from '../components/CtaSection';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-20 animate-in fade-in duration-500">
      <div className="bg-slate-50 border-b border-slate-200 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-12 text-slate-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              At NotionGo, we believe your data belongs to you. This Privacy Policy explains how NotionGo ("we", "us", or "our") handles your information when you use our mobile application and website.
            </p>
            <p className="font-medium text-indigo-700 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              In short: We do not store your Notion data on our servers. Your content connects directly from your device to Notion's API.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Don't Collect</h2>
            <p className="mb-4">
              Unlike many other apps, NotionGo is designed as a client-side interface. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500">
              <li>We <strong>do not</strong> have access to your Notion database contents.</li>
              <li>We <strong>do not</strong> store your Notion API Key on our servers.</li>
              <li>We <strong>do not</strong> track your specific entries or forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Local Data Storage</h2>
            <p className="mb-4">
              Your configurations, including form definitions and your Notion Integration Token (API Key), are stored locally on your device using secure system storage mechanisms (e.g., LocalStorage or Keychain depending on the platform).
            </p>
            <p>
              If you delete the NotionGo app or clear your browser data, this local configuration data will be removed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Services</h2>
            <p className="mb-4">
              <strong>Notion Labs, Inc.</strong><br/>
              NotionGo functions as a third-party client for Notion. When you use the app, you are interacting directly with Notion's services. Please refer to Notion's Privacy Policy to understand how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at support@notiongo.app.
            </p>
          </section>
        </div>
      </div>
      <CtaSection />
    </div>
  );
};

export default PrivacyPolicyPage;