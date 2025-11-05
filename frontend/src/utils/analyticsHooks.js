import { useEffect } from 'react';
import { trackPageView, trackUserEngagement } from './analytics';

// Simple hook to track page visits
export const usePageAnalytics = (pageName) => {
  useEffect(() => {
    const startTime = Date.now();
    
    // Track page load
    trackPageView(pageName);
    
    // Track when user leaves the page
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackUserEngagement('page_time_spent', {
        page_name: pageName,
        time_spent_seconds: timeSpent
      });
    };
  }, [pageName]);
};

// Simple hook to track scroll depth
export const useScrollAnalytics = (pageName) => {
  useEffect(() => {
    let maxScrollDepth = 0;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Track milestones at 25%, 50%, 75%, 100%
        if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
          trackUserEngagement('scroll_depth', { page_name: pageName, depth: '25%' });
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
          trackUserEngagement('scroll_depth', { page_name: pageName, depth: '50%' });
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 100) {
          trackUserEngagement('scroll_depth', { page_name: pageName, depth: '75%' });
        } else if (maxScrollDepth >= 100) {
          trackUserEngagement('scroll_depth', { page_name: pageName, depth: '100%' });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageName]);
};
