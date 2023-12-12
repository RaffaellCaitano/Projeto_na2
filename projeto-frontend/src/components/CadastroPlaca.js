import React, { useState } from 'react';

const CadastroPlaca = () => {
  const [cidade, setCidade] = useState('');
  const [foto, setFoto] = useState(null);

  const handleCidadeChange = (e) => {
    setCidade(e.target.value);
  };

  const handleFotoChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('foto', foto);
    formData.append('cidade', cidade);

    try {
      // Implemente o código para enviar os dados ao backend
      // ...
      console.log('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Placa</h2>
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
        <div>
          <label htmlFor="foto">Foto (PNG):</label>
          <input type="file" id="foto" accept=".png" onChange={handleFotoChange} />
        </div>
        <button type="submit">Cadastrar Placa</button>
      </form>
    </div>
  );
};

export default CadastroPlaca;
