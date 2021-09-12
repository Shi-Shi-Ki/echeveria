import { NestFactory } from '@nestjs/core';
import { GrpcOptions } from "@nestjs/microservices/interfaces/microservice-configuration.interface"
import { Transport } from "@nestjs/microservices/enums/transport.enum"
import { AppModule } from './app.module';
import { join } from 'path'
import { Logger } from "./util/logger/logger.service"

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5000',
      //url: '0.0.0.0:5000',
      package: 'echeveria.sample',
      protoPath: join(__dirname, "../proto/pingpong.proto"),
    },
  })
  await app.listenAsync()
  //const app = await NestFactory.create(AppModule);
  //await app.listen(3000);
}
bootstrap()

