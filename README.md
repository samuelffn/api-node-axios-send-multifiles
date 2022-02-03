# api-node-axios-send-multifiles
Poc de API NodeJs para envio de vários arquivos com Axios. Seria a mesma funcionalidade de usar um insomnia ou postman para fazer requisições em API's.  
  
## Comandos para criação do projeto  
1) mkdir api-node-axios-send-multifiles (nome do diretório do projeto)  
2) cd api-node-axios-send-multifiles  
3) npm init -y (comando para criação do projeto)  
4) ls  
  
## Comando para executar o projeto  
Instalando as dependências: **npm i**  
Executando só com o node: **node api.js**  
Usando o script para execução: **npm run start**   
  
## Dependências utilizadas no projeto  
npm i axios  
npm i form-data  
  
## Axios  
**npm i axios**  
Cliente HTTP baseado em promise para ser utilizado no navegador e no node.js.  
Links:  
- *https://www.npmjs.com/package/axios#using-applicationx-www-form-urlencoded-format*  
- *https://axios-http.com/*
  
## Form-Data  
**npm i form-data**  
Uma biblioteca para criar fluxos "multipart/form-data" legíveis. Pode ser usado para enviar formulários e uploads de arquivos para outros aplicativos da web.  
Utilizamos em conjunto com o axios para o envio de vários arquivos.  
Links:  
- *https://www.npmjs.com/package/form-data*  
- *https://github.com/ljharb/qs*
  
