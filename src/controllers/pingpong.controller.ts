import { Controller } from '@nestjs/common';
import { GrpcMethod } from "@nestjs/microservices/decorators/message-pattern.decorator"
import { Inject } from "@nestjs/common/decorators/core/inject.decorator"
import { Metadata } from "grpc"
import { Observable } from "rxjs/internal/Observable"
import { PingRequest, PingResponse, PingPongControllerMethods } from "../gen/pingpong"
import { PingpongService } from "../services/pingpong.service"
import { Logger } from "../util/logger/logger.service"
import { UsersRepository } from "../infrastructure/echeveria/repository/users.repository"
import { ThreadsRepository } from "../infrastructure/echeveria/repository/threads.repository"

@Controller('pingpong')
@PingPongControllerMethods()
export class PingpongController {
  constructor(
    private logger: Logger,
    private users: UsersRepository,
    private threads: ThreadsRepository,
    private pingpongService: PingpongService
  ) {}
  @GrpcMethod('PingPong', 'ping')
  ping(
    request: PingRequest,
    metadata?: Metadata
  ): Promise<PingResponse> | PingResponse {

this.logger.error(`aaa`)
const res = async () => {
  await this.users.findAll().then(r => {
this.logger.error(`findAll users data.`)
console.log(r)
  })
  await this.threads.findAll().then(r => {
this.logger.error(`findAll threads data.`)
console.log(r)
  })
}
res()
this.logger.error(`bbb`)

    return {
      id: request.id,
      name: `Hello, World (request: ${request.id})`
    } as PingResponse
  }
}

