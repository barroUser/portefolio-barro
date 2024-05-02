// import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';

import { Header } from './components/Header';
import './styles/App.css';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Service from './pages/Service';
import { Footer } from './components/Footer';
import Competence from './pages/Competence';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="App-header">
        <Element name="accueil">
          <Accueil />
        </Element>

        <Element name="apropos">
          <Apropos />
        </Element>
        
        <Element name="competence">
          <Competence />
        </Element>

        <Element name="service">
          <Service />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      
        {/* <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/apropos' element={<Apropos/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Service/>} />
        </Routes> */}
       {/* <p className='App-logo'><b>Portefolio</b></p> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
