import React from 'react';
import CtaSection from '../components/CtaSection';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="pt-20 animate-in fade-in duration-500">
      <div className="bg-slate-50 border-b border-slate-200 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-4 text-slate-600">Effective Date: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-12 text-slate-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using NotionGo, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Relationship with Notion</h2>
            <p className="mb-4">
              NotionGo is an independent third-party application. It is not affiliated with, endorsed by, sponsored by, or in any way officially connected with Notion Labs, Inc.
            </p>
            <p>
              "Notion" is a trademark of Notion Labs, Inc.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the NotionGo app for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disclaimer</h2>
            <p className="mb-4">
              The materials on NotionGo are provided on an 'as is' basis. NotionGo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitations</h2>
            <p>
              In no event shall NotionGo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use NotionGo.
            </p>
          </section>
        </div>
      </div>
      {/* <CtaSection /> */}
    </div>
  );
};

export default TermsOfServicePage;