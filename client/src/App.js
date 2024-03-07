import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages & Components
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <div>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
