import { Module } from '@nestjs/common';
import { Transport } from "@nestjs/microservices/enums/transport.enum"
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientsModule } from "@nestjs/microservices/module/clients.module"
import { PingpongModule } from './usecase/pingpong/pingpong.module'
import { TypeOrmCustomLogger } from '@logger/typeorm/TypeOrmCustomLogger'
import { getMetadataArgsStorage } from 'typeorm'
import { join } from 'path'

// docker内で起動する際のipは"0.0.0.0"にすること（localhostだと"address not available"というエラーが発生する）
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PingPong',
        transport: Transport.GRPC,
        options: {
          url: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
          package: 'echeveria.sample',
          protoPath: join(__dirname, "proto/pingpong.proto"),
        },
      },
    ]),
    TypeOrmModule.forRootAsync({
      useFactory: async (): Promise<any> => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'echeveria',
        entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
        logging: true,
        logger: new TypeOrmCustomLogger()
      }),
    }),
    PingpongModule,
  ],
})
export class AppModule {}

