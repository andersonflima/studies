import { createConnection } from 'mysql';

function getMySQLConnection() {
    const connection = createConnection({
        host: 'localhost',
        user: 'myuser',
        password: 'mypassword',
        database: 'mydatabase'
    });

    connection.connect(error => {
        if (error) throw error;
        console.log('Connected to MySQL:', connection);
    });

    return connection;
}

getMySQLConnection();
