import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages & Components
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectPage from './pages/ProjectPage';
import Contact from './pages/Contact';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer/Footer';

import linkData from './data/project-data.json';

function App() {
  return (
    <>
      <Router>
        <div className='App bg-accent'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work linkData={linkData} />} />
            <Route path='/work/:id' element={<ProjectPage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
