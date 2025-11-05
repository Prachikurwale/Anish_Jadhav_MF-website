# 🔥 Minimal Firebase Analytics Setup

## What's Included

Your AJMF Foundation website now has **minimal Firebase Analytics** that quietly tracks user behavior without any UI components.

### Core Files:
- `src/firebase.js` - Firebase initialization
- `src/utils/analytics.js` - Basic tracking functions  
- `src/utils/analyticsConfig.js` - Simple configuration
- `src/utils/analyticsHooks.js` - React hooks for page/scroll tracking

### What Gets Tracked:
✅ **Page Views** - Every page visit  
✅ **Button Clicks** - User interactions  
✅ **Scroll Depth** - 25%, 50%, 75%, 100%  
✅ **Time on Page** - How long users stay  
✅ **Section Views** - When users scroll to sections  
✅ **Gallery/Facility Interactions** - Campus page interactions

### Firebase Console:
View your data at: https://console.firebase.google.com/
- Project: `ajmf-foundation`
- Analytics section shows all user behavior
- Data appears within 24-48 hours

### Debug Mode:
In development, check browser console for:
```
🔥 Analytics Event: page_view {page_title: "Home", ...}
```

That's it! No UI, no debug panels, just clean analytics tracking. 🎯
