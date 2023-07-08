
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Playlist from './components/Playlist/Playlist';

function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Home/>} />
            <Route path="/playlist" element={<Playlist/>} />
            </Routes>
    </BrowserRouter>
);
}

export default App;
