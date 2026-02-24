import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';
import Button from './Button';
import { APP_NAME, LOGO_SRC } from '../constants';
import { Analytics } from '../utils/analytics';
import { navigate } from '../App';

interface NavbarProps {
  activePage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activePage = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (pageName: string) => {
    const baseClass = "text-sm font-medium transition-colors";
    return activePage === pageName
      ? `${baseClass} text-indigo-600`
      : `${baseClass} text-slate-600 hover:text-indigo-600`;
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    Analytics.trackEvent('Navigation', 'Click Link', page);
    navigate(page);
    setMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    Analytics.trackEvent('Conversion', 'Click CTA', 'Navbar Get Started');
    navigate('home');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2"
            onClick={(e) => handleNav(e, 'home')}
          >
            {logoError ? (
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
                <Database size={20} className="text-white" />
              </div>
            ) : (
              <img
                src={LOGO_SRC}
                alt={`${APP_NAME} Logo`}
                className="w-10 h-10 rounded-xl shadow-sm object-cover"
                onError={() => setLogoError(true)}
              />
            )}
            <span className="text-xl font-bold tracking-tight text-slate-900">{APP_NAME}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/features" onClick={(e) => handleNav(e, 'features')} className={getLinkClass('features')}>Features</a>
            <a href="/how-it-works" onClick={(e) => handleNav(e, 'how-it-works')} className={getLinkClass('how-it-works')}>How it Works</a>
            <a href="/contact" onClick={(e) => handleNav(e, 'contact')} className={getLinkClass('contact')}>Contact</a>
            <Button size="sm" className="shadow-none" onClick={handleGetStarted}>Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 h-screen sm:h-auto">
          <a href="/features" className="text-base font-medium text-slate-600 py-2 text-left" onClick={(e) => handleNav(e, 'features')}>Features</a>
          <a href="/how-it-works" className="text-base font-medium text-slate-600 py-2 text-left" onClick={(e) => handleNav(e, 'how-it-works')}>How it Works</a>
          <a href="/contact" className="text-base font-medium text-slate-600 py-2 text-left" onClick={(e) => handleNav(e, 'contact')}>Contact</a>
          <Button className="w-full" onClick={handleGetStarted}>Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
