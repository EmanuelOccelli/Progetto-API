import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Personaggi from './Components/Personaggi';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Titano from './Components/Titan'
import Cacciatore from './Components/Hunter'
import Stregone from './Components/Warlock'
import ListaAmici from './Components/ListaAmici'
import CercaArmiArmor from './Components/RicercaArmiArmature'

const Root = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/personaggi/*" element={<Personaggi />} />
          <Route path="/personaggi/hunter" element={<Cacciatore />} />
          <Route path="/personaggi/titan" element={< Titano />} />
          <Route path="/personaggi/warlock" element={< Stregone />} />
          <Route path="/Listaamici" element={<ListaAmici />} />
          <Route path="/cercaarmi" element={< CercaArmiArmor />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

