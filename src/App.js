
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Playlist from './components/Playlist';

function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Home/>} />
            <Route path="/playlist/:id" element={<Playlist/>} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
