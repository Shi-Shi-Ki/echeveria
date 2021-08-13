import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AllModels } from '../entity'
import { AllRepositories } from '../repository'

/*
 * 各Repository(=service)とEntityを束ねるModule
 */
@Module({
  imports: [
    TypeOrmModule.forFeature(AllModels)
  ],
  providers: AllRepositories,
  controllers: [],
  exports: AllRepositories,
})
export class RepositoryModule {}

