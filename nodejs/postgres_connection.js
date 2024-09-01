const { Client } = require('pg');

async function getPostgresClient() {
    const client = new Client({
        user: 'myuser',
        host: 'localhost',
        database: 'mydatabase',
        password: 'mypassword',
        port: 5432,
    });

    await client.connect();
    console.log('Connected to PostgreSQL:', client);
    await client.end();
}

getPostgresClient().catch(console.error);