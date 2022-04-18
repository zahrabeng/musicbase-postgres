const {Client} = require('pg');
require ('dotenv').config();

const client = new Client ({
    user:"academy",
    password: process.env.password,
    database:"musicbase"
});

async function excecute(){
    await client.connect();
    const res = client.query("SELECT * FROM artists");
    console.log(res.rows);
    await client.end();
}

excecute()