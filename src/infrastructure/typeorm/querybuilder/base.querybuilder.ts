import { Type } from '@nestjs/common'
import { SelectQueryBuilder, Repository } from "typeorm"
import { BaseEntity } from '../entity/base.entity'
import { BaseDto } from '../dto/base.dto'
import { ICommonEntity } from "../common/entity.common"

/*
 * TypeORM.SelectQueryBuilderについて
 * https://typeorm.io/#/select-query-builder
 * https://github.com/typeorm/typeorm/blob/master/src/query-builder/SelectQueryBuilder.ts
 *
 * T: クエリーパラメータのDTOインタフェース
 * U: TypeORMにあるQueryBuilderのジェネリクス型として渡すEntity
 * V: クエリー結果を詰めるEntity/DTO
 */
export class BaseQueryBuilder<T extends BaseDto, U extends BaseEntity, V extends ICommonEntity> extends Repository<U> {
  protected queryParam: T = {} as T
  constructor(
    private _entity: { new (): U }
  ) {
    super()
  }
  // 各QueryBuilder側でオーバーライドして実装する
  protected build(): SelectQueryBuilder<U> {
    throw new Error("This method overriding!")
  }
  protected getQueryBuilder(): SelectQueryBuilder<U> {
    // constructorで初期化しようとするとundefinedになるのでここに定義
    return this.createQueryBuilder(this._entity.name)
  }
  // UseCaseあるいはQueryBuilderからクエリーパラメータを渡す
  withParam(qp: T): this {
    this.queryParam = qp
    return this
  }
  // よく使用するQueryBuilder実行後の結果取得メソッド
  getRaws(): Promise<V[]> {
    return this.build().getRawMany<V>()
  }
}

