import React from 'react';
import CadastroPlaca from './components/CadastroPlaca';
import GerarRelatorio from './components/GerarRelatorio';
import ConsultaPlaca from './components/ConsultaPlaca';
import './App.css';  // Adicione estilos se necessário

function App() {
  return (
    <div className="App">
      <CadastroPlaca />
      <GerarRelatorio />
      <ConsultaPlaca />
    </div>
  );
}

export default App;
