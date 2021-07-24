import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service';
import { GrpcMethod } from "@nestjs/microservices/decorators/message-pattern.decorator"
import { ServerUnaryCall, Metadata } from "grpc"
import { Observable } from "rxjs/internal/Observable"
//import { PingPongServer, PingPongServiceController, PingResponse, PingRequest } from "./gen/pingpong_usecase"
//import { PingRequest, PingResponse, PingPongControllerMethods } from "./gen/pingpong"
//import { Logger } from "./util/logger/logger.service"
//import { UsersService } from "./users.service"
import { Inject } from "@nestjs/common/decorators/core/inject.decorator"

//@Controller()
@Controller('app')
//@PingPongServer()
//export class AppController implements PingPongServiceController {
//@PingPongControllerMethods()
export class AppController {
/*
  //private readonly logger = new Logger(AppController.name)
  constructor(
    private logger: Logger,
    private users: UsersService
  ) {}
  @GrpcMethod("AppService")
  ping(
    request: PingRequest,
    metadata?: Metadata
  ): Promise<PingResponse> | PingResponse {
  //): PingResponse {
    this.logger.error(`call Ping rpc`)
const res = async () => {
  return await this.users.findAll().then(r => {
this.logger.error(`aaa`)
console.log(r)
this.logger.error(`bbb`)
  })
}
res()
this.logger.error(`ccc`)
    return {
      id: request.id,
      name: `Hello, World (request: ${request.id})`
    } as PingResponse
  }
*/
}
/*
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //call(): Observable<{ id: number, name: string }> {
  call(): Observable<any> {
    return this.appService.getPingResponse()
  }
}
*/

