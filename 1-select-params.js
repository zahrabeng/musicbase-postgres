const {Client} = require('pg');
const client = new Client ({database:"musicbase"});

async function excecute(){
    await client.connect();
}

