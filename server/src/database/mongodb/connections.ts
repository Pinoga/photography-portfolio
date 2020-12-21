import { MongoClient, Db } from 'mongodb'
export async function connect(client: MongoClient) {
    let db
    try {
        db = await client.connect()
        console.log('Connected successfully!')
    } catch (err) {
        console.log(err)
    }
    return db
}

export async function findDocuments(db: Db, collectionName: string) {
    let docs
    try {
        const collection = db.collection(collectionName)
        docs = await collection.find({}).toArray()
        console.log('Found!')
        console.log(docs)
    } catch (err) {
        console.log(err)
    }
    return docs
}

export async function run(client: MongoClient) {
    try {
        await connect(client)
        const db = client.db('portfolioweb')
        await findDocuments(db, 'photos')
    } catch (err) {
        console.log(err)
    }
}
