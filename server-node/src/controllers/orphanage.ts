import { Request, Response } from 'express'
import { Orphanage } from '../entities/orphanage'
import dataSource from '../database/connection'

export async function createOrphanage(req: Request, res: Response) {

  const repo = dataSource.getRepository(Orphanage)

  const imagesReq = req.files as Express.Multer.File[]

  const images = imagesReq.map(x => { 
    return {
      name: x.filename
    }
  })

  const obj = repo.create({	
    name: req.body.name,
    phone: req.body.phone,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    instructions: req.body.instructions,
    open_time: req.body.open_time,
    open_week: req.body.open_week,
    images
  })

  const data = await repo.save(obj)
  
  res.status(201).send(data)
}

export async function listOrphanage(req: Request, res: Response) {

  const repo = dataSource.getRepository(Orphanage)

  const data = await repo.find()
    
  res.status(200).send(data)
}

export async function findOrphanage(req: Request, res: Response) {

  const repo = dataSource.getRepository(Orphanage)

  const data = await repo.findOneOrFail({
    where: {
      id: Number(req.params.id),
    },
    relations: ['images']
  })

  data.images = data.images.map(x => {
    console.log( 0);
        return {
      ...x,
      image_url: `http://localhost:3333/uploads/${x.name}`
    } 
  })
    
  res.status(200).send(data)
}