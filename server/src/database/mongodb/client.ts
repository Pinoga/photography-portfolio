import { MongoClient } from 'mongodb'
import url from './url'

const client = new MongoClient(url, { useUnifiedTopology: true })

export default client
