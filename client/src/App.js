import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages & Components
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <div className='App bg-accent'>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
