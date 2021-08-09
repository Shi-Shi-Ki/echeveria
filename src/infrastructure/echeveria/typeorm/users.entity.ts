import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MessagesEntity } from './messages.entity'

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, comment: '姓' })
  firstName!: string

  @Column({ nullable: false, comment: '名' })
  lastName!: string

  @Column({
    type: 'tinyint',
    nullable: false,
    default: 0,
    comment: 'アクティブフラグ'
  })
  isActive!: boolean

  // メッセージ_TBL
  @OneToMany((type) => MessagesEntity, (m) => m.fromUser)
  messages!: MessagesEntity[]
}

