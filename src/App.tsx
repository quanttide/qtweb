import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import BusinessSystem from './components/BusinessSystem';
import Development from './components/Development';
import Culture from './components/Culture';
import News from './components/News';
import JoinUs from './components/JoinUs';
import Team from './components/Team';

function App() {
  return (
   <Router>
     <Routes>
        <Route path="/" element={<About />} />
        <Route path="/business" element={<BusinessSystem />} />
        <Route path="/development" element={<Development />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/news" element={<News />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
