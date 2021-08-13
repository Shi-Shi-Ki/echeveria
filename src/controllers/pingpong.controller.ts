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
import { MessagesRepository } from "../infrastructure/echeveria/repository/messages.repository"
import { Connection } from 'typeorm'

@Controller('pingpong')
@PingPongControllerMethods()
export class PingpongController {
  constructor(
    private logger: Logger,
    private users: UsersRepository,
    private threads: ThreadsRepository,
    private pingpongService: PingpongService,
    private readonly connection: Connection,
  ) {}
  @GrpcMethod('PingPong', 'ping')
  ping(
    request: PingRequest,
    metadata?: Metadata
  ): Promise<PingResponse> | PingResponse {

this.logger.error(`aaa`)
const res = async () => {
  this.connection.transaction(async manager => {
    const users = manager.getCustomRepository(UsersRepository)
    const threads = manager.getCustomRepository(ThreadsRepository)
    const messages = manager.getCustomRepository(MessagesRepository)
    users.findAll().then(r => {
      this.logger.error(`(in transaction) findAll user data.`)
      console.log(r)
    })
    threads.findById(1).then(r => {
      this.logger.error(`(in transaction) findById thread data.`)
      console.log(r)
    })
    users.findById(2).then(r => {
      this.logger.error(`(in transaction) findById user data.`)
      console.log(r)
    })
    messages.findAll().then(r => {
      this.logger.error(`(in transaction) findAll message data.`)
      console.log(r)
    })
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

