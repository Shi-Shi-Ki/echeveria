import { SelectQueryBuilder } from "typeorm"

export class BaseQueryBuilder<I, O> {
  constructor(
    private selectQueryBuilder: SelectQueryBuilder<O>
  ) {}

  protected build(queryParam: I): SelectQueryBuilder<O> {
    throw new Error('this overwriting method.')
  }
}

