import { DataSource } from "typeorm"
import { Orphanage } from "../entities/orphanage"
import { Image } from "../entities/image"

const dataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/data.sqlite3",
  migrations: [
    "./src/database/migrations/*.ts"
  ],
  entities: [
    Orphanage,
    Image
  ]
})

export default dataSource