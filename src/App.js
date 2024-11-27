import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
//import { lightTheme, darkTheme } from './theme';
import { HashRouter as Router, Route, Routes, } from 'react-router-dom'
//import Header from './components/Layouts/Header';
import LandingPage from './components/LandingPage';
import ContactDetail from './components/ContactDetailPage/ContactDetail';
import Footer from './components/Layouts/Footer';
import { CssBaseline } from '@mui/material';
import { createCustomTheme } from "./themes";
import Navbar from './components/Layouts/Navbar';
// import react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  //const [darkMode, setDarkMode] = useState(false);

  const [mode, setMode] = useState("dark");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createCustomTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
        {/*<Header onToggleTheme={() => setDarkMode(!darkMode)} />*/}
         <Navbar  mode={mode} toggleTheme={toggleTheme}  />
        <Routes>
          <Route path="/" element={<LandingPage mode={mode} />} />
          <Route path="/contact-detail/:id" element={<ContactDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
