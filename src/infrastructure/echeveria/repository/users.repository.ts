import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsersEntity } from '../typeorm/users.entity'

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private repo: Repository<UsersEntity>,
  ) {}

  findAll(): Promise<UsersEntity[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<UsersEntity | undefined> {
    return this.repo.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}

