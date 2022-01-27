const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const url = 'http://localhost:3000/api/multiFiles';
send(url);

async function send(url) {
    try {
        const directory = path.join(__dirname, 'files');
        const files = await fs.promises.readdir(directory); //Listando os nomes dos arquivos
        const formData = new FormData();

        for (const nameFile of files) {
            const file = await fs.promises.readFile(`${directory}/${nameFile}`);
            formData.append('', Buffer.from(file, 'binary'), nameFile);
        }

        const response = await axios.post(url, formData, { headers: formData.getHeaders() });
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
}