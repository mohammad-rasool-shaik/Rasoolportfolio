import React from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { EducationExperience } from './components/sections/EducationExperience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Stats } from './components/sections/Stats';
import { TechStack } from './components/sections/TechStack';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Stats />
          <TechStack />
          <EducationExperience />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
