import { Request, Response } from 'express'
import client from '../database/mongodb/client'

export default class PhotosController {
    async index(request: Request, response: Response) {
        try {
            await client.connect()
            const db = client.db('portfolioweb')
            const collection = db.collection('photos')
            const docs = await collection
                .find({}, { projection: { _id: 1, src: 1 } })
                .toArray()
            return response.json({ docs })
        } catch (error) {
            return response
                .status(400)
                .json({ error: "Couldn't connect to the database" })
        }
    }
}
