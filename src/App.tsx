import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import Photos from './pages/Photos';
import Donations from './pages/Donations';
import Joining from './pages/Joining';
import Links from './pages/Links';

// Get base path from import.meta.env for Vite
const base = import.meta.env.BASE_URL || '/';

function App() {
  return (
    <BrowserRouter basename={base}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/joining" element={<Joining />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
