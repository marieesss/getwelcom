
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Playlist from './components/Playlist/Playlist';
import Menu from './components/Layout/Menu';

function App() {

  return (
    <div>
    <Menu/>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Home/>} />
            <Route path="/playlist" element={<Playlist/>} />
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
