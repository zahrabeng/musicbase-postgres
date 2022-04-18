const {Client} = require('pg');
const client = new Client ({database:"musicbase"});

async function excecute(){
    await client.connect();
    const text = "SELECT * FROM artists WHERE id = $1";
    const values = [3];

    const res = await client.query(text,values)
    console.table(res.rows)
    await client.end()
}

excecute()
