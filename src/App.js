// import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navigation from './components/Navigation';
import './styles/App.css';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Service from './pages/Service';
import { Footer } from './components/Footer';
import Competence from './pages/Competence';
import { theme } from './styles/theme';

function App() {
  return (
    <div className="App" style={{ backgroundColor: theme.colors.background }}>
      <Navigation />
      
      <main style={{ 
        paddingTop: theme.spacing.xl,
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh'
      }}>
        <Element name="accueil" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <Accueil />
        </Element>

        <Element name="apropos" style={{ padding: `${theme.spacing.xl} 0` }}>
          <Apropos />
        </Element>
        
        <Element name="competence" style={{ padding: `${theme.spacing.xl} 0`, backgroundColor: theme.colors.gray[100] }}>
          <Competence />
        </Element>

        <Element name="service" style={{ padding: `${theme.spacing.xl} 0` }}>
          <Service />
        </Element>

        <Element name="contact" style={{ 
          padding: `${theme.spacing.xl} 0`,
          backgroundColor: theme.colors.gray[100],
          borderRadius: theme.borderRadius.lg,
          margin: `${theme.spacing.xl} 0`
        }}>
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
