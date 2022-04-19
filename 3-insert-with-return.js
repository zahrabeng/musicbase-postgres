const {Client} = require('pg');
const client = new Client ({
    database:"musicbase"
});

async function excecute (){
    await client.connect();
    const text = "INSERT INTO artists (id, name) VALUES ($1, $2) RETURNING *";
    const values = [7, "Justin Timberlake"];

    const res = await client.query(text, values);
    console.log(res.rows)

    await client.end()
}

excecute()