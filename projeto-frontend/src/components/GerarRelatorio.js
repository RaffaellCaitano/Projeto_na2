import React, { useState } from 'react';

const GerarRelatorio = () => {
  const [cidade, setCidade] = useState('');

  const handleCidadeChange = (e) => {
    setCidade(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Implemente o código para gerar o relatório e fazer o download
      // ...
      console.log('Relatório gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar o relatório:', error);
    }
  };

  return (
    <div>
      <h2>Gerar Relatório</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={handleCidadeChange}
          />
        </div>
        <button type="submit">Gerar Relatório</button>
      </form>
    </div>
  );
};

export default GerarRelatorio;
