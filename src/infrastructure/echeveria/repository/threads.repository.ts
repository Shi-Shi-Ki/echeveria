import { Injectable } from '@nestjs/common'
import { ThreadsEntity } from '../entity/threads.entity'
import { BaseRepository } from '../../typeorm/repository/base.repository'
import { EntityRepository } from 'typeorm'

@Injectable()
@EntityRepository(ThreadsEntity)
export class ThreadsRepository extends BaseRepository(ThreadsEntity) {
}

