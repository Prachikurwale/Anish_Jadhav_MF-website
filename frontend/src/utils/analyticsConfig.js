// Simple analytics configuration
export const ANALYTICS_CONFIG = {
  // Enable/disable analytics
  enabled: true,
  
  // Development mode settings
  debugMode: import.meta.env.DEV,
  
  // Basic events
  events: {
    PAGE_VIEW: 'page_view',
    SECTION_VIEW: 'section_view',
    BUTTON_CLICK: 'button_click',
    GALLERY_INTERACTION: 'gallery_interaction',
    FACILITY_INTERACTION: 'facility_interaction',
    USER_ENGAGEMENT: 'user_engagement'
  }
};

// Page names mapping
export const PAGE_NAMES = {
  '/': 'Home',
  '/campus': 'Campus & Facilities',
  '/involved': 'Get Involved',
  '/about': 'About Anish',
  '/programs': 'Our Programs',
  '/contact': 'Contact Us'
};
