# Firebase Analytics Integration Guide

## 🔥 Overview

Your AJMF Foundation website now has comprehensive Firebase Analytics integration that tracks user behavior, conversions, and provides detailed insights into how visitors interact with your site.

## 📊 What's Being Tracked

### Core Events
- **Page Views**: Every page visit with referrer information
- **Section Views**: When users scroll to different sections
- **Button Clicks**: All interactive button clicks
- **Gallery Interactions**: Hover, click, and view events on gallery items
- **Facility Interactions**: Interactions with facility cards
- **User Engagement**: Scroll depth, time spent, and interaction patterns

### Advanced Events
- **Conversions**: Donations, applications, contact form submissions
- **Social Shares**: When users share content on social media
- **File Downloads**: PDF downloads, media files
- **Outbound Links**: Clicks to external websites
- **Video Interactions**: Play, pause, completion tracking
- **Search Queries**: Site search behavior
- **Performance Metrics**: Page load times, Core Web Vitals
- **User Feedback**: Ratings and feedback submissions

## 🛠️ How to Use

### Basic Tracking (Already Implemented)
Your components are already tracking basic events. The analytics will work automatically!

### Advanced Tracking
Import and use the advanced hooks in your components:

```jsx
import { useConversionTracking } from '../utils/advancedAnalyticsHooks';

function DonationButton() {
  const { trackConversionEvent } = useConversionTracking();
  
  const handleDonation = (amount) => {
    // Your donation logic here
    trackConversionEvent('donation', amount, 'USD');
  };
  
  return <button onClick={() => handleDonation(100)}>Donate $100</button>;
}
```

### Social Sharing
```jsx
import { useSocialTracking } from '../utils/advancedAnalyticsHooks';

function ShareButton() {
  const { trackShare } = useSocialTracking();
  
  const handleShare = (platform) => {
    trackShare(platform, 'AJMF Foundation Page');
    // Your sharing logic here
  };
  
  return <button onClick={() => handleShare('facebook')}>Share on Facebook</button>;
}
```

### Video Tracking
```jsx
import { useVideoTracking } from '../utils/advancedAnalyticsHooks';

function VideoPlayer({ title }) {
  const { videoRef, trackPlay, trackPause, trackComplete, checkMilestones } = useVideoTracking(title);
  
  return (
    <video 
      ref={videoRef}
      onPlay={trackPlay}
      onPause={trackPause}
      onEnded={trackComplete}
      onTimeUpdate={checkMilestones}
    >
      <source src="your-video.mp4" type="video/mp4" />
    </video>
  );
}
```

### Link Tracking
```jsx
import { useLinkTracking } from '../utils/advancedAnalyticsHooks';

function ExternalLink({ href, children }) {
  const { trackExternalLink } = useLinkTracking();
  
  const handleClick = () => {
    trackExternalLink(href, children, 'footer');
  };
  
  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
```

## 🐛 Debug Panel

In development mode, you can access the Firebase Analytics Debug Panel:

1. **Keyboard Shortcut**: Press `Ctrl + Shift + A` to toggle the debug panel
2. **Visual Indicator**: Look for the small "🔥 Analytics" indicator in the bottom-right corner
3. **Event Monitoring**: View real-time analytics events as they're sent to Firebase

### Debug Panel Features
- ✅ Analytics status (Active/Inactive)
- 📊 Configuration overview
- 📝 Real-time event log
- 🔧 Tracking settings status
- 📋 Available event types

## 📈 Firebase Console

To view your analytics data:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: "ajmf-foundation"
3. Navigate to "Analytics" in the left sidebar
4. Explore your data in:
   - **Dashboards**: Overview of user activity
   - **Events**: Detailed event tracking
   - **Conversions**: Goal completions
   - **Audiences**: User segments
   - **Funnels**: User journey analysis

## 🎯 Key Metrics to Monitor

### Engagement Metrics
- Page views and unique visitors
- Average session duration
- Bounce rate
- Scroll depth distribution

### Conversion Metrics
- Contact form submissions
- Program inquiries
- Newsletter signups
- Donation completions

### User Journey
- Most visited pages
- Common navigation paths
- Drop-off points
- Time spent on different sections

### Performance Metrics
- Page load times
- User engagement by device type
- Geographic distribution of visitors

## 🔧 Configuration

### Enable/Disable Tracking
Edit `/src/utils/analyticsConfig.js`:

```javascript
export const ANALYTICS_CONFIG = {
  enabled: true, // Set to false to disable all tracking
  debugMode: import.meta.env.DEV, // Shows debug info in development
  // ... other settings
};
```

### Tracking Toggles
```javascript
export const TRACKING_CONFIG = {
  pageViews: true,
  scrollDepth: true,
  timeOnPage: true,
  userEngagement: true,
  errors: true,
  performanceMetrics: true,
  // ... other toggles
};
```

## 🚀 Best Practices

### 1. Respect User Privacy
- Analytics only tracks anonymous usage patterns
- No personal information is collected
- Consider adding a privacy notice

### 2. Monitor Performance
- Use the debug panel during development
- Check Firebase Console regularly
- Set up custom alerts for important metrics

### 3. Use Conversions Wisely
- Track meaningful actions (donations, applications)
- Set up conversion funnels to understand user journey
- Use A/B testing for optimization

### 4. Regular Review
- Weekly: Check key metrics and trends
- Monthly: Analyze user behavior patterns
- Quarterly: Review and optimize tracking strategy

## 🔍 Troubleshooting

### Analytics Not Working?
1. Check the debug panel (Ctrl + Shift + A)
2. Verify Firebase configuration in `/src/firebase.js`
3. Ensure you're not using an ad blocker
4. Check browser console for errors

### Events Not Appearing in Firebase Console?
- Events can take 24-48 hours to appear in reports
- Use DebugView in Firebase Console for real-time debugging
- Verify your Firebase project ID and configuration

### Debug Mode Not Showing Events?
1. Ensure you're in development mode
2. Check that `ANALYTICS_CONFIG.debugMode` is true
3. Open browser console to see debug logs

## 📞 Support

If you need help with Firebase Analytics:

1. Check the [Firebase Documentation](https://firebase.google.com/docs/analytics/web)
2. Review this implementation in the `/src/utils/` folder
3. Use the debug panel to troubleshoot issues
4. Contact your development team for custom tracking needs

---

## 🎉 You're All Set!

Your Firebase Analytics is now fully configured and tracking user behavior. The system will provide valuable insights into how visitors interact with the AJMF Foundation website, helping you make data-driven decisions to improve user experience and achieve your goals.

Visit your live website and interact with it, then check the Firebase Console in a day or two to see your data!
