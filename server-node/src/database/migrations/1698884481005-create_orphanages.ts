import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateOrphanages1698884481005 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
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
          name: 'phone',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal'
        },
        {
          name: 'longitude',
          type: 'decimal'
        },
        {
          name: 'description',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'open_time',
          type: 'varchar',
        },
        {
          name: 'open_week',
          type: 'boolean',
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages')
  }
}