import express from 'express'
import { createOrphanage, findOrphanage, listOrphanage } from './controllers/orphanage'
import multer from 'multer'
import uploadConfig from './config/upload'

const routes = express.Router()
const upload = multer(uploadConfig)


routes.post('/orphanages/', upload.array('images'), createOrphanage)
routes.get('/orphanages/', listOrphanage)
routes.get('/orphanages/:id', findOrphanage)

export default routes