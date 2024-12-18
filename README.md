# Ferramenta para Proteger Links com Palavra-Passe

## Descrição
Ferramenta para proteger links com palavra-passe, desenvolvida em React e alojada no GitHub Pages. Esta aplicação permite aos utilizadores encriptar URLs, gerando links protegidos que só podem ser acessados após introduzir a palavra-passe correta.

## Funcionalidades

### Encriptação e Desencriptação

*   Encriptação de URLs utilizando algoritmos de criptografia no lado do cliente.
*   Geração de links protegidos com palavra-passe.
*   Desencriptação de links diretamente no navegador, garantindo que os dados nunca são enviados para servidores externos.

### Interface

*   Interface simples e intuitiva.

## Tecnologias Utilizadas

### Frontend

*   React: Framework JavaScript para a construção do frontend.

### Criptografia

*   CryptoJS: Biblioteca para encriptação e desencriptação no lado do cliente.

### Alojamento

*   GitHub Pages: Serviço para alojamento do projeto.

## Como Utilizar

### Criar um Link Protegido

1.  Introduz o URL original.
2.  Define uma palavra-passe.
3.  Gera um link protegido.

### Aceder a um Link Protegido

1.  Acede ao link gerado.
2.  Introduz a palavra-passe associada.
3.  A ferramenta desencripta o URL original e redireciona-te ou apresenta o link.

## Como Configurar e Executar o Projeto Localmente

### Pré-requisitos

*   Node.js instalado (Download Node.js).
*   NPM ou Yarn para gerir pacotes.

### Passos para Instalação

1.  Clona o repositório:

    ```bash
git clone https://github.com/seu-username/link_lock_pt.git
cd link_lock_pt
```

2.  Instala as dependências:

    ```bash
npm install
```

    ou

    ```bash
yarn install
```

3.  Executa o projeto:

    ```bash
npm start
```

    ou

    ```bash
yarn start
```

### Dicas de Segurança

*   Utilize palavras-passe fortes e únicas para cada link protegido.
*   Não compartilhe as palavras-passe com terceiros.
*   Utilize um gerenciador de senhas para armazenar as palavras-passe de forma segura.

### Contribuição

*   Se você deseja contribuir para o projeto, por favor, leia o arquivo CONTRIBUTING.md para obter mais informações.
*   Se você encontrar um erro ou tiver uma sugestão, por favor, abra uma issue no repositório do GitHub.