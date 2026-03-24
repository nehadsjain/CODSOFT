import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: radial-gradient(circle at top right, rgba(0, 242, 254, 0.05), transparent 40%),
              radial-gradient(circle at bottom left, rgba(79, 172, 254, 0.05), transparent 40%);
  pointer-events: none;
`;

function App() {
  return (
    <AppContainer>
      <BackgroundOverlay />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </AppContainer>
  );
}

export default App;
