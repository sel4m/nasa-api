import React from 'react'; 
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/nasaphoto" element={<NasaPhoto />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
