// Analytics Utility
// This abstraction allows you to easily swap backend providers (GA4, Mixpanel, etc.)

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type EventCategory = 'Navigation' | 'Conversion' | 'Engagement' | 'Social';

export const Analytics = {
  /**
   * Initialize analytics (e.g., check for consent, init 3rd party scripts)
   */
  init: () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 [Analytics] Initialized');
    }
  },

  /**
   * Track a page view
   * @param path - The page path or name (e.g., 'home', 'features')
   */
  trackPageView: (path: string) => {
    // Log to console for development/demo
    console.log(`📊 [Analytics] Page View: /${path}`);

    // Example integration for Google Analytics 4 (if script is present)
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: path,
        page_location: window.location.href,
        page_path: `/${path}`,
      });
    }
  },

  /**
   * Track a user interaction event
   * @param category - High-level category (Navigation, Conversion, etc.)
   * @param action - Specific action (Click, Submit, Scroll)
   * @param label - (Optional) Additional context (e.g., 'Hero Button', 'Footer Link')
   */
  trackEvent: (category: EventCategory, action: string, label?: string) => {
    // Log to console
    console.log(`📊 [Analytics] Event: [${category}] ${action} ${label ? `(${label})` : ''}`);

    // Example integration for Google Analytics 4
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  }
};
