import React from "react";
import "./Form.css"; // Importa os estilos específicos do formulário

const Form = ({ url, setUrl, password, setPassword, onSubmit }) => {
  return (
    <div className="form-container">
      <label className="form-label">URL:</label>
      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="form-input"
      />

      <label className="form-label">Palavra-Passe:</label>
      <input
        type="password"
        placeholder="Escolha uma palavra-passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-input"
      />

      <button onClick={onSubmit} className="form-button">
        Gerar Link
      </button>
    </div>
  );
};

export default Form;
