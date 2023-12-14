import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./components/Home"
import './App.css';
import HeroBanner from './components/HeroBanner';


import Info from './components/Info';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:action" element={<HeroBanner />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
