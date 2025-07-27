import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import WelcomeScreen from "./Pages/WelcomeScreen";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import AnimatedBackground from "./components/Background";
import ProjectDetail from './components/ProjectDetail';

import NotFoundPage from "./Pages/404";
import ProjectDetails from './components/ProjectDetail';

function LandingPage({ showWelcome, setShowWelcome }) {
  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      ) : (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025 <a href="#" className="hover:underline">Utkarsh™</a>. All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(false); // Set false for now

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectDetails/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
