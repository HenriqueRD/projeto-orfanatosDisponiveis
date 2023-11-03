import express from 'express'
import cors from 'cors'
import routes from './routes'
import path from 'path'
import db  from './database/connection'

const api = express()
db.initialize()

api.use(cors())
api.use(express.json())
api.use(routes)

api.use('/uploads/', express.static(path.resolve(__dirname, '..', 'uploads')));

api.listen(3333)