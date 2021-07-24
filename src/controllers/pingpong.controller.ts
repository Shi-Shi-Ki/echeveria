import { Controller } from '@nestjs/common';
import { GrpcMethod } from "@nestjs/microservices/decorators/message-pattern.decorator"
import { Metadata } from "grpc"
import { Observable } from "rxjs/internal/Observable"
import { PingRequest, PingResponse, PingPongControllerMethods } from "../gen/pingpong"
import { Logger } from "../util/logger/logger.service"
import { UsersService } from "../services/users.service"
import { PingpongService } from "../services/pingpong.service"
import { Inject } from "@nestjs/common/decorators/core/inject.decorator"

@Controller('pingpong')
@PingPongControllerMethods()
export class PingpongController {
  constructor(
    private logger: Logger,
    private users: UsersService,
    private pingpongService: PingpongService
  ) {}
  @GrpcMethod('PingPong', 'ping')
  ping(
    request: PingRequest,
    metadata?: Metadata
  ): Promise<PingResponse> | PingResponse {
this.logger.error(`aaa`)
const res = async () => {
  return await this.users.findAll().then(r => {
this.logger.error(`bbb`)
console.log(r)
this.pingpongService.showlog('called from PingpongController.')
  })
}
res()
this.logger.error(`ccc`)
    return {
      id: request.id,
      name: `Hello, World (request: ${request.id})`
    } as PingResponse
  }
}

