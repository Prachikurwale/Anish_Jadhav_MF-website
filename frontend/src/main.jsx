import React, { StrictMode } from 'react'; // React को भी इंपोर्ट करें
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    // 💡 ध्यान दें: अब React.StrictMode सही तरीके से इंपोर्टेड है।
    <StrictMode> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}