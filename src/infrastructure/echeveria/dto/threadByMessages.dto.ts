import { BaseDto } from '../../typeorm/dto/base.dto'
import { MessagesEntity } from '../entity/messages.entity'

export interface ThreadByMessages extends BaseDto {
  threadId: number,
  messages: MessagesEntity,
}

