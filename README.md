# api-node-express-send-file
Poc de API NodeJs para envio de arquivos com Express  

## Comandos para criação do projeto  
1) mkdir api-node-express-send-file (nome do diretório do projeto)  
2) cd api-node-express-send-file  
3) npm init -y (comando para criação do projeto)  
4) ls  
  
## Comando para executar o projeto  
Executando só com o node: **node server.js**  
Usando o nodemon: **npm run dev**  
  
## Acessar o projeto pelo navegador  
ip_da_aplicacao:porta  
Ex.:  **localhost:3001**  
  
## Dependências utilizadas no projeto  
npm install express  
npm install -D nodemon 
npm install require-dir  
npm install cors  
  
## express  
**npm install express**  
O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel. É com o Express que criamos a API do projeto.  
  
## nodemon  
**npm install -D nodemon**  
Dependência para ser utilizada apenas no ambiente de desenvolvimento.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
Utilização:  
1) Acessa o **package.json**  
2) Em scripts, cria uma nova propriedade: **"dev": "nodemon server.js"**  
3) No terminal executa a aplicação usando o comando: **npm run dev**  
*Obs.:* O **npm run** serve para executar os comandos que estão em script  

## cors  
**npm install cors**  
Permite que outros endereços acessem nossa API. Isso serve pra quando nossa aplicação estiver hostadada em algum servidor usando algum domínio. Basicamente ele previne o acesso de domínios que não sáo o mesmo domínio de outros softwares da nossa API.  
