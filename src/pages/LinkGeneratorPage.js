import React, { useState } from "react";
import Form from "../components/form/Form";
import LinkDisplay from "../components/linkDisplay/LinkDisplay";
import { encryptUrl } from "../utils/encryption"; // Usa o utilitário de encriptação

const LinkGeneratorPage = () => {
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = () => {
    setError(""); // Limpa erros anteriores

    if (!url || !password) {
      setError("Por favor, insira um URL válido e uma palavra-passe.");
      return;
    }

    // Encripta o URL com a palavra-passe usando o utilitário
    const encrypted = encryptUrl(url, password);

    if (encrypted) {
      // Gera o link protegido
      const protectedLink = `${window.location.origin}/access#${encrypted}`;
      setGeneratedLink(protectedLink);
    } else {
      setError("Ocorreu um erro ao gerar o link. Tente novamente.");
    }
  };

  return (
    <div className="page-container">
      <h1>Gerador de Links Protegidos</h1>
      <p>Insira um URL e uma palavra-passe para gerar um link seguro.</p>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <Form
        url={url}
        setUrl={setUrl}
        password={password}
        setPassword={setPassword}
        onSubmit={handleGenerate}
      />
      <LinkDisplay generatedLink={generatedLink} />
    </div>
  );
};

export default LinkGeneratorPage;
