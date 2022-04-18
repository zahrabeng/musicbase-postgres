const {Client} = require('pg');
require ('dotenv').config();

const client = new Client ({
    user:"academy",
    password: process.env.password,
    database:"musicbase"
});

async function excecute(){
    try{

    await client.connect();
    const res = client.query("SELECT * FROM artists");
    console.log(res.rows);
    }
    catch(ex){
        console.log(`Something wronh happened ${ex}`)
    }
    finally{
        await client.end();
        console.log("Client disconnected")
    }
}

excecute()