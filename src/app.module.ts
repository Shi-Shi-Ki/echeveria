import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PingpongModule } from './modules/pingpong.module';
import { PingpongController } from './controllers/pingpong.controller';
import { PingpongService } from './services/pingpong.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3390,
      username: 'dev',
      password: 'devdevdev',
      database: 'echeveria',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}'
      ],
      synchronize: true,
    }),
    PingpongModule,
  ],
})
export class AppModule {}

