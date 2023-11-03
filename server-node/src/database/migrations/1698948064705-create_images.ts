import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateImages1698948064705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'orphanage_id',
          type: 'integer',
        },
      ],
      foreignKeys: [
        {
          name: 'orphanage_image',
          columnNames: ['orphanage_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'orphanages',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      ]
    }))    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images')
  }
}