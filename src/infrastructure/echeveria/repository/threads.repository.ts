import { Injectable } from '@nestjs/common'
import { ThreadsEntity } from '../typeorm/threads.entity'
import { BaseRepository } from './base.repository'

@Injectable()
export class ThreadsRepository extends BaseRepository(ThreadsEntity) {
}

