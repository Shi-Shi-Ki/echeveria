import { Module } from '@nestjs/common';
import { LoggerModule } from "../util/logger/logger.module"
import { PingpongController } from '../controllers/pingpong.controller';
import { PingpongService } from '../services/pingpong.service';
import { UsersModule } from '../modules/users.module'

@Module({
  imports: [
    UsersModule,
    LoggerModule,
  ],
  controllers: [PingpongController],
  providers: [PingpongService],
})
export class PingpongModule {}
