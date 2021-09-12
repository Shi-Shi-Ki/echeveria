import { Module } from '@nestjs/common';
import { Transport } from "@nestjs/microservices/enums/transport.enum"
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientsModule } from "@nestjs/microservices/module/clients.module"
import { AppController } from './app.controller';
import { PingpongModule } from './usecase/pingpong/pingpong.module';
import { PingpongController } from './usecase/pingpong/pingpong.controller';
import { PingpongService } from './usecase/pingpong/pingpong.service';
import { join } from 'path'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PingPong',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'echeveria.sample',
          protoPath: join(__dirname, "../proto/pingpong.proto"),
        },
      },
    ]),
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
      logging: true,
      logger: "file",
    }),
    PingpongModule,
  ],
})
export class AppModule {}

