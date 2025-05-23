import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Certificados from "./components/Certificados";
import ProjetosEbac from "./components/ProjetosEbac"; // Importando o novo componente
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/ProjetosEbac" element={<ProjetosEbac />} /> {/* Corrigido aqui */}
          <Route path="/contato" element={<Contato />} />
          <Route path="/certificados" element={<Certificados />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
