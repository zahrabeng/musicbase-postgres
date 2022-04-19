const {Client} = require('pg');
const client = new Client ({
    database:"musicbase",
})

async function excecute(){
    await client.connect();
    const searchTerm = "ie";
    const text = "SELECT * FROM artists WHERE name LIKE $1";
    const values = [`%${searchTerm}%`];

    const res = await client.query(text,values);
    console.table(res.rows);

    await client.end();
}

excecute()