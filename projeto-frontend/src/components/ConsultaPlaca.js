import React, { useState } from 'react';

const ConsultaPlaca = () => {
  const [placa, setPlaca] = useState('');
  const [resultado, setResultado] = useState(null);

  const handlePlacaChange = (e) => {
    setPlaca(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Implemente o código para consultar a placa
      // ...
      console.log('Consulta realizada com sucesso!');
      // Exemplo de como exibir o resultado:
      setResultado('A placa está no banco de dados.');
    } catch (error) {
      console.error('Erro ao consultar a placa:', error);
      setResultado('Erro ao consultar a placa.');
    }
  };

  return (
    <div>
      <h2>Consultar Placa</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="placa">Placa:</label>
          <input
            type="text"
            id="placa"
            value={placa}
            onChange={handlePlacaChange}
          />
        </div>
        <button type="submit">Consultar Placa</button>
        {resultado && <p>{resultado}</p>}
      </form>
    </div>
  );
};

export default ConsultaPlaca;
