import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Orphanage } from "./orphanage"

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage
}