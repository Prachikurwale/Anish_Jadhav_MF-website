// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrvbOeTrgx56x-Vp9cF0Tj5g9gma11yWk",
  authDomain: "ajmf-foundation.firebaseapp.com",
  projectId: "ajmf-foundation",
  storageBucket: "ajmf-foundation.firebasestorage.app",
  messagingSenderId: "538531202761",
  appId: "1:538531202761:web:1cda97448df09801bf2f18",
  measurementId: "G-J6QN33Q1LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics with proper error handling
let analytics = null;

const initializeAnalytics = async () => {
  try {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Check if analytics is supported
      const analyticsSupported = await isSupported();
      
      if (analyticsSupported) {
        analytics = getAnalytics(app);
        console.log('🔥 Firebase Analytics initialized successfully');
      } else {
        console.warn('Firebase Analytics is not supported in this environment');
      }
    }
  } catch (error) {
    console.error('Failed to initialize Firebase Analytics:', error);
  }
};

// Initialize analytics
initializeAnalytics();

export { app, analytics };
