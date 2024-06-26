import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PrimerasTablas1719414762709 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "envios",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "desde",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "hasta",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "entrega_estimada",
            type: "timestamptz",
            isNullable: false,
          },
          {
            name: "creado",
            type: "timestamptz",
            isNullable: false,
            default: "now()",
          },
          {
            name: "actualizado",
            type: "timestamptz",
            isNullable: false,
            default: "now()",
          },
        ],
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("envios");
  }
}
