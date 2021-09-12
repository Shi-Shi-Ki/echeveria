import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from "@nestjs/microservices/decorators/message-pattern.decorator"
import { Inject } from "@nestjs/common/decorators/core/inject.decorator"
import { Metadata } from "grpc"
import { Observable } from "rxjs/internal/Observable"
import { PingRequest, PingResponse, PingPongControllerMethods } from "../../gen/pingpong"
import { PingpongService } from "./pingpong.service"
import { Logger } from "../../util/logger/logger.service"
import { Connection } from 'typeorm'

import { UsersRepository } from "../../infrastructure/echeveria/repository/users.repository"
import { ThreadsRepository } from "../../infrastructure/echeveria/repository/threads.repository"
import { MessagesRepository } from "../../infrastructure/echeveria/repository/messages.repository"

import { ThreadByMessagesQueryBuilder } from "../../infrastructure/echeveria/querybuilder/threadByMessages.querybuilder"
import { ThreadByMessages } from "../../infrastructure/echeveria/dto/threadByMessages.dto"
import { MessagesEntity } from "../../infrastructure/echeveria/entity/messages.entity"

//@Controller('pingpong')
@Controller()
@PingPongControllerMethods()
export class PingpongController {
  constructor(
    private logger: Logger,
    private pingpongService: PingpongService,
    private readonly connection: Connection,
  ) {}
  @GrpcMethod('PingPong', 'ping')
  //@Get('ping')
  ping(
    request: PingRequest,
    metadata?: Metadata
  ): Promise<PingResponse> | PingResponse {

this.logger.error(`AAA`)
const res = async () => {
  // out Transaction
  const threadsNt = this.connection.getCustomRepository(ThreadsRepository)
  threadsNt.findAll().then(r => {
    this.logger.error(`(out transaction) findAll thread data.`)
    console.log(r)
  })
  const queryBuilderNt = this.connection.getCustomRepository(ThreadByMessagesQueryBuilder)
  queryBuilderNt.withParam({
    threadId: 1,
    messages: {} as MessagesEntity,
  }).getRaws().then(r => {
    this.logger.error(`(out transaction) exec query builder.`)
    console.log(r)
  })

  // on Transaction
  this.connection.transaction(async manager => {
    const users = manager.getCustomRepository(UsersRepository)
    const threads = manager.getCustomRepository(ThreadsRepository)
    const messages = manager.getCustomRepository(MessagesRepository)
    const threadByMsg = manager.getCustomRepository(ThreadByMessagesQueryBuilder)
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
    threadByMsg.withParam({
      threadId: 1,
      messages: {} as MessagesEntity,
    }).getRaws().then(r => {
      this.logger.error(`(in transaction) exec query builder.`)
      console.log(r)
    })
  })
}
res()
this.logger.error(`BBB`)

    return {
      id: request.id,
      name: `Hello, World (request: ${request.id})`
    } as PingResponse
  }
}

