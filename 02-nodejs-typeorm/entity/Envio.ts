import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("envios")
export class Envio extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  desde: string;

  @Column()
  hasta: string;

  @Column()
  entrega_estimada: string;

  @CreateDateColumn()
  creado: Date;

  @UpdateDateColumn()
  actualizado: Date;

  @Column()
  peso_kgs?: number;
}
