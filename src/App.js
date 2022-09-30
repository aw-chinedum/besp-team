import Home from './pages/Home.js';
import { useState } from 'react';
import Members from './pages/Members.js';
import NotFound from './pages/NotFound.js';
import { BrowserRouter, Link, Route, Routes , useParams} from "react-router-dom";
//~ import './App.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/members" element={<Members/>} />
            <Route path="/members/:page" element={<Members/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>      
    </div>

    
  );
}

export default App;
