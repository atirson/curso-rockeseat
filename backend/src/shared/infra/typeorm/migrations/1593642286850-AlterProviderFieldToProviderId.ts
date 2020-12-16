import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";
import { query } from "express";

export default  class AlterProviderFieldToProviderId1593642286850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('appointments','provider');
      await queryRunner.addColumn('appointments',new TableColumn({
        name:'provider_id',
        type:'uuid',
        isNullable:true,
      }),
      );

      await queryRunner.createForeignKey('appointments', new TableForeignKey({
        name:'appointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName:'users',
        onDelete:'SET NULL', // o que vai acontecer com os agendamentos dessse usuario caso ele seja deletado no sistema
        onUpdate:'CASCADE'// caso alguma informaçã ocomo o ID for alterado essa informação reflita nos relacionamentos
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('appointments', 'appointmentProvider');
      await queryRunner.dropColumn('appointments','provider_id');
      await queryRunner.addColumn('appointments', new TableColumn({
        name:'provider',
        type:'varchar',
      }));
    }

}
