import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';
import { ANALYTICS_CONFIG } from './analyticsConfig';

// Simple analytics event logging
export const logAnalyticsEvent = (eventName, parameters = {}) => {
  if (analytics && ANALYTICS_CONFIG.enabled) {
    try {
      logEvent(analytics, eventName, {
        ...parameters,
        timestamp: new Date().toISOString(),
        page_path: window.location.pathname
      });
      
      if (ANALYTICS_CONFIG.debugMode) {
        console.log('🔥 Analytics Event:', eventName, parameters);
      }
    } catch (error) {
      console.warn('Analytics logging failed:', error);
    }
  }
};

// Basic tracking functions
export const trackPageView = (pageName) => {
  logAnalyticsEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.pathname
  });
};

export const trackButtonClick = (buttonName, buttonLocation) => {
  logAnalyticsEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation
  });
};

export const trackSectionView = (sectionName, pageName) => {
  logAnalyticsEvent('section_view', {
    section_name: sectionName,
    page_name: pageName
  });
};

export const trackUserEngagement = (engagementType, details = {}) => {
  logAnalyticsEvent('user_engagement', {
    engagement_type: engagementType,
    ...details
  });
};

export const trackFacilityInteraction = (facilityName, interactionType) => {
  logAnalyticsEvent('facility_interaction', {
    facility_name: facilityName,
    interaction_type: interactionType
  });
};

export const trackGalleryInteraction = (itemName, interactionType) => {
  logAnalyticsEvent('gallery_interaction', {
    item_name: itemName,
    interaction_type: interactionType
  });
};
