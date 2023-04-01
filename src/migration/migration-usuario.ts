import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaUsuario1619518655099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`
    //   CREATE TABLE usuario (
    //     id SERIAL PRIMARY KEY,
    //     nome VARCHAR(255) NOT NULL,
    //     email VARCHAR(255) NOT NULL,
    //     senha VARCHAR(255) NOT NULL
    //   );
    // `);

    await queryRunner.query(`
      INSERT INTO usuario (nome, email, senha) VALUES
        ('pedro', 'pedro@email.com','123pedro'),
        ('joana', 'joana@email.com','123joana');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE usuario;`);
  }
}
