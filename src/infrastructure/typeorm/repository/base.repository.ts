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
  findAll: () => Promise<T[]>
  findById: (id: number) => Promise<T | undefined>
}

class CoreRepository<T> extends Repository<T> {
  dummyMethod(v: string) {
    console.log(v)
  }
}

export function BaseRepository<T>(entity: Constructor<T>): Type<IBaseRepository<T>> {
  class BaseRepositoryHost extends Repository<T> implements IBaseRepository<T> {
    findAll(): Promise<T[]> {
      return this.find()
    }
    findById(id: number): Promise<T | undefined> {
      return this.findOne(id)
    }
  }
  return BaseRepositoryHost
}

