import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaEvento1619518702143 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`
    //   CREATE TABLE evento (
    //     id SERIAL PRIMARY KEY,
    //     nome VARCHAR(255) NOT NULL,
    //     data TIMESTAMP NOT NULL,
    //     quantidade_ingressos NUMBER NOT NULL

    //   );
    // `);

    await queryRunner.query(`
      INSERT INTO evento (nome, data, quantidade_ingressos) VALUES
        ('Show Red Hot', '2023-11-04','3'),
        ('Show Coldplay', '2023-10-04','5');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE events;`);
  }
}
