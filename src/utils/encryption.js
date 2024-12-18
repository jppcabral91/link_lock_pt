import CryptoJS from "crypto-js";

// Função para encriptar um URL com uma palavra-passe
export const encryptUrl = (url, password) => {
  try {
    if (!url || !password) {
      throw new Error("URL e palavra-passe são obrigatórios.");
    }
    return CryptoJS.AES.encrypt(url, password).toString();
  } catch (error) {
    console.error("Erro ao encriptar o URL:", error);
    return null;
  }
};

// Função para desencriptar um URL encriptado com uma palavra-passe
export const decryptUrl = (encryptedData, password) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, password);
    const decryptedUrl = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedUrl) {
      throw new Error("Falha na desencriptação. Palavra-passe incorreta.");
    }

    return decryptedUrl;
  } catch (error) {
    console.error("Erro ao desencriptar o URL:", error);
    return null;
  }
};
