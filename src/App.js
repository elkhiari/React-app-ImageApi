import App0 from './Component/Navbar';
import Imagec from './pages/Imagec'
import Videoc from './pages/Videoc'
import Hel0 from './Component/Searchbox';
import Home from './pages/Home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <App0 />
    <Hel0 />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/image" element={<Imagec />}/>
      <Route path="/video" element={<Videoc />}/>
    </Routes>
    </>
  );
}

export default App;
