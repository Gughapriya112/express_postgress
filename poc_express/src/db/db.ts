import pg from 'pg'
const { Client } = pg
const client = new Client()

async function dbConfig(dbName: any, query: any) {

    //DB connection creation
    const client = new Client({
        host: "localhost",
        user: "postgres",
        password: "password",
        port: 5432,
        database: dbName ? dbName : ''
    });
    await client.connect();
    //Query execution
    const res = await client.query(query);
    //end DB connection
    client.end();
    return res;
}

export default dbConfig;
