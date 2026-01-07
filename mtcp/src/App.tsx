import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import Photos from './pages/Photos';
import Donations from './pages/Donations';
import Joining from './pages/Joining';
import Links from './pages/Links';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/joining" element={<Joining />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
