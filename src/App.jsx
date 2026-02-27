import React, { useState } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onOpenMenu={() => setIsMenuOpen(true)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}

export default App;
