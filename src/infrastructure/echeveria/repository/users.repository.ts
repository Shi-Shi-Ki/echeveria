import { UsersEntity } from '../entity/users.entity'
import { BaseRepository } from '../../typeorm/repository/base.repository'
import { EntityRepository } from 'typeorm'

@EntityRepository(UsersEntity)
export class UsersRepository extends BaseRepository(UsersEntity) {
}

