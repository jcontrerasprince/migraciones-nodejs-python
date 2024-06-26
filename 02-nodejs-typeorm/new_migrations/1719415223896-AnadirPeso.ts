import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AnadirPeso1719415223896 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "envios",
      new TableColumn({
        name: "peso_kgs",
        type: "decimal(16,4)",
        isNullable: true,
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("envios", "peso_kgs");
  }
}
