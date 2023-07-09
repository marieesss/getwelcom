import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Playlist from './components/Playlist/Playlist';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
