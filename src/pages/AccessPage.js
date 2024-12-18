import React, { useState } from "react";
import CryptoJS from "crypto-js";

const AccessPage = () => {
  const [password, setPassword] = useState("");
  const [decryptedUrl, setDecryptedUrl] = useState("");
  const [error, setError] = useState("");

  const handleAccess = () => {
    setError(""); // Limpa mensagens de erro anteriores

    // Obtém a parte encriptada do URL
    const encrypted = window.location.hash.substring(1);

    if (!encrypted) {
      setError("Nenhuma informação encriptada foi encontrada.");
      return;
    }

    try {
      // Tenta desencriptar o URL
      const bytes = CryptoJS.AES.decrypt(encrypted, password);
      const originalUrl = bytes.toString(CryptoJS.enc.Utf8);

      if (!originalUrl) throw new Error("Palavra-passe incorreta");

      setDecryptedUrl(originalUrl);
    } catch {
      setError("Falha na desencriptação. Verifique a palavra-passe.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Acesso ao Link Protegido</h1>
      <p>Insira a palavra-passe para desbloquear o link:</p>
      <input
        type="password"
        placeholder="Palavra-Passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          margin: "10px 0",
          padding: "10px",
          width: "100%",
          fontSize: "16px",
        }}
      />
      <button
        onClick={handleAccess}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Desbloquear Link
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          <strong>{error}</strong>
        </p>
      )}

      {decryptedUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>Link Original:</h3>
          <a
            href={decryptedUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#007BFF",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            {decryptedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default AccessPage;
