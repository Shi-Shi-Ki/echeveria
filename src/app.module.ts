import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from "@nestjs/microservices/module/clients.module"
import { Transport } from "@nestjs/microservices/enums/transport.enum"
import { join } from 'path'
import { LoggerModule } from "./util/logger/logger.module"
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from "./infrastructure/echeveria/typeorm/user.entity"
import { UsersModule } from './users.module'
import { UsersService } from './users.service'

@Module({
//  imports: [
//    ClientsModule.register([
//      {
//        name: "PING_PONG",
//        transport: Transport.GRPC,
//        options: {
//          url: "localhost:5000",
//          package: "echeveria.sample",
//          protoPath: join(__dirname, "../proto/pingpong.proto"),
//        },
//      }
//    ])
//  ],
  imports: [
    UsersModule,
    LoggerModule,
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
  ],
  controllers: [AppController],
  //providers: [AppService],
  //providers: [UsersService],
})
export class AppModule {}

