import { Injectable, Type } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

/*
 * "@InjectRepository"のパラメータはEntityクラスとして定義されている
 * ref)
 * https://docs.nestjs.com/techniques/database#repository-pattern 
 * -> users.service.tsを参照
 *
 * 各Repositoryで@InjectRepositoryや共通的なメソッドを定義するのは冗長...
 * そこで"Generics"と"inner class"を使って汎用的に使える形にする
 * ref)
 * https://github.com/nestjs/typeorm/issues/187#issuecomment-619904623
 */
type Constructor<C> = new (...args: any[]) => C

export interface IBaseRepository<T> {
  readonly repo: Repository<T>
  findAll: () => Promise<T[]>
}

export function BaseRepository<T>(entity: Constructor<T>): Type<IBaseRepository<T>> {
  class BaseRepositoryHost implements IBaseRepository<T> {
    constructor(
      @InjectRepository(entity)
      public readonly repo: Repository<T>
    ) {}

    findAll(): Promise<T[]> {
      return this.repo.find()
    }
    findOne(id: string): Promise<T | undefined> {
      return this.repo.findOne(id);
    }
    async remove(id: string): Promise<void> {
      await this.repo.delete(id);
    }
  }
  return BaseRepositoryHost
}

