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
import SignUpPage from './components/connectionPages/signup/SignupPage';
import MainLayout from './components/Layouts/MainLayout';
import SimpleLayout from './components/Layouts/SimpleLayout';
import SigninPage from './components/connectionPages/signin/SigninPage';
import NotFoundPage from './components/ErrorPage/NotFoundPage';


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
        
        <Routes>
          <Route element={<MainLayout  mode={mode} toggleTheme={toggleTheme} />} >
              <Route index  element={<LandingPage  mode={mode}  />} />
          </Route>
          <Route element={<SimpleLayout/>}>
               <Route path="/contact-detail" element={<ContactDetail  mode={mode} toggleTheme={toggleTheme} />} />
               <Route path="/inscription" element={<SignUpPage mode={mode} toggleTheme={toggleTheme}  />} />
               <Route path="/connexion" element={<SigninPage mode={mode} toggleTheme={toggleTheme}  />} />
               <Route path='*'  element={<NotFoundPage/>} />
          </Route>
         
        </Routes>
       
      </Router>
    </ThemeProvider>
  );
}

export default App;
