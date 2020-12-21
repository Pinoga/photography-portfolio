import express from 'express'
import PhotosController from './controllers/PhotosController'

const routes = express.Router()
const photosController = new PhotosController()

routes.get('/photos', photosController.index)

export default routes
