import React from "react";
import "./LinkDisplay.css"; // Importa os estilos específicos do link gerado

const LinkDisplay = ({ generatedLink }) => {
  if (!generatedLink) return null;

  return (
    <div className="link-container">
      <h3 className="link-title">Link Gerado:</h3>
      <a
        href={generatedLink}
        target="_blank"
        rel="noopener noreferrer"
        className="link-output"
      >
        {generatedLink}
      </a>
    </div>
  );
};

export default LinkDisplay;
