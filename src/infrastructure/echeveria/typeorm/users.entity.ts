import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ default: true })
  isActive!: boolean;
}

