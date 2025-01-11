

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/en/HomePage';
import PrivacyPolicy from './pages/en/PrivacyPolicy';
import TermsOfService from './pages/en/TermsOfService';
import HomePageZh from './pages/zh/HomePage';
import PrivacyPolicyZh from './pages/zh/PrivacyPolicy';
import TermsOfServiceZh from './pages/zh/TermsOfService';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/zh" element={<HomePageZh />} />
          <Route path="/zh/privacy" element={<PrivacyPolicyZh  />} />
          <Route path="/zh/terms" element={<TermsOfServiceZh  />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;



