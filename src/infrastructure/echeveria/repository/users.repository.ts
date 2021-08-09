import { Injectable } from '@nestjs/common'
import { UsersEntity } from '../typeorm/users.entity'
import { BaseRepository } from './base.repository'

@Injectable()
export class UsersRepository extends BaseRepository(UsersEntity) {
}

