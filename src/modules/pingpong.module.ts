import { Module } from '@nestjs/common';
import { LoggerModule } from "../util/logger/logger.module"
import { PingpongController } from '../controllers/pingpong.controller';
import { PingpongService } from '../services/pingpong.service';
import { RepositoryModule } from "../infrastructure/echeveria/repository/repository.module"

@Module({
  imports: [
    RepositoryModule,
    LoggerModule,
  ],
  controllers: [PingpongController],
  providers: [PingpongService],
})
export class PingpongModule {}

