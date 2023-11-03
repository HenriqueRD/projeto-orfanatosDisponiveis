import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Image } from "./image"

@Entity('orphanages')
export class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  phone: string

  @Column()
  latitude: number

  @Column()
  longitude: number
  
  @Column()
  description: string
  
  @Column()
  instructions: string
  
  @Column()
  open_time: string
  
  @Column()
  open_week: boolean

  @OneToMany(() => Image, image => image.orphanage, { cascade: ['insert', 'update'] })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[]
}