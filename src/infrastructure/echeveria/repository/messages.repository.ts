import { Injectable } from '@nestjs/common'
import { MessagesEntity } from '../entity/messages.entity'
import { BaseRepository } from '../../typeorm/repository/base.repository'
import { EntityRepository } from 'typeorm'

@Injectable()
@EntityRepository(MessagesEntity)
export class MessagesRepository extends BaseRepository(MessagesEntity) {
}

