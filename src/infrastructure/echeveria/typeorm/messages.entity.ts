import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ThreadsEntity } from './threads.entity'
import { UsersEntity } from './users.entity'

@Entity('messages')
export class MessagesEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, comment: '内容' })
  contents!: string

  @Column({ type: 'tinyint', nullable: false, default: 0, comment: '既読フラグ' })
  isRead!: boolean

  @Column({ nullable: false, comment: '投稿日時' })
  sentAt!: Date

  // スレッド_TBL
  @ManyToOne((type) => ThreadsEntity)
  thread!: ThreadsEntity

  // ユーザ_TBL
  @ManyToOne((type) => UsersEntity, (u) => u.messages, { eager: true })
  fromUser!: UsersEntity
}

