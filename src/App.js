import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { HashRouter as Router, Route, Routes, } from 'react-router-dom'
import Header from './components/Layouts/Header';
import LandingPage from './components/LandingPage';
import ContactDetail from './components/ContactDetailPage/ContactDetail';
import Footer from './components/Layouts/Footer';
import { CssBaseline } from '@mui/material';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> 
      <Router>
        <Header onToggleTheme={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-detail/:id" element={<ContactDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
