import { NestFactory } from '@nestjs/core'
import { GrpcOptions } from "@nestjs/microservices/interfaces/microservice-configuration.interface"
import { Transport } from "@nestjs/microservices/enums/transport.enum"
import { AppModule } from './app.module'
import { join } from 'path'

// docker内で起動する際のipは"0.0.0.0"にすること（localhostだと"address not available"というエラーが発生する）
async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
      package: 'echeveria.sample',
      protoPath: join(__dirname, "proto/pingpong.proto"),
    },
  })
  await app.listenAsync()
}
bootstrap()

