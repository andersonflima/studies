import { MongoClient } from 'mongodb';

async function getMongoClient() {
    const uri = "mongodb://localhost:27017/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('mydatabase');
        console.log('Connected to MongoDB:', await db.collections());
    } finally {
        await client.close();
    }
}

getMongoClient().catch(console.error);
