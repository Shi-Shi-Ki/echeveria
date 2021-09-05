import { ThreadsEntity } from '../entity/threads.entity'
import { BaseQueryBuilder } from '../../typeorm/querybuilder/base.querybuilder'
import { ThreadByMessages } from '../dto/threadByMessages.dto'
import { EntityRepository, SelectQueryBuilder } from 'typeorm'

@EntityRepository(ThreadsEntity)
export class ThreadByMessagesQueryBuilder extends BaseQueryBuilder<ThreadByMessages, ThreadsEntity, ThreadsEntity> {
  constructor(
  ) {
    super(ThreadsEntity)
  }
  protected build(): SelectQueryBuilder<ThreadsEntity> {
    return this.getQueryBuilder()
      .select([
        "t.id as threadId",
        "m.*",
      ]).from<ThreadsEntity>("threads", "t")
      .innerJoin("messages", "m", "t.id = m.threadId")
      .where("t.id = :thread_id", { thread_id: this.queryParam.threadId })
  }
}

