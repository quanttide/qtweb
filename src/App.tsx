import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import BusinessSystem from './pages/BusinessSystem';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import JoinUs from './pages/JoinUs';

function App() {
  return (
   <Router>
     <Routes>
        <Route path="/" element={<About />} />
        <Route path="/business" element={<BusinessSystem />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
