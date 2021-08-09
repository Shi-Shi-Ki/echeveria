import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MessagesEntity } from './messages.entity'

@Entity('threads')
export class ThreadsEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, comment: '最終メッセージ投稿日時' })
  latestAt!: Date

  @Column({ nullable: false, comment: '最終メッセージ投稿者ユーザID' })
  latestUid!: number

  // メッセージ_TBL
  @OneToMany((type) => MessagesEntity, (m) => m.thread)
  messages!: MessagesEntity[]
}

