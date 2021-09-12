import { PingpongController } from './pingpong/pingpong.controller'
import { PingpongService } from './pingpong/pingpong.service'
import { PingpongModule } from './pingpong/pingpong.module'

export const AllUseCaseControllers = [
  PingpongController,
]

export const AllUseCaseServices = [
  PingpongService,
]

export const AllUseCaseModules = [
  PingpongModule,
]

