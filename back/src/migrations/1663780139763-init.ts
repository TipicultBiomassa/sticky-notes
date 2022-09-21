import { MigrationInterface, QueryRunner } from "typeorm";

export class init1663780139763 implements MigrationInterface {
    name = 'init1663780139763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e78ea213ea304810c373096d7c" ON "note" ("content") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_e78ea213ea304810c373096d7c"`);
        await queryRunner.query(`DROP TABLE "note"`);
    }

}
