import { Injectable } from '@nestjs/common';
import { Observable } from "rxjs/internal/Observable"
import { OnModuleInit } from "@nestjs/common/interfaces/hooks/on-init.interface"
import { Inject } from "@nestjs/common/decorators/core/inject.decorator"
import { ClientGrpc } from '@nestjs/microservices'
import { Metadata } from "grpc"

interface PingService {
  //ping(date: { id: number }): Observable<any>
  ping(request: { id: number }, metadata?: Metadata): Observable<{ id: number, name: string }>
}

@Injectable()
export class AppService implements OnModuleInit {
  private pingService: PingService = {} as PingService

  constructor(
    @Inject("PING_PONG") private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.pingService = this.client.getService<PingService>("AppService")
    //this.pingService = this.client.getService<PingService>("PingService")
  }

  getPingResponse(): Observable<{ id: number, name: string }> {
  //getPingResponse(): Observable<string> {
    return this.pingService.ping({ id: 1 })
  }
}

